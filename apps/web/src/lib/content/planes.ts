import type { SedeId } from "./sedes";

export type PlanId = "bronce" | "plata" | "oro";
export type ClienteTipo = "particular" | "residente" | "empresa";

export interface PlanFeature {
  nombre: string;
  incluido: boolean;
  detalle?: string;
}

export interface Plan {
  id: PlanId;
  nombre: string;
  descripcion: string;
  letra: string;
  color: string;
  espacio: string;
  personas: number;
  sedes: SedeId[];
  features: PlanFeature[];
  destacado?: boolean;
}

export const planes: Plan[] = [
  {
    id: "bronce",
    nombre: "Plan Bronce",
    descripcion: "Una opción práctica para trabajar con libertad y buena conexión en un entorno profesional.",
    letra: "B",
    color: "#B8703A",
    espacio: "Puesto móvil",
    personas: 1,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "Acceso a puestos móviles", incluido: true },
      { nombre: "2 hs/mes sala de reuniones", incluido: true },
      { nombre: "Fotocopias con cargo adicional", incluido: true, detalle: "$150 por copia" },
    ],
  },
  {
    id: "plata",
    nombre: "Plan Plata",
    descripcion: "Un plan pensado para trabajar de forma profesional, cómoda y con mayor visibilidad para tu proyecto o marca.",
    letra: "P",
    color: "#9C9081",
    espacio: "Puesto fijo",
    personas: 1,
    sedes: ["dean-funes", "balcarce"],
    destacado: true,
    features: [
      { nombre: "Puesto fijo de trabajo", incluido: true, detalle: "Tu lugar, siempre disponible" },
      { nombre: "4 hs/mes sala de reuniones", incluido: true },
      { nombre: "Fotocopias sin cargo", incluido: true },
      { nombre: "Publicidad en redes sociales", incluido: true },
      { nombre: "Beneficios con marcas aliadas", incluido: true },
    ],
  },
  {
    id: "oro",
    nombre: "Plan Oro",
    descripcion: "Nuestro plan más completo, pensado para profesionales y empresas que buscan una experiencia de trabajo premium.",
    letra: "O",
    color: "#C99852",
    espacio: "Plan premium",
    personas: 1,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "8 hs/mes sala de reuniones", incluido: true },
      { nombre: "Lockers personales", incluido: true },
      { nombre: "Domicilio fiscal", incluido: true },
      { nombre: "Fotocopias sin cargo", incluido: true },
      { nombre: "Prioridad en reservas", incluido: true },
      { nombre: "Publicidad en redes sociales", incluido: true },
      { nombre: "Kit de bienvenida", incluido: true },
      { nombre: "Beneficios con marcas aliadas", incluido: true },
    ],
  },
];

export const DESCUENTO_RESIDENTE = 0.20;
export const DESCUENTO_COLEGIO = 0.25;

export function getDescuentoLabel(tipo: ClienteTipo): string {
  switch (tipo) {
    case "residente": return "-20% residente del edificio";
    case "empresa": return "Precio corporativo";
    default: return "";
  }
}
