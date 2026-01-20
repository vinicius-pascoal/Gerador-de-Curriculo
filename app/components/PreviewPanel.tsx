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
        return {
          container: "bg-white shadow-2xl",
          header: "bg-indigo-700 text-white p-8",
          headerTitle: "text-5xl font-bold tracking-tight",
          headerInfo: "mt-3 flex gap-4 text-sm opacity-90",
          sectionTitle: "text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4 mt-6",
          categoryBorder: "border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg",
          skill: "bg-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-sm text-sm",
        };
      case "classic":
        return {
          container: "bg-white shadow-lg border-2 border-gray-200",
          header: "border-b-4 border-gray-800 pb-6 pt-4 px-8",
          headerTitle: "text-5xl font-serif font-bold text-gray-900 tracking-tight",
          headerInfo: "mt-3 flex gap-6 text-sm text-gray-700 font-serif",
          sectionTitle: "text-xl font-serif font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-4 mt-6",
          categoryBorder: "border-l-2 border-gray-500 pl-4",
          skill: "bg-gray-800 text-white px-4 py-1.5 rounded font-serif text-sm",
        };
      case "minimal":
        return {
          container: "bg-gray-50 shadow-md border border-gray-300",
          header: "pb-4 pt-4 px-8 border-b border-gray-400 bg-gray-50",
          headerTitle: "text-4xl font-light text-gray-900 tracking-wide",
          headerInfo: "mt-2 flex gap-4 text-xs text-gray-600 uppercase tracking-wider",
          sectionTitle: "text-lg font-light text-gray-900 uppercase tracking-widest mb-4 mt-6",
          categoryBorder: "border-l border-gray-300 pl-4",
          skill: "border border-gray-400 text-gray-700 px-3 py-1 rounded-sm text-xs uppercase tracking-wide",
        };
      default:
        return {
          container: "bg-white shadow-lg",
          header: "pb-4 pt-6 px-8",
          headerTitle: "text-4xl font-bold text-gray-900",
          headerInfo: "mt-2 flex gap-4 text-sm text-gray-600",
          sectionTitle: "text-xl font-bold text-gray-900",
          categoryBorder: "border-l-2 border-blue-500 pl-4",
          skill: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <div className={`w-full rounded-lg overflow-hidden ${styles.container}`}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{data.nome || "Seu Nome"}</h1>
        <div className={styles.headerInfo}>
          {data.email && (
            <span className="flex items-center gap-1">
              <span>✉</span> {data.email}
            </span>
          )}
          {data.telefone && (
            <span className="flex items-center gap-1">
              <span>☎</span> {data.telefone}
            </span>
          )}
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Resumo Profissional */}
        {data.resumo && (
          <div>
            <h2 className={styles.sectionTitle}>Resumo Profissional</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
              {data.resumo}
            </p>
          </div>
        )}

        {/* Experiência Profissional */}
        {data.experiencia && (
          <div>
            <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
              {data.experiencia}
            </p>
          </div>
        )}

        {/* Habilidades */}
        {data.habilidades && (
          <div>
            <h2 className={styles.sectionTitle}>Habilidades</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {data.habilidades.split(",").map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Categorias Personalizadas */}
        {data.categories && data.categories.map((category) => (
          category.items.length > 0 && (
            <div key={category.id}>
              <h2 className={styles.sectionTitle}>{category.name}</h2>
              <div className="space-y-4 mt-3">
                {category.items.map((item) => (
                  <div key={item.id} className={styles.categoryBorder}>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-sm text-gray-600 mt-1 font-medium">{item.subtitle}</p>
                        )}
                      </div>
                      <div className="text-right text-sm text-gray-600 shrink-0">
                        {item.date && <p className="font-medium">{item.date}</p>}
                        {item.location && <p className="text-xs mt-0.5">{item.location}</p>}
                      </div>
                    </div>
                    {item.description && (
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
