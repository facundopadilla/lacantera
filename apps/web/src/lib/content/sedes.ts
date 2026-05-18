export type SedeId = "dean-funes" | "balcarce";

export interface Sede {
  id: SedeId;
  nombre: string;
  subtitulo: string;
  direccion: string;
  telefono: string;
  whatsapp: string;
  googleMapsUrl: string;
  accentColor: string;
  letra: string;
  stats: { label: string; value: string }[];
  espacios: { nombre: string; descripcion: string }[];
  descripcion: string;
  slug: string;
}

export const sedes: Sede[] = [
  {
    id: "dean-funes",
    nombre: "La Cantera Workspace",
    subtitulo: "Deán Funes",
    direccion: "Deán Funes 1380, Salta",
    telefono: "387 463-6952",
    whatsapp: "+5493874636952",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=De%C3%A1n+Funes+1380%2C+Salta%2C+Argentina",
    accentColor: "#7A8C5C",
    letra: "DF",
    stats: [
      { value: "330 m²", label: "de espacio total" },
      { value: "60", label: "estaciones de trabajo" },
      { value: "6", label: "oficinas privadas" },
    ],
    espacios: [
      {
        nombre: "Open Space",
        descripcion:
          "60 estaciones en un espacio abierto e iluminado de 330 m².",
      },
      {
        nombre: "Oficinas privadas",
        descripcion: "6 oficinas privadas para equipos de 3 a 5 personas.",
      },
      {
        nombre: "Sala de reuniones",
        descripcion:
          "Sala para 8 personas con pantalla y videoconferencia. 4 hs/mes incluidas.",
      },
      {
        nombre: "Salón de eventos",
        descripcion: "Salón para ~40 personas ideal para capacitaciones y presentaciones.",
      },
      {
        nombre: "Phone booth",
        descripcion: "Cabina aislada para llamadas y reuniones virtuales con privacidad.",
      },
    ],
    descripcion:
      "330 m², 60 estaciones, 6 oficinas privadas y salón para 40 personas.",
    slug: "dean-funes",
  },
  {
    id: "balcarce",
    nombre: "La Cantera Office",
    subtitulo: "Balcarce",
    direccion: "Balcarce 735, Salta",
    telefono: "387 228-7720",
    whatsapp: "+5493872287720",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Balcarce+735%2C+Salta%2C+Argentina",
    accentColor: "#9B4A3F",
    letra: "BC",
    stats: [
      { value: "20", label: "oficinas privadas" },
      { value: "45", label: "personas en anfiteatro" },
      { value: "10", label: "personas en sala de reuniones" },
    ],
    espacios: [
      {
        nombre: "Oficinas privadas A–T",
        descripcion:
          "20 oficinas privadas identificadas con letras y colores únicos. Para 1 a 8 personas.",
      },
      {
        nombre: "Anfiteatro",
        descripcion: "Espacio para ~45 personas. Ideal para eventos, talleres y presentaciones.",
      },
      {
        nombre: "Sala de reuniones",
        descripcion:
          "Sala para 10 personas. 4 hs/mes incluidas con tu membresía.",
      },
      {
        nombre: "Cocina equipada",
        descripcion: "Cocina completa para los momentos de descanso.",
      },
      {
        nombre: "Patio exterior",
        descripcion: "Espacio al aire libre para desconectarse o trabajar en un ambiente diferente.",
      },
    ],
    descripcion:
      "20 oficinas privadas, anfiteatro para 45 y patio exterior.",
    slug: "balcarce",
  },
];

export function getSede(id: SedeId): Sede {
  const sede = sedes.find((s) => s.id === id);
  if (!sede) throw new Error(`Sede no encontrada: ${id}`);
  return sede;
}
