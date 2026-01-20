"use client";

import { useState } from "react";
import { Category, CategoryItem } from "./types";

interface CategoryManagerProps {
  categories: Category[];
  onCategoriesChange: (categories: Category[]) => void;
}

export default function CategoryManager({ categories, onCategoriesChange }: CategoryManagerProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const addCategory = () => {
    const newCategory: Category = {
      id: Date.now().toString(),
      name: "Nova Categoria",
      items: [],
    };
    onCategoriesChange([...categories, newCategory]);
    setExpandedCategory(newCategory.id);
  };

  const removeCategory = (categoryId: string) => {
    onCategoriesChange(categories.filter((cat) => cat.id !== categoryId));
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    }
  };

  const updateCategory = (categoryId: string, updates: Partial<Category>) => {
    onCategoriesChange(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, ...updates } : cat
      )
    );
  };

  const addItem = (categoryId: string) => {
    const newItem: CategoryItem = {
      id: Date.now().toString(),
      title: "",
      subtitle: "",
      description: "",
      date: "",
      location: "",
    };

    onCategoriesChange(
      categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: [...cat.items, newItem] }
          : cat
      )
    );
  };

  const removeItem = (categoryId: string, itemId: string) => {
    onCategoriesChange(
      categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((item) => item.id !== itemId) }
          : cat
      )
    );
  };

  const updateItem = (categoryId: string, itemId: string, updates: Partial<CategoryItem>) => {
    onCategoriesChange(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
            ...cat,
            items: cat.items.map((item) =>
              item.id === itemId ? { ...item, ...updates } : item
            ),
          }
          : cat
      )
    );
  };

  const moveItem = (categoryId: string, itemId: string, direction: "up" | "down") => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return;

    const itemIndex = category.items.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) return;

    const newItems = [...category.items];
    const targetIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1;

    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    [newItems[itemIndex], newItems[targetIndex]] = [newItems[targetIndex], newItems[itemIndex]];

    updateCategory(categoryId, { items: newItems });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Categorias Personalizadas
        </h3>
        <button
          onClick={addCategory}
          className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition-colors"
        >
          + Nova Categoria
        </button>
      </div>

      {categories.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Clique em "Nova Categoria" para adicionar seções personalizadas ao seu currículo
        </p>
      ) : (
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden"
            >
              {/* Cabeçalho da Categoria */}
              <div className="bg-gray-100 dark:bg-gray-700 p-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? null : category.id
                      )
                    }
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    {expandedCategory === category.id ? "▼" : "▶"}
                  </button>
                  <input
                    type="text"
                    value={category.name}
                    onChange={(e) =>
                      updateCategory(category.id, { name: e.target.value })
                    }
                    className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                    placeholder="Nome da categoria"
                  />
                  <button
                    onClick={() => removeCategory(category.id)}
                    className="text-red-600 hover:text-red-700 text-sm px-2"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              {/* Itens da Categoria */}
              {expandedCategory === category.id && (
                <div className="p-3 space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-800"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Item {index + 1}
                        </span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => moveItem(category.id, item.id, "up")}
                            disabled={index === 0}
                            className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                          >
                            ↑
                          </button>
                          <button
                            onClick={() => moveItem(category.id, item.id, "down")}
                            disabled={index === category.items.length - 1}
                            className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-30"
                          >
                            ↓
                          </button>
                          <button
                            onClick={() => removeItem(category.id, item.id)}
                            className="text-xs text-red-600 hover:text-red-700 ml-2"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            updateItem(category.id, item.id, { title: e.target.value })
                          }
                          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                          placeholder="Título (ex: Cargo, Formação, Projeto)"
                        />

                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={item.subtitle || ""}
                            onChange={(e) =>
                              updateItem(category.id, item.id, { subtitle: e.target.value })
                            }
                            className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                            placeholder="Subtítulo (ex: Empresa, Instituição)"
                          />
                          <input
                            type="text"
                            value={item.date || ""}
                            onChange={(e) =>
                              updateItem(category.id, item.id, { date: e.target.value })
                            }
                            className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                            placeholder="Período (ex: 2020-2023)"
                          />
                        </div>

                        <input
                          type="text"
                          value={item.location || ""}
                          onChange={(e) =>
                            updateItem(category.id, item.id, { location: e.target.value })
                          }
                          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                          placeholder="Local (ex: São Paulo, SP)"
                        />

                        <textarea
                          value={item.description || ""}
                          onChange={(e) =>
                            updateItem(category.id, item.id, { description: e.target.value })
                          }
                          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white"
                          rows={2}
                          placeholder="Descrição (opcional)"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => addItem(category.id)}
                    className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-2 text-sm text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
                  >
                    + Adicionar Item
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
