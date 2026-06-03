export type PhotoEntry = {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
  objectPosition?: string;
};

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAREAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AKwAB/9k=";

export const photos: Record<string, PhotoEntry> = {
  heroHome: {
    src: "/images/hero-letrero-v2.jpg",
    width: 682,
    height: 1024,
    alt: "Letrero iluminado de La Cantera con sillones naranjas y pared de madera",
    blurDataURL: blur,
  },
  sedeDeanFunes: {
    src: "/images/sede-dean-funes-01-entrada.jpg",
    width: 1024,
    height: 682,
    alt: "Entrada de La Cantera Workspace en Deán Funes 1380",
    blurDataURL: blur,
    objectPosition: "center center",
  },
  sedeBalcarce: {
    src: "/images/sede-balcarce.jpg",
    width: 1024,
    height: 1024,
    alt: "Pasillo de oficinas con señalética de letras en La Cantera Office, Balcarce 735",
    blurDataURL: blur,
    objectPosition: "center center",
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
    src: "/images/evento-anfiteatro-balcarce.jpg",
    width: 1020,
    height: 1024,
    alt: "Anfiteatro y patio interno de La Cantera Office en Balcarce",
    blurDataURL: blur,
    objectPosition: "center center",
  },
  espacioColaboracion: {
    src: "/images/evento-salon-dean-funes.jpg",
    width: 682,
    height: 1024,
    alt: "Salón de eventos de La Cantera Workspace en Deán Funes con pantalla y butacas",
    blurDataURL: blur,
    objectPosition: "center center",
  },
  descuentoResidente: {
    src: "/images/descuento-residente.jpg",
    width: 682,
    height: 1024,
    alt: "Fachada de La Cantera Workspace con vidriera y señalética en Deán Funes",
    blurDataURL: blur,
    objectPosition: "center center",
  },
};

export const sedeDeanFunesGallery: PhotoEntry[] = [
  photos.sedeDeanFunes,
  {
    src: "/images/sede-dean-funes-02-espacio.jpg",
    width: 682,
    height: 1024,
    alt: "Espacio de coworking con señalética La Cantera en Deán Funes",
    blurDataURL: blur,
    objectPosition: "center center",
  },
  {
    src: "/images/sede-dean-funes-03-salon.jpg",
    width: 682,
    height: 1024,
    alt: "Salón con butacas y pantalla en La Cantera Workspace",
    blurDataURL: blur,
    objectPosition: "center center",
  },
  {
    src: "/images/sede-dean-funes-04-trabajo.jpg",
    width: 682,
    height: 1024,
    alt: "Estación de trabajo en La Cantera Workspace, Deán Funes",
    blurDataURL: blur,
    objectPosition: "center 40%",
  },
];
