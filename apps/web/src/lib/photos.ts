export type PhotoEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
};

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAREAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwAB/9k=";

export const photos: Record<string, PhotoEntry> = {
  heroHome: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    width: 1920,
    height: 1280,
    alt: "Espacio de coworking con luz cálida y mesas de trabajo",
    blurDataURL: blur,
  },
  sedeDeanFunes: {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Espacio de trabajo abierto en Deán Funes",
    blurDataURL: blur,
  },
  sedeBalcarce: {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    width: 1600,
    height: 1067,
    alt: "Interior de La Cantera Office en Balcarce",
    blurDataURL: blur,
  },
  espacioOficina: {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
    width: 1200,
    height: 800,
    alt: "Oficina privada equipada",
    blurDataURL: blur,
  },
  espacioMeeting: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    width: 1200,
    height: 800,
    alt: "Sala de reuniones profesional",
    blurDataURL: blur,
  },
  nosotrosHistoria1: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    width: 800,
    height: 1067,
    alt: "Equipo trabajando en el coworking",
    blurDataURL: blur,
  },
  nosotrosHistoria2: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    width: 800,
    height: 1067,
    alt: "Comunidad de coworkers colaborando",
    blurDataURL: blur,
  },
  eventoAnfiteatro: {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
    width: 1600,
    height: 900,
    alt: "Evento en el anfiteatro de La Cantera",
    blurDataURL: blur,
  },
  espacioColaboracion: {
    src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&q=80",
    width: 1200,
    height: 800,
    alt: "Área de colaboración y trabajo en equipo",
    blurDataURL: blur,
  },
  descuentoResidente: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    width: 800,
    height: 1067,
    alt: "Edificio residencial en Salta",
    blurDataURL: blur,
  },
};
