"use client";

interface TemplateSelectorProps {
  onTemplateChange: (template: "modern" | "classic" | "minimal") => void;
  currentTemplate: "modern" | "classic" | "minimal";
}

export default function TemplateSelector({
  onTemplateChange,
  currentTemplate,
}: TemplateSelectorProps) {
  const templates = [
    { id: "modern", label: "Moderno", description: "Design elegante e contemporâneo" },
    { id: "classic", label: "Clássico", description: "Estilo tradicional e profissional" },
    { id: "minimal", label: "Minimalista", description: "Design simples e objetivo" },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Escolha um Template
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() =>
              onTemplateChange(template.id as "modern" | "classic" | "minimal")
            }
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${currentTemplate === template.id
                ? "border-blue-600 bg-blue-50 dark:bg-blue-950"
                : "border-gray-300 bg-white dark:bg-gray-800 hover:border-gray-400"
              }`}
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {template.label}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {template.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
