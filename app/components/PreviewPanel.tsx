"use client";

import { CurriculumData } from "./types";

interface PreviewPanelProps {
  data: CurriculumData;
  template: "modern" | "classic" | "minimal";
}

export default function PreviewPanel({ data, template }: PreviewPanelProps) {
  const colors = data.colorScheme || {
    primary: template === "modern" ? "#4f46e5" : template === "classic" ? "#1f2937" : "#6b7280",
    secondary: template === "modern" ? "#3b82f6" : template === "classic" ? "#374151" : "#9ca3af",
    accent: template === "modern" ? "#60a5fa" : template === "classic" ? "#4b5563" : "#d1d5db",
  };

  const getTemplateStyles = () => {
    switch (template) {
      case "modern":
        return {
          container: "bg-white shadow-2xl",
          header: "text-white p-8",
          headerStyle: { backgroundColor: colors.primary },
          headerTitle: "text-5xl font-bold tracking-tight",
          headerInfo: "mt-3 flex gap-4 text-sm opacity-90",
          sectionTitle: "text-2xl font-bold pb-2 mb-4 mt-6",
          sectionTitleStyle: { color: colors.primary, borderBottom: `2px solid ${colors.primary}` },
          categoryBorder: "pl-4 p-4 rounded-r-lg",
          categoryBorderStyle: { borderLeft: `4px solid ${colors.secondary}`, backgroundColor: `${colors.secondary}15` },
          skill: "text-white px-4 py-2 rounded-full font-medium shadow-sm text-sm",
          skillStyle: { backgroundColor: colors.secondary },
        };
      case "classic":
        return {
          container: "bg-white shadow-lg border-2 border-gray-200",
          header: "pb-6 pt-4 px-8",
          headerStyle: { borderBottom: `4px solid ${colors.primary}` },
          headerTitle: "text-5xl font-serif font-bold tracking-tight",
          headerTitleStyle: { color: colors.primary },
          headerInfo: "mt-3 flex gap-6 text-sm font-serif",
          headerInfoStyle: { color: colors.secondary },
          sectionTitle: "text-xl font-serif font-bold uppercase tracking-wider pb-1 mb-4 mt-6",
          sectionTitleStyle: { color: colors.primary, borderBottom: `1px solid ${colors.secondary}` },
          categoryBorder: "pl-4",
          categoryBorderStyle: { borderLeft: `2px solid ${colors.secondary}` },
          skill: "text-white px-4 py-1.5 rounded font-serif text-sm",
          skillStyle: { backgroundColor: colors.primary },
        };
      case "minimal":
        return {
          container: "bg-gray-50 shadow-md border border-gray-300",
          header: "pb-4 pt-4 px-8 bg-gray-50",
          headerStyle: { borderBottom: `1px solid ${colors.secondary}` },
          headerTitle: "text-4xl font-light tracking-wide",
          headerTitleStyle: { color: colors.primary },
          headerInfo: "mt-2 flex gap-4 text-xs uppercase tracking-wider",
          headerInfoStyle: { color: colors.secondary },
          sectionTitle: "text-lg font-light uppercase tracking-widest mb-4 mt-6",
          sectionTitleStyle: { color: colors.primary },
          categoryBorder: "pl-4",
          categoryBorderStyle: { borderLeft: `1px solid ${colors.secondary}` },
          skill: "px-3 py-1 rounded-sm text-xs uppercase tracking-wide",
          skillStyle: { border: `1px solid ${colors.secondary}`, color: colors.primary },
        };
      default:
        return {
          container: "bg-white shadow-lg",
          header: "pb-4 pt-6 px-8",
          headerTitle: "text-4xl font-bold text-gray-900",
          headerInfo: "mt-2 flex gap-4 text-sm text-gray-600",
          sectionTitle: "text-xl font-bold text-gray-900",
          categoryBorder: "pl-4",
          categoryBorderStyle: { borderLeft: `2px solid ${colors.primary}` },
          skill: "px-3 py-1 rounded-full text-sm",
          skillStyle: { backgroundColor: `${colors.primary}20`, color: colors.primary },
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <div className={`w-full rounded-lg overflow-hidden ${styles.container}`}>
      {/* Cabeçalho */}
      <div className={styles.header} style={styles.headerStyle}>
        <h1 className={styles.headerTitle} style={styles.headerTitleStyle}>{data.nome || "Seu Nome"}</h1>
        <div className={styles.headerInfo} style={styles.headerInfoStyle}>
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
            <h2 className={styles.sectionTitle} style={styles.sectionTitleStyle}>Resumo Profissional</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
              {data.resumo}
            </p>
          </div>
        )}

        {/* Experiência Profissional */}
        {data.experiencia && (
          <div>
            <h2 className={styles.sectionTitle} style={styles.sectionTitleStyle}>Experiência Profissional</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
              {data.experiencia}
            </p>
          </div>
        )}

        {/* Habilidades */}
        {data.habilidades && (
          <div>
            <h2 className={styles.sectionTitle} style={styles.sectionTitleStyle}>Habilidades</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {data.habilidades.split(",").map((skill, index) => (
                <span key={index} className={styles.skill} style={styles.skillStyle}>
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
              <h2 className={styles.sectionTitle} style={styles.sectionTitleStyle}>{category.name}</h2>
              <div className="space-y-4 mt-3">
                {category.items.map((item) => (
                  <div key={item.id} className={styles.categoryBorder} style={styles.categoryBorderStyle}>
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
