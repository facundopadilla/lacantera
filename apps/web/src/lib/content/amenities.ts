import type { SedeId } from "./sedes";

export interface Amenity {
  id: string;
  nombre: string;
  descripcion: string;
  icon: string;
  sedes: SedeId[];
}

export const amenities: Amenity[] = [
  {
    id: "internet",
    nombre: "Internet 300 MB",
    descripcion: "Fibra óptica de 300 MB simétricos, estable y rápida.",
    icon: "Wifi",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "bar",
    nombre: "Barra y cocina equipada",
    descripcion: "Café, mate, té, infusiones y cereales gratis. Cocina equipada para tus pausas.",
    icon: "Coffee",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "climatizacion",
    nombre: "Ambiente climatizado",
    descripcion: "Espacios climatizados todo el año para trabajar cómodo.",
    icon: "AirVent",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "limpieza",
    nombre: "Servicio de limpieza",
    descripcion: "Limpieza diaria de todos los espacios.",
    icon: "Sparkles",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "recepcion",
    nombre: "Recepción Lun a Vie",
    descripcion: "Recepción de lunes a viernes de 9 a 18 hs.",
    icon: "ConciergeBell",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "cobertura-medica",
    nombre: "Cobertura médica",
    descripcion: "Cobertura médica MEDISEM incluida en tu membresía.",
    icon: "HeartPulse",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "lockers",
    nombre: "Lockers seguros",
    descripcion: "Casillero personal con llave.",
    icon: "LockKeyhole",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "sala-reuniones",
    nombre: "Sala de reuniones",
    descripcion: "Sala equipada con pantalla y videoconferencia para tus reuniones.",
    icon: "Users",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "acceso",
    nombre: "Acceso con huella",
    descripcion: "Acceso controlado con huella digital de lunes a viernes de 9 a 18 hs.",
    icon: "Fingerprint",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "seguridad",
    nombre: "Monitoreo HD 24/7",
    descripcion: "Cámaras de seguridad en todo el espacio, las 24 horas.",
    icon: "ShieldCheck",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "print",
    nombre: "Print zone",
    descripcion: "Impresión y escaneo.",
    icon: "Printer",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "mail",
    nombre: "Mail reception",
    descripcion: "Recibimos tu correspondencia y paquetes.",
    icon: "Mail",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "bici",
    nombre: "Bike parking",
    descripcion: "Estacionamiento seguro para bicicletas.",
    icon: "Bike",
    sedes: ["dean-funes", "balcarce"],
  },
  {
    id: "patio-interno",
    nombre: "Patios internos",
    descripcion: "Espacios abiertos dentro del edificio para descansar o trabajar.",
    icon: "Flower2",
    sedes: ["balcarce"],
  },
  {
    id: "anfiteatro",
    nombre: "Anfiteatro",
    descripcion: "Espacio para eventos y presentaciones hasta 45 personas.",
    icon: "Theater",
    sedes: ["balcarce"],
  },
  {
    id: "salon-eventos",
    nombre: "Salón de eventos",
    descripcion: "Salón para capacitaciones y presentaciones hasta 40 personas.",
    icon: "CalendarDays",
    sedes: ["dean-funes"],
  },
  {
    id: "phone-booth",
    nombre: "Phone booth",
    descripcion: "Cabina aislada para llamadas y reuniones virtuales.",
    icon: "Phone",
    sedes: ["dean-funes"],
  },
];

export function getAmenitiesForSede(sedeId: SedeId): Amenity[] {
  return amenities.filter((a) => a.sedes.includes(sedeId));
}

export function getSharedAmenities(): Amenity[] {
  return amenities.filter((a) => a.sedes.length === 2);
}
