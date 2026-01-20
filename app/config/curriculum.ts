// Configurações padrão para o Gerador de Currículo

export const defaultCurriculumData = {
  nome: "",
  email: "",
  telefone: "",
  experiencia: "",
  habilidades: "",
};

export const templates = {
  modern: {
    name: "Moderno",
    description: "Design elegante e contemporâneo com gradientes",
    color: "blue",
  },
  classic: {
    name: "Clássico",
    description: "Estilo tradicional e profissional com foco em conteúdo",
    color: "gray",
  },
  minimal: {
    name: "Minimalista",
    description: "Design simples e objetivo para máxima clareza",
    color: "slate",
  },
};

export const pdfOptions = {
  filename: "curriculo.pdf",
  paperSize: "A4",
  margin: 10,
  fontSize: 12,
};

export const validationRules = {
  nome: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  telefone: {
    required: false,
    pattern: /^[\d\s\-\(\)]+$/,
  },
  experiencia: {
    required: false,
    minLength: 10,
  },
  habilidades: {
    required: false,
  },
};
