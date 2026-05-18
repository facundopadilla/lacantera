export interface Convenio {
  id: string;
  nombre: string;
  descripcion: string;
  descuento: number;
  icon: string;
}

export const convenios: Convenio[] = [
  {
    id: "arquitectos",
    nombre: "Colegio de Arquitectos",
    descripcion: "Colegio de Arquitectos de Salta",
    descuento: 0.25,
    icon: "Building2",
  },
  {
    id: "economistas",
    nombre: "Colegio de Economistas",
    descripcion: "Consejo Profesional de Ciencias Económicas de Salta",
    descuento: 0.25,
    icon: "BarChart3",
  },
  {
    id: "abogados",
    nombre: "Colegio de Abogados",
    descripcion: "Colegio de Abogados y Procuradores de Salta",
    descuento: 0.25,
    icon: "Scale",
  },
];
