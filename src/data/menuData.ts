export type ImageCrop = { src: string; size: string; position: string };

export interface Dish {
  nombre: string;
  descripcion: string;
  precio: string;
  etiqueta?: string;
  picante?: boolean;
  imagen?: ImageCrop;
  permiteBobas?: boolean;
}

export interface Category {
  id: string;
  nombre: string;
  kicker: string;
  descripcion: string;
  banner?: string;
  items: Dish[];
}

export interface BobaOption {
  nombre: string;
  precio: number;
}

export const BOBA_OPTIONS: BobaOption[] = [
  { nombre: "Frambuesa", precio: 5 },
  { nombre: "Mango", precio: 5 },
  { nombre: "Maracuyá", precio: 5 },
  { nombre: "Arándano", precio: 5 },
  { nombre: "Fresa", precio: 5 },
  { nombre: "Chicle", precio: 5 }
];

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "conos",
    nombre: "Conos King",
    kicker: "El antojo en una mano",
    descripcion: "Papas doradas, salchicha y tu proteína favorita con salsa de la casa.",
    items: [
      { nombre: "Cono Mollejitas", descripcion: "Mollejitas doradas, papas y salchicha.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/cono-mollejitas.webp", size: "cover", position: "center" } },
      { nombre: "Cono BBQ Picante", descripcion: "Alitas BBQ picantes, papas y salchicha.", precio: "S/ 24.00", etiqueta: "Favorito", picante: true, imagen: { src: "/media/cono-bbq-picante.webp", size: "cover", position: "center" } },
      { nombre: "Cono Salchimix", descripcion: "Huevo, papas crocantes, salchicha y cremas.", precio: "S/ 19.00", imagen: { src: "/media/cono-salchimix.webp", size: "cover", position: "center" } },
      { nombre: "Cono Alitas Broster", descripcion: "Alitas broster, papas, salchicha y salsa tártara.", precio: "S/ 20.00", etiqueta: "Nuevo", imagen: { src: "/media/cono-alitas-broaster.webp", size: "cover", position: "center" } },
      { nombre: "Cono Alitas BBQ", descripcion: "Alitas glaseadas BBQ, papas y salchicha.", precio: "S/ 24.00", imagen: { src: "/media/cono-alitas-bbq.webp", size: "cover", position: "center" } },
      { nombre: "Cono Acevichado", descripcion: "Alitas acevichadas, papas, salchicha y cebollita.", precio: "S/ 24.00", imagen: { src: "/media/cono-acevichado.webp", size: "cover", position: "center" } },
      { nombre: "Honey Mustard King", descripcion: "Alitas con miel y mostaza, papas y salchicha.", precio: "S/ 24.00", imagen: { src: "/media/honey-mustard-king.webp", size: "cover", position: "center" } },
      { nombre: "Súper Cono", descripcion: "Papas, doble salchicha y todas las cremas.", precio: "S/ 16.00", etiqueta: "Buenazo", imagen: { src: "/media/super-cono.webp", size: "cover", position: "center" } }
    ]
  },
  {
    id: "alitas",
    nombre: "Alitas",
    kicker: "Salseadas al momento",
    descripcion: "Porciones jugosas, crocantes y cargadas de sabor.",
    items: [
      { nombre: "Especial de Alitas", descripcion: "6 alitas BBQ, salchichas cerdeñas y papitas crujientes y saladitas.", precio: "S/ 24.00", etiqueta: "Promoción", imagen: { src: "/media/especial-de-alitas.webp", size: "cover", position: "center 65%" } },
      { nombre: "Alitas Honey Mustard", descripcion: "6 alitas doradas bañadas en salsa miel y mostaza, acompañadas de papas crocantes y salchichas.", precio: "S/ 24.00", etiqueta: "Recomendado", imagen: { src: "/media/alitas-honey-mustard.webp", size: "cover", position: "center" } },
      { nombre: "Alitas Acevichadas", descripcion: "6 alitas crocantes bañadas en exquisita salsa acevichada de la casa, acompañadas de papas y salchichas.", precio: "S/ 24.00", etiqueta: "Favorito", imagen: { src: "/media/alitas-acevichadas.webp", size: "cover", position: "center" } },
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
      { nombre: "Lomo a lo Pobre", descripcion: "Jugoso lomo saltado con carne de res, tomate y cebolla, acompañado de arroz chaufa al wok, plátano frito y huevo frito montado.", precio: "S/ 28.00", etiqueta: "Especial", imagen: { src: "/media/lomo-a-lo-pobre.webp", size: "cover", position: "center" } },
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
  },
  {
    id: "bubble-tea",
    nombre: "Bubble Tea",
    kicker: "Frío, cremoso y con perlas",
    descripcion: "Té con leche y sabores frutales servidos con hielo y perlas de tapioca o popping bobas.",
    items: [
      { nombre: "Bubble Tea Lychee Milk con Topping de Arándanos", descripcion: "Té de lychee con leche suave y delicioso topping de arándanos.", precio: "S/ 15.00", etiqueta: "Favorito", imagen: { src: "/media/bubble-tea-light-milk.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Milk de Fresa", descripcion: "Té con leche y fresa, jarabe dulce y perlas suaves.", precio: "S/ 15.00", etiqueta: "Frutal", imagen: { src: "/media/bubble-tea-milk-fresa.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Milk de Mango", descripcion: "Té con leche y mango cremoso con perlas.", precio: "S/ 15.00", imagen: { src: "/media/bubble-tea-milk-mango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea de Fresa", descripcion: "Té helado refrescante sabor a fresa natural con popping boba.", precio: "S/ 15.00", imagen: { src: "/media/bubble-tea-fresa.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea con Limón y Lychee", descripcion: "Té cítrico y aromático de limón con lychee y popping boba.", precio: "S/ 15.00", imagen: { src: "/media/bubble-tea-limon-lychee.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea de Mango", descripcion: "Té helado de mango tropical con popping boba.", precio: "S/ 15.00", imagen: { src: "/media/bubble-tea-mango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Manzana Verde", descripcion: "Té frío refrescante sabor manzana verde con perlas de tapioca y abundante hielo.", precio: "S/ 15.00", etiqueta: "Nuevo", imagen: { src: "/media/bubble-tea-manzana-verde.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Menta", descripcion: "Té helado extra refrescante con infusión de menta y perlas de tapioca.", precio: "S/ 15.00", etiqueta: "Nuevo", imagen: { src: "/media/bubble-tea-menta.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Maracumango", descripcion: "Fusión tropical de té frío con maracuyá y mango, acompañado de perlas de tapioca.", precio: "S/ 15.00", etiqueta: "Tropical", imagen: { src: "/media/bubble-tea-maracumango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Matcha con Maracuyá", descripcion: "Refrescante fusión de té verde matcha con toque cítrico de maracuyá y perlas de boba.", precio: "S/ 15.00", etiqueta: "Nuevo", imagen: { src: "/media/bubble-tea-matcha-maracuya.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Bubble Tea Matcha con Fresa y Leche", descripcion: "Capas de puré de fresa natural, leche suave y té matcha ceremonial con perlas de tapioca.", precio: "S/ 15.00", etiqueta: "Especial", imagen: { src: "/media/bubble-tea-matcha-fresa.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Matcha Green Tea con Bobas", descripcion: "Clásico té verde matcha estilo japonés con suave leche y perlas de tapioca masticables.", precio: "S/ 15.00", imagen: { src: "/media/matcha-green-tea-bobas.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Clásico Milk Tea Brown Sugar", descripcion: "Té negro clásico con leche, endulzado con jarabe artesanal brown sugar y perlas de tapioca.", precio: "S/ 15.00", etiqueta: "Favorito", imagen: { src: "/media/clasico-milk-tea-brown-sugar.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Brown Sugar Bubble Tea Milk", descripcion: "Leche fresca bañada en jarabe caramelizado brown sugar con abundantes perlas de tapioca.", precio: "S/ 15.00", imagen: { src: "/media/brown-sugar-bubble-tea-milk.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Taro Milk Bubble Tea con Bobas", descripcion: "Té con leche suave y dulce sabor a taro con deliciosas perlas de tapioca.", precio: "S/ 15.00", imagen: { src: "/media/taro-milk-bubble-tea.webp", size: "cover", position: "center" }, permiteBobas: true }
    ]
  },
  {
    id: "sodas-italianas",
    nombre: "Sodas Italianas",
    kicker: "Burbujas frutales y refrescantes",
    descripcion: "Sodas artesanales bien heladas con pulpa y jarabes de fruta, servidas con popping bobas.",
    banner: "/media/sodas-italianas-banner.webp",
    items: [
      { nombre: "Soda Italiana de Mango", descripcion: "Bebida gasificada ultra refrescante con jarabe de mango tropical y hielo picado.", precio: "S/ 15.00", etiqueta: "Nuevo", imagen: { src: "/media/soda-italiana-mango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Soda Italiana de Maracuyá con Bobas", descripcion: "Soda italiana gasificada sabor maracuyá dulce y tropical, servida con refrescantes popping bobas.", precio: "S/ 15.00", etiqueta: "Top", imagen: { src: "/media/soda-italiana-maracuya.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Soda Italiana de Fresa con Bobas", descripcion: "Soda artesanal gasificada con pulpa de fresa fresca bien helada y deliciosas popping bobas.", precio: "S/ 15.00", etiqueta: "Favorito", imagen: { src: "/media/soda-italiana-fresa.webp", size: "cover", position: "center" }, permiteBobas: true }
    ]
  },
  {
    id: "frappes",
    nombre: "Frappés",
    kicker: "Bien helados, bien cargados",
    descripcion: "Batidos cremosos coronados con chantilly y bobas.",
    items: [
      { nombre: "Frappé Chicle Boom", descripcion: "Batido frappé sabor chicle coronado con chantilly, grajeas de colores y perlas de tapioca.", precio: "S/ 15.00", etiqueta: "Nuevo", imagen: { src: "/media/frappe-chicle-boom.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Fresa", descripcion: "Batido frappé de fresas con líneas de chocolate, crema chantilly, salsa de fresa y grajeas.", precio: "S/ 15.00", etiqueta: "Favorito", imagen: { src: "/media/frappe-fresa.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Chocolate", descripcion: "Batido frappé cremoso de chocolate con crema chantilly y abundante salsa de fudge.", precio: "S/ 15.00", imagen: { src: "/media/frappe-chocolate.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Mango", descripcion: "Frappé cremoso de mango coronado con crema chantilly, drizzle de chocolate y grajeas de colores.", precio: "S/ 15.00", imagen: { src: "/media/frappe-mango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Taro", descripcion: "Frappé cremoso a base de leche con taro tradicional y tope de crema batida.", precio: "S/ 15.00", imagen: { src: "/media/frappe-taro.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Taro con Bobas", descripcion: "Frappé especial de taro servido con crema chantilly y generosa porción de bobas negras.", precio: "S/ 20.00", etiqueta: "Especial", imagen: { src: "/media/frappe-taro-con-bobas.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Matcha", descripcion: "Frappé cremoso de té verde matcha premium decorado con crema chantilly y polvo de matcha.", precio: "S/ 15.00", imagen: { src: "/media/frappe-matcha.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Moca", descripcion: "Batido frappé de café y chocolate con corona de crema chantilly y salsa de chocolate.", precio: "S/ 15.00", imagen: { src: "/media/frappe-moca.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappuccino Clásico", descripcion: "Clásico frappuccino de café con crema batida, salsa de chocolate y barquillo crocante.", precio: "S/ 15.00", etiqueta: "Clásico", imagen: { src: "/media/frappuccino-clasico.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappuccino con Brown Sugar", descripcion: "Frappuccino de café con jarabe caramelizado brown sugar, crema chantilly y barquillo.", precio: "S/ 15.00", imagen: { src: "/media/frappuccino-brown-sugar.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Mango con Bobas de Maracuyá", descripcion: "Batido frappé de mango decorado con fudge de chocolate, crema chantilly y popping bobas de maracuyá.", precio: "S/ 20.00", etiqueta: "Top", imagen: { src: "/media/frappe-mango-bobas-maracuya.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Fresa con Bobas", descripcion: "Batido frappé cremoso de fresa con chantilly y bobas.", precio: "S/ 20.00", etiqueta: "Más pedido", imagen: { src: "/media/frappe-fresa-bobas.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé de Mango con Bobas de Mango", descripcion: "Frappé cremoso de mango coronado con chantilly y bobas de mango.", precio: "S/ 20.00", imagen: { src: "/media/frappe-mango-bobas-mango.webp", size: "cover", position: "center" }, permiteBobas: true },
      { nombre: "Frappé Matcha con Bobas de Arándano", descripcion: "Frappé cremoso de té verde matcha con chantilly y bobas de arándano.", precio: "S/ 20.00", etiqueta: "Especial", imagen: { src: "/media/frappe-matcha-bobas-arandano.webp", size: "cover", position: "center" }, permiteBobas: true }
    ]
  },
  {
    id: "jugos",
    nombre: "Jugos",
    kicker: "100% Fruta fresca",
    descripcion: "Jugos naturales preparados al instante con fruta fresca seleccionada y bien helados.",
    items: [
      { nombre: "Jugo de Mango", descripcion: "Jugo natural y cremoso de mango fresco, servido bien frío.", precio: "S/ 15.00", etiqueta: "Natural", imagen: { src: "/media/jugo-mango.webp", size: "cover", position: "center" } },
      { nombre: "Jugo de Papaya", descripcion: "Clásico y refrescante jugo de papaya natural recién preparado.", precio: "S/ 12.00", etiqueta: "Clásico", imagen: { src: "/media/jugo-papaya.webp", size: "cover", position: "center" } },
      { nombre: "Jugo de Piña", descripcion: "Jugo natural de piña dulce y refrescante, servido bien helado.", precio: "S/ 12.00", etiqueta: "Refrescante", imagen: { src: "/media/jugo-pina.webp", size: "cover", position: "center" } }
    ]
  }
];
