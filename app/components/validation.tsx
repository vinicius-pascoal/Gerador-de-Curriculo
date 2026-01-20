"use client";

import { useState } from "react";
import { CurriculumData } from "./types";
import { validationRules } from "../config/curriculum";

interface ValidationError {
  field: string;
  message: string;
}

export function useValidation() {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const validate = (data: CurriculumData): boolean => {
    const newErrors: ValidationError[] = [];

    // Validar Nome
    if (!data.nome || data.nome.trim().length === 0) {
      newErrors.push({ field: "nome", message: "Nome é obrigatório" });
    } else if (
      data.nome.length < validationRules.nome.minLength ||
      data.nome.length > validationRules.nome.maxLength
    ) {
      newErrors.push({
        field: "nome",
        message: `Nome deve ter entre 2 e 100 caracteres`,
      });
    }

    // Validar Email
    if (!data.email || data.email.trim().length === 0) {
      newErrors.push({ field: "email", message: "E-mail é obrigatório" });
    } else if (!validationRules.email.pattern.test(data.email)) {
      newErrors.push({
        field: "email",
        message: "E-mail inválido",
      });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find((e) => e.field === field)?.message;
  };

  return { validate, errors, getFieldError };
}
