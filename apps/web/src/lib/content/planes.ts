import type { SedeId } from "./sedes";

export type PlanId = "bronce" | "plata" | "oro" | "oro-blanco" | "premium";
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
    descripcion: "Para freelancers y profesionales que trabajan sin escritorio fijo.",
    letra: "B",
    color: "#B8703A",
    espacio: "Flexible",
    personas: 1,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "Espacio flexible a elección", incluido: true },
      { nombre: "Locker personal", incluido: true },
      { nombre: "Acceso diario L–V 9–20 hs", incluido: true },
      { nombre: "Bar incluido (café, mate, cerveza)", incluido: true },
      { nombre: "Internet 300 MB", incluido: true },
      { nombre: "4 hs/mes sala de reuniones", incluido: true },
      { nombre: "Print zone y mail reception", incluido: true },
      { nombre: "Escritorio fijo reservado", incluido: false },
      { nombre: "Oficina privada", incluido: false },
    ],
  },
  {
    id: "plata",
    nombre: "Plan Plata",
    descripcion: "Tu escritorio, fijo y siempre disponible.",
    letra: "P",
    color: "#9C9081",
    espacio: "Fijo",
    personas: 1,
    sedes: ["dean-funes", "balcarce"],
    destacado: true,
    features: [
      { nombre: "Escritorio fijo reservado", incluido: true, detalle: "Tu lugar, siempre disponible" },
      { nombre: "Locker personal", incluido: true },
      { nombre: "Acceso L–V 9–20 hs", incluido: true },
      { nombre: "Bar incluido (café, mate, cerveza)", incluido: true },
      { nombre: "Internet 300 MB", incluido: true },
      { nombre: "4 hs/mes sala de reuniones", incluido: true },
      { nombre: "Print zone y mail reception", incluido: true },
      { nombre: "Oficina privada", incluido: false },
    ],
  },
  {
    id: "oro",
    nombre: "Plan Oro",
    descripcion: "Oficina privada para 3 personas.",
    letra: "O",
    color: "#C99852",
    espacio: "Oficina privada",
    personas: 3,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "Oficina privada para 3 personas", incluido: true },
      { nombre: "Acceso L–V 9–20 hs", incluido: true },
      { nombre: "Bar incluido para el equipo", incluido: true },
      { nombre: "Internet 300 MB", incluido: true },
      { nombre: "4 hs/mes sala de reuniones", incluido: true, detalle: "Por persona del equipo" },
      { nombre: "Lockers individuales", incluido: true },
      { nombre: "Print zone y mail reception", incluido: true },
    ],
  },
  {
    id: "oro-blanco",
    nombre: "Plan Oro Blanco",
    descripcion: "Oficina privada para 5 personas.",
    letra: "OB",
    color: "#F4EFE6",
    espacio: "Oficina privada grande",
    personas: 5,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "Oficina privada para 5 personas", incluido: true },
      { nombre: "Acceso L–V 9–20 hs", incluido: true },
      { nombre: "Bar incluido para el equipo", incluido: true },
      { nombre: "Internet 300 MB", incluido: true },
      { nombre: "6 hs/mes sala de reuniones", incluido: true, detalle: "Por persona del equipo" },
      { nombre: "Lockers individuales", incluido: true },
      { nombre: "Print zone y mail reception", incluido: true },
    ],
  },
  {
    id: "premium",
    nombre: "Plan Premium",
    descripcion: "Oficina exclusiva para tu equipo. Acceso extendido y uso ilimitado de salas.",
    letra: "PR",
    color: "#2A2520",
    espacio: "Oficina exclusiva",
    personas: 8,
    sedes: ["dean-funes", "balcarce"],
    features: [
      { nombre: "Oficina exclusiva para el equipo", incluido: true },
      { nombre: "Acceso extendido con código", incluido: true },
      { nombre: "Bar incluido premium", incluido: true },
      { nombre: "Internet dedicado 300 MB", incluido: true },
      { nombre: "Uso ilimitado sala de reuniones", incluido: true },
      { nombre: "Lockers individuales", incluido: true },
      { nombre: "Uso del anfiteatro/salón de eventos", incluido: true, detalle: "2 veces por mes" },
      { nombre: "Print zone y mail reception", incluido: true },
      { nombre: "Señalética personalizada", incluido: true },
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
