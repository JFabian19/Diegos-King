export type ImageCrop = { src: string; size: string; position: string };

export interface Dish {
  nombre: string;
  descripcion: string;
  precio: string;
  etiqueta?: string;
  picante?: boolean;
  imagen?: ImageCrop;
}

export interface Category {
  id: string;
  nombre: string;
  kicker: string;
  descripcion: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "conos",
    nombre: "Conos King",
    kicker: "El antojo en una mano",
    descripcion: "Papas doradas, salchicha y tu proteína favorita con salsa de la casa.",
    items: [
      { nombre: "Cono Mollejitas", descripcion: "Mollejitas doradas, papas y salchicha.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/conos-menu.webp", size: "400% 200%", position: "0% 0%" } },
      { nombre: "Cono BBQ Picante", descripcion: "Alitas BBQ picantes, papas y salchicha.", precio: "S/ 24.00", etiqueta: "Favorito", picante: true, imagen: { src: "/media/conos-menu.webp", size: "400% 200%", position: "33.33% 0%" } },
      { nombre: "Salchipapa Mix", descripcion: "Huevo, papas crocantes, salchicha y cremas.", precio: "S/ 19.00", imagen: { src: "/media/conos-menu.webp", size: "400% 200%", position: "66.66% 0%" } },
      { nombre: "Cono Alitas Broster", descripcion: "Alitas broster, papas, salchicha y salsa tártara.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/conos-menu.webp", size: "400% 200%", position: "100% 0%" } },
      { nombre: "Cono Alitas BBQ", descripcion: "Alitas glaseadas BBQ, papas y salchicha.", precio: "S/ 24.00" },
      { nombre: "Cono Acevichado", descripcion: "Alitas acevichadas, papas, salchicha y cebollita.", precio: "S/ 24.00" },
      { nombre: "Honey Mustard King", descripcion: "Alitas con miel y mostaza, papas y salchicha.", precio: "S/ 24.00" },
      { nombre: "Súper Cono", descripcion: "Papas, doble salchicha y todas las cremas.", precio: "S/ 16.00", etiqueta: "Buenazo" }
    ]
  },
  {
    id: "alitas",
    nombre: "Alitas",
    kicker: "Salseadas al momento",
    descripcion: "Porciones jugosas, crocantes y cargadas de sabor.",
    items: [
      { nombre: "Especial de Alitas", descripcion: "4 alitas BBQ, salchichas cerdeñas y papitas crujientes y saladitas.", precio: "S/ 24.00", etiqueta: "Promoción", imagen: { src: "/media/especial-de-alitas.webp", size: "cover", position: "center 65%" } },
      { nombre: "Ronda de Alitas", descripcion: "12 alitas: 4 BBQ, 4 picantes y 4 acevichadas. Acompañadas de papas y salchichas.", precio: "S/ 48.00", etiqueta: "Para compartir", picante: true, imagen: { src: "/media/ronda-de-alitas.webp", size: "cover", position: "center" } },
      { nombre: "Ronda de Alitas Familiar", descripcion: "24 alitas: 8 BBQ, 8 BBQ picantes y 8 acevichadas, acompañadas de papas crocantes y salchichas ahumadas.", precio: "S/ 96.00", etiqueta: "Familiar", picante: true, imagen: { src: "/media/ronda-de-alitas-familiar.webp", size: "cover", position: "center" } }
    ]
  },
  {
    id: "salchipapas",
    nombre: "Salchipapas",
    kicker: "Clásicos con corona",
    descripcion: "Papas recién hechas, salchicha y combinaciones para compartir o no.",
    items: [
      { nombre: "Salchi Pobre", descripcion: "Papas crocantes, abundantes salchichas, plátano frito y huevo frito con cremas.", precio: "S/ 22.00", etiqueta: "Favorito", imagen: { src: "/media/salchi-pobre.webp", size: "cover", position: "center 55%" } },
      { nombre: "Salchichas Broaster", descripcion: "Pollo broaster crocante, salchichas, papas crocantes y arroz chaufa al wok.", precio: "S/ 22.00", etiqueta: "Completo", imagen: { src: "/media/salchichas-broaster.webp", size: "cover", position: "center 65%" } }
    ]
  },
  {
    id: "chaufas",
    nombre: "Chaufas",
    kicker: "Directo del wok",
    descripcion: "Arroz al wok con sabor ahumado, carnes seleccionadas y acompañamientos que llenan de verdad.",
    items: [
      { nombre: "Arroz Chaufa Pobre", descripcion: "Arroz chaufa al wok servido con plátano frito y huevo frito montado.", precio: "S/ 25.00", etiqueta: "Top", imagen: { src: "/media/arroz-chaufa-pobre.webp", size: "cover", position: "center 55%" } },
      { nombre: "Chaufa con Lomo", descripcion: "Jugoso lomo saltado con carne, tomate, cebolla y papas, acompañado de arroz chaufa.", precio: "S/ 22.00", etiqueta: "Nuevo", imagen: { src: "/media/chaufa-con-lomo.webp", size: "cover", position: "center" } },
      { nombre: "Chaufialitas BBQ", descripcion: "Arroz chaufa al wok acompañado de alitas BBQ, papas fritas y salchichas.", precio: "S/ 30.00", etiqueta: "Recomendado", imagen: { src: "/media/chaufialitas-bbq.webp", size: "cover", position: "center" } },
      { nombre: "Aeropuerto", descripcion: "Clásico aeropuerto salteado al wok con arroz chaufa, fideos y trozos de pollo.", precio: "S/ 18.00", imagen: { src: "/media/aeropuerto.webp", size: "cover", position: "center 55%" } }
    ]
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    kicker: "Crocantes y contundentes",
    descripcion: "Sándwiches y hamburguesas con filetes crujientes y papas doradas.",
    items: [
      { nombre: "Burguer King", descripcion: "Filete de pollo al panko, huevo frito, salchichas y porción de papas crocantes.", precio: "S/ 20.00", etiqueta: "Especial", imagen: { src: "/media/burger-king.webp", size: "cover", position: "center" } }
    ]
  },
  {
    id: "parrillas",
    nombre: "Parrillas",
    kicker: "A la plancha y doraditas",
    descripcion: "Porciones sabrosas con mollejitas y chorizo parrillero bien calientes.",
    items: [
      { nombre: "Mollejitas", descripcion: "Mollejitas doradas a la plancha acompañadas de chorizo parrillero y papas crocantes.", precio: "S/ 35.00", etiqueta: "Power", imagen: { src: "/media/mollejitas.webp", size: "cover", position: "center 68%" } }
    ]
  }
];
