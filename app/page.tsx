"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PreviewPanel from "./components/PreviewPanel";
import TemplateSelector from "./components/TemplateSelector";
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
    experiencia: "",
    habilidades: "",
  });
  const [template, setTemplate] = useState<"modern" | "classic" | "minimal">("modern");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-12">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome
              </label>
              <input
                type="text"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Seu e-mail"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefone
              </label>
              <input
                type="tel"
                value={data.telefone}
                onChange={(e) => setData({ ...data, telefone: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Seu telefone"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Experiência Profissional
              </label>
              <textarea
                value={data.experiencia}
                onChange={(e) => setData({ ...data, experiencia: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                rows={4}
                placeholder="Descreva sua experiência profissional"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Habilidades
              </label>
              <input
                type="text"
                value={data.habilidades}
                onChange={(e) => setData({ ...data, habilidades: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Suas habilidades"
              />
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setShowPreview(true)}
                className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Visualizar Prévia
              </button>
              <PdfDownloadButton data={data} />
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
