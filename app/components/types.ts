export interface CategoryItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  items: CategoryItem[];
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
}

export interface CurriculumData {
  nome: string;
  email: string;
  telefone: string;
  resumo?: string;
  experiencia: string;
  habilidades: string;
  categories: Category[];
  colorScheme?: ColorScheme;
}

export type TemplateType = "modern" | "classic" | "minimal";
