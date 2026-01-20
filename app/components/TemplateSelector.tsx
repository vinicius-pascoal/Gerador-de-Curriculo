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
    {
      id: "modern",
      label: "Moderno",
      description: "Design elegante com gradientes e cores vibrantes",
      preview: "bg-gradient-to-r from-blue-600 to-indigo-600",
      icon: "✨",
    },
    {
      id: "classic",
      label: "Clássico",
      description: "Estilo tradicional e profissional com serifas",
      preview: "bg-gray-800",
      icon: "📜",
    },
    {
      id: "minimal",
      label: "Minimalista",
      description: "Design limpo e objetivo com tipografia leve",
      preview: "bg-gray-400",
      icon: "⚡",
    },
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
            className={`group relative p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${currentTemplate === template.id
                ? "border-blue-600 bg-blue-50 dark:bg-blue-950 shadow-md scale-105"
                : "border-gray-300 bg-white dark:bg-gray-800 hover:border-blue-400"
              }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-full h-3 rounded-lg mb-3 ${template.preview} transition-transform group-hover:scale-105`}
              ></div>
              <span className="text-2xl mb-2">{template.icon}</span>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                {template.label}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug">
                {template.description}
              </p>
            </div>
            {currentTemplate === template.id && (
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
