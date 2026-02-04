import { z } from "zod";

export const patientSchema = z.object({
  dni: z.string().regex(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i, "DNI con formato no válido (8 números y letra)"),
  name: z.string().min(2, "El nombre es demasiado corto"),
  surname: z.string().min(2, "Los apellidos son demasiado cortos"),
  address: z.string().min(5, "La dirección debe ser más específica"),
  locality: z.string().min(2, "Localidad requerida"),
  cp: z.string().regex(/^[0-9]{5}$/, "El Código Postal debe tener 5 números"),
  phone: z.string().regex(/^[0-9]{9}$/, "El teléfono debe tener 9 números"),
});