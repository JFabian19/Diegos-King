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
      { nombre: "Cono Mollejitas", descripcion: "Mollejitas doradas, papas y salchicha.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/conos-menu.jpg", size: "400% 200%", position: "0% 0%" } },
      { nombre: "Cono BBQ Picante", descripcion: "Alitas BBQ picantes, papas y salchicha.", precio: "S/ 24.00", etiqueta: "Favorito", picante: true, imagen: { src: "/media/conos-menu.jpg", size: "400% 200%", position: "33.33% 0%" } },
      { nombre: "Salchipapa Mix", descripcion: "Huevo, papas crocantes, salchicha y cremas.", precio: "S/ 19.00", imagen: { src: "/media/conos-menu.jpg", size: "400% 200%", position: "66.66% 0%" } },
      { nombre: "Cono Alitas Broster", descripcion: "Alitas broster, papas, salchicha y salsa tártara.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/conos-menu.jpg", size: "400% 200%", position: "100% 0%" } },
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
      { nombre: "Alitas BBQ Clásicas", descripcion: "6 alitas bañadas en BBQ dulce ahumada.", precio: "S/ 19.00", etiqueta: "Top" },
      { nombre: "Alitas Fuego King", descripcion: "6 alitas en salsa picante de la casa.", precio: "S/ 20.00", picante: true },
      { nombre: "Alitas Acevichadas", descripcion: "6 alitas con crema acevichada y toque cítrico.", precio: "S/ 20.00" },
      { nombre: "Alitas Honey Mustard", descripcion: "6 alitas dulces con miel y mostaza.", precio: "S/ 20.00" },
      { nombre: "Alitas Broster Crunch", descripcion: "6 alitas crocantes con salsa tártara.", precio: "S/ 18.00" }
    ]
  },
  {
    id: "salchipapas",
    nombre: "Salchipapas",
    kicker: "Clásicos con corona",
    descripcion: "Papas recién hechas, salchicha y combinaciones para compartir o no.",
    items: [
      { nombre: "Salchi Clásica", descripcion: "Papas, salchicha y cremas de la casa.", precio: "S/ 12.00" },
      { nombre: "Salchi Brava", descripcion: "Papas, salchicha, queso y salsa picante.", precio: "S/ 16.00", picante: true },
      { nombre: "Salchi Broster", descripcion: "Papas, salchicha y pollo broster crocante.", precio: "S/ 18.00" },
      { nombre: "Salchi King", descripcion: "Papas, doble salchicha, pollo, huevo y queso.", precio: "S/ 22.00", etiqueta: "La reina" },
      { nombre: "Salchi Mollejitas", descripcion: "Papas, salchicha y mollejitas doradas.", precio: "S/ 19.00" }
    ]
  },
  {
    id: "bubble-tea",
    nombre: "Bubble Tea",
    kicker: "Frío, cremoso y con perlas",
    descripcion: "Té con leche, sabores frutales y tapioca. Servidos con bastante hielo.",
    items: [
      { nombre: "Classic Milk Tea", descripcion: "Té negro, leche y perlas de tapioca.", precio: "S/ 12.00", imagen: { src: "/media/bubble-menu.jpg", size: "400% 200%", position: "0% 0%" } },
      { nombre: "Strawberry Milk Tea", descripcion: "Fresa, leche y perlas de tapioca.", precio: "S/ 13.00", etiqueta: "Frutal", imagen: { src: "/media/bubble-menu.jpg", size: "400% 200%", position: "100% 0%" } },
      { nombre: "Matcha Green Tea", descripcion: "Matcha, leche y perlas de tapioca.", precio: "S/ 14.00", imagen: { src: "/media/bubble-menu.jpg", size: "400% 200%", position: "33.33% 0%" } },
      { nombre: "Brown Sugar", descripcion: "Leche, caramelo de azúcar rubia y tapioca.", precio: "S/ 14.00", etiqueta: "Favorito" },
      { nombre: "Taro Milk Tea", descripcion: "Taro cremoso, leche y perlas de tapioca.", precio: "S/ 13.00" },
      { nombre: "Chocolate Boba", descripcion: "Cacao, leche y perlas de tapioca.", precio: "S/ 13.00" },
      { nombre: "Té Mango", descripcion: "Té frutal de mango con popping boba.", precio: "S/ 11.00" },
      { nombre: "Té Limón & Lychee", descripcion: "Té cítrico con lychee y jelly.", precio: "S/ 11.00" },
      { nombre: "Té Fresa", descripcion: "Té frío de fresa con popping boba.", precio: "S/ 11.00" }
    ]
  },
  {
    id: "frappes",
    nombre: "Frappés",
    kicker: "Bien helados, bien cargados",
    descripcion: "Batidos cremosos coronados con chantilly, salsa y toppings.",
    items: [
      { nombre: "Frappé de Oreo", descripcion: "Galleta Oreo, leche, crema y fudge.", precio: "S/ 14.00", etiqueta: "Más pedido", imagen: { src: "/media/frappes-menu.jpg", size: "600% 100%", position: "40% 0%" } },
      { nombre: "Mango Maracuyá", descripcion: "Mango, maracuyá y popping boba.", precio: "S/ 14.00" },
      { nombre: "Frappé de Fresa", descripcion: "Fresa, leche, chantilly y salsa de frutos rojos.", precio: "S/ 13.00" },
      { nombre: "Frappuccino", descripcion: "Café, leche, crema batida y fudge.", precio: "S/ 15.00" },
      { nombre: "Frappuccino Brown Sugar", descripcion: "Café, leche y caramelo de azúcar rubia.", precio: "S/ 15.00" }
    ]
  },
  {
    id: "extras",
    nombre: "Extras",
    kicker: "Ponle más power",
    descripcion: "Complementos para personalizar tu pedido.",
    items: [
      { nombre: "Porción de papas", descripcion: "Porción de papas doradas y recién hechas.", precio: "S/ 8.00" },
      { nombre: "Salchicha extra", descripcion: "Porción adicional de salchicha.", precio: "S/ 4.00" },
      { nombre: "Tapioca o bolas explosivas", descripcion: "Extra de perlas para tu bubble tea.", precio: "S/ 5.00" },
      { nombre: "Plátano extra", descripcion: "Porción adicional de plátano.", precio: "S/ 5.00" },
      { nombre: "Huevo extra", descripcion: "Huevo frito para completar tu plato.", precio: "S/ 3.00" }
    ]
  }
];
