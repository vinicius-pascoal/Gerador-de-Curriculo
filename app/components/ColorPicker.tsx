"use client";

import { ColorScheme } from "./types";

interface ColorPickerProps {
  colorScheme: ColorScheme;
  onColorChange: (colorScheme: ColorScheme) => void;
  template: "modern" | "classic" | "minimal";
}

export default function ColorPicker({ colorScheme, onColorChange, template }: ColorPickerProps) {
  const presetColors = {
    modern: [
      { name: "Azul Profissional", primary: "#4f46e5", secondary: "#3b82f6", accent: "#60a5fa" },
      { name: "Verde Corporativo", primary: "#059669", secondary: "#10b981", accent: "#34d399" },
      { name: "Roxo Criativo", primary: "#7c3aed", secondary: "#8b5cf6", accent: "#a78bfa" },
      { name: "Laranja Energético", primary: "#ea580c", secondary: "#f97316", accent: "#fb923c" },
      { name: "Rosa Moderno", primary: "#db2777", secondary: "#ec4899", accent: "#f472b6" },
      { name: "Ciano Tech", primary: "#0891b2", secondary: "#06b6d4", accent: "#22d3ee" },
    ],
    classic: [
      { name: "Preto Tradicional", primary: "#1f2937", secondary: "#374151", accent: "#4b5563" },
      { name: "Azul Marinho", primary: "#1e3a8a", secondary: "#1e40af", accent: "#3b82f6" },
      { name: "Vinho Elegante", primary: "#881337", secondary: "#9f1239", accent: "#be123c" },
      { name: "Verde Escuro", primary: "#14532d", secondary: "#166534", accent: "#15803d" },
      { name: "Cinza Executivo", primary: "#404040", secondary: "#525252", accent: "#737373" },
    ],
    minimal: [
      { name: "Cinza Suave", primary: "#6b7280", secondary: "#9ca3af", accent: "#d1d5db" },
      { name: "Azul Claro", primary: "#60a5fa", secondary: "#93c5fd", accent: "#dbeafe" },
      { name: "Verde Menta", primary: "#34d399", secondary: "#6ee7b7", accent: "#d1fae5" },
      { name: "Roxo Pastel", primary: "#a78bfa", secondary: "#c4b5fd", accent: "#e9d5ff" },
      { name: "Âmbar Suave", primary: "#fbbf24", secondary: "#fcd34d", accent: "#fef3c7" },
    ],
  };

  const currentPresets = presetColors[template];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <span>🎨</span>
        Paleta de Cores
      </h3>

      {/* Cores Predefinidas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Paletas Predefinidas
        </label>
        <div className="grid grid-cols-2 gap-2">
          {currentPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => onColorChange(preset)}
              className={`p-3 rounded-lg border-2 transition-all hover:shadow-md ${colorScheme.primary === preset.primary
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-950"
                  : "border-gray-300 bg-white dark:bg-gray-800"
                }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.primary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.secondary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.accent }}
                  ></div>
                </div>
                {colorScheme.primary === preset.primary && (
                  <span className="text-blue-600 text-xs">✓</span>
                )}
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium text-left">
                {preset.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Cores Personalizadas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Cores Personalizadas
        </label>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              Primária
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colorScheme.primary}
                onChange={(e) =>
                  onColorChange({ ...colorScheme, primary: e.target.value })
                }
                className="w-full h-10 rounded border-2 border-gray-300 cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              Secundária
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colorScheme.secondary}
                onChange={(e) =>
                  onColorChange({ ...colorScheme, secondary: e.target.value })
                }
                className="w-full h-10 rounded border-2 border-gray-300 cursor-pointer"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
              Destaque
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={colorScheme.accent}
                onChange={(e) =>
                  onColorChange({ ...colorScheme, accent: e.target.value })
                }
                className="w-full h-10 rounded border-2 border-gray-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview das Cores */}
      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Preview:</p>
        <div className="flex gap-2">
          <div className="flex-1 h-8 rounded" style={{ backgroundColor: colorScheme.primary }}></div>
          <div className="flex-1 h-8 rounded" style={{ backgroundColor: colorScheme.secondary }}></div>
          <div className="flex-1 h-8 rounded" style={{ backgroundColor: colorScheme.accent }}></div>
        </div>
      </div>
    </div>
  );
}
