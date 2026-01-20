"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PreviewPanel from "./components/PreviewPanel";
import TemplateSelector from "./components/TemplateSelector";
import CategoryManager from "./components/CategoryManager";
import { CurriculumData } from "./components/types";

// Importar PdfDownloadButton dinamicamente para evitar problemas com @react-pdf/renderer no SSR
const PdfDownloadButton = dynamic(
  () => import("./components/PdfDownloadButton"),
  { ssr: false }
);

export default function Home() {
  const [data, setData] = useState<CurriculumData>({
    nome: "",
    email: "",
    telefone: "",
    resumo: "",
    experiencia: "",
    habilidades: "",
    categories: [],
  });
  const [template, setTemplate] = useState<"modern" | "classic" | "minimal">("modern");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gerador de Currículo Dinâmico
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Crie um currículo profissional em minutos com múltiplos templates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna Esquerda - Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Editor de Dados
            </h2>

            <TemplateSelector currentTemplate={template} onTemplateChange={setTemplate} />

            <div className="mt-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600">👤</span>
                Nome Completo
              </label>
              <input
                type="text"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-blue-600">✉️</span>
                  E-mail
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-blue-600">☎️</span>
                  Telefone
                </label>
                <input
                  type="tel"
                  value={data.telefone}
                  onChange={(e) => setData({ ...data, telefone: e.target.value })}
                  className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600">📝</span>
                Resumo Profissional
              </label>
              <textarea
                value={data.resumo}
                onChange={(e) => setData({ ...data, resumo: e.target.value })}
                className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                rows={3}
                placeholder="Um breve resumo sobre você e sua carreira profissional"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600">💼</span>
                Experiência Profissional
              </label>
              <textarea
                value={data.experiencia}
                onChange={(e) => setData({ ...data, experiencia: e.target.value })}
                className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white resize-none"
                rows={4}
                placeholder="Descreva suas experiências profissionais mais relevantes"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <span className="text-blue-600">⭐</span>
                Habilidades
              </label>
              <input
                type="text"
                value={data.habilidades}
                onChange={(e) => setData({ ...data, habilidades: e.target.value })}
                className="block w-full rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Ex: JavaScript, React, Node.js, Python (separe por vírgulas)"
              />
            </div>

            <div className="mt-6 border-t-2 border-gray-200 dark:border-gray-700 pt-6">
              <CategoryManager
                categories={data.categories}
                onCategoriesChange={(categories) => setData({ ...data, categories })}
              />
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowPreview(true)}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span>👁️</span>
                Visualizar Prévia
              </button>
              <PdfDownloadButton data={data} template={template} />
            </div>
          </div>

          {/* Coluna Direita - Preview */}
          {showPreview && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Prévia do Currículo
                </h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <PreviewPanel data={data} template={template} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
