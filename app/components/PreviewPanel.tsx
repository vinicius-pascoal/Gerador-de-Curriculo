"use client";

import { CurriculumData } from "./types";

interface PreviewPanelProps {
  data: CurriculumData;
  template: "modern" | "classic" | "minimal";
}

export default function PreviewPanel({ data, template }: PreviewPanelProps) {
  const getTemplateStyles = () => {
    switch (template) {
      case "modern":
        return "bg-gradient-to-br from-blue-50 to-indigo-50";
      case "classic":
        return "bg-white border-l-4 border-blue-600";
      case "minimal":
        return "bg-gray-50";
      default:
        return "bg-white";
    }
  };

  return (
    <div className={`w-full rounded-lg p-8 shadow-lg ${getTemplateStyles()}`}>
      <div className="space-y-6">
        {/* Cabeçalho */}
        <div className="border-b-2 border-gray-300 pb-4">
          <h1 className="text-4xl font-bold text-gray-900">{data.nome || "Seu Nome"}</h1>
          <div className="mt-2 flex gap-4 text-sm text-gray-600">
            {data.email && <span>{data.email}</span>}
            {data.telefone && <span>|</span>}
            {data.telefone && <span>{data.telefone}</span>}
          </div>
        </div>

        {/* Experiência Profissional */}
        {data.experiencia && (
          <div>
            <h2 className="text-xl font-bold text-gray-900">Experiência Profissional</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{data.experiencia}</p>
          </div>
        )}

        {/* Habilidades */}
        {data.habilidades && (
          <div>
            <h2 className="text-xl font-bold text-gray-900">Habilidades</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.habilidades.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
