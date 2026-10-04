import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown, Copy, Flame, Minus, Plus, ShoppingBag, Sparkles, Star, X } from 'lucide-react';
import { DEFAULT_MENU_DATA, Dish } from './data/menuData';

type CartItem = Dish & { cantidad: number };
const money = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;

function App() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_MENU_DATA[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [previewDish, setPreviewDish] = useState<Dish | null>(null);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.cantidad, 0), [cart]);
  const total = useMemo(() => cart.reduce((sum, item) => sum + money(item.precio) * item.cantidad, 0), [cart]);

  const add = (dish: Dish) => setCart(items => {
    const existing = items.find(item => item.nombre === dish.nombre);
    if (existing) return items.map(item => item.nombre === dish.nombre ? { ...item, cantidad: item.cantidad + 1 } : item);
    return [...items, { ...dish, cantidad: 1 }];
  });

  const change = (name: string, delta: number) => setCart(items => items
    .map(item => item.nombre === name ? { ...item, cantidad: item.cantidad + delta } : item)
    .filter(item => item.cantidad > 0));

  const scrollTo = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyOrder = async () => {
    const detail = cart.map(item => `${item.cantidad} × ${item.nombre} — ${item.precio}`).join('\n');
    await navigator.clipboard.writeText(`Pedido Diego's King\n\n${detail}\n\nTotal referencial: S/ ${total.toFixed(2)}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><img src="/media/logo-diegos-king.png" alt="Diego's King" /></a>
        <div className="king-note" aria-label="I love Diego's King"><span>I</span><b>♥</b><span>DK</span></div>
        <button className="bag-button" onClick={() => setCartOpen(true)} aria-label={`Abrir pedido, ${cartCount} productos`}>
          <ShoppingBag size={20} /><span>Pedido</span><b>{cartCount}</b>
        </button>
      </header>

      <div className="ticker" aria-hidden="true"><div>
        {[0, 1, 2, 3].map(i => <span key={i}>HOLA, MIS KINGLOVERS <i>♥</i> PAPAS SIN MIEDO <i>✦</i> ALITAS CON CORONA <i>✦</i> </span>)}
      </div></div>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" aria-hidden="true" /><div className="hero-shade" />
          <div className="hero-copy">
            <div className="eyebrow"><Flame size={16} /> HOLA, PAPERITOS</div>
            <h1>Hola, mis<br /><em>King<wbr />lovers.</em></h1>
            <p>El antojo manda aquí: conos cargados, alitas bañadas, chaufas y salchipapas para compartir.</p>
            <button className="primary-cta" onClick={() => scrollTo('conos')}>VER LA CARTA <ChevronDown size={18} /></button>
          </div>
          <div className="bartolito-badge" aria-label="Bartolito, mascota de Diego's King">
            <img src="/media/bartolito.png" alt="Bartolito" />
          </div>
        </section>

        <section className="quick-info" aria-label="Características">
          <div><Flame /><span><b>HECHO CALIENTE</b><small>Todo sale al momento</small></span></div>
          <div><Sparkles /><span><b>SALSAS DE LA CASA</b><small>Elige tu nivel de power</small></span></div>
          <div><Star /><span><b>COMBOS KING</b><small>Perfectos para compartir</small></span></div>
        </section>

        <section className="menu-intro"><span>LA CARTA · DIEGO'S KING</span><h2>Elige tu<br /><em>antojo.</em></h2><p>Arma tu pedido y copia el resumen cuando estés listo.</p></section>

        <nav className="category-nav" aria-label="Categorías del menú">
          {DEFAULT_MENU_DATA.map(category => (
            <button key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => scrollTo(category.id)}>{category.nombre}<span>{category.items.length}</span></button>
          ))}
        </nav>

        <div className="menu-sections">
          {DEFAULT_MENU_DATA.map((category, categoryIndex) => (
            <section className="menu-category" id={category.id} key={category.id}>
              <div className="category-heading"><span className="category-number">{String(categoryIndex + 1).padStart(2, '0')}</span><div><p>{category.kicker}</p><h3>{category.nombre}</h3><small>{category.descripcion}</small></div></div>
              <div className="dish-list">
                {category.items.map(dish => (
                  <motion.article className={`dish-card ${dish.imagen ? 'has-image' : ''}`} key={dish.nombre} whileHover={{ y: -3 }}>
                    {dish.imagen && (
                      <div
                        className="dish-photo"
                        role="button"
                        tabIndex={0}
                        title="Ver imagen completa"
                        onClick={() => setPreviewDish(dish)}
                        onKeyDown={e => e.key === 'Enter' && setPreviewDish(dish)}
                        style={{ backgroundImage: `url(${dish.imagen.src})`, backgroundSize: dish.imagen.size, backgroundPosition: dish.imagen.position }}
                      >
                        <span>Ver foto ✦</span>
                      </div>
                    )}
                    <div className="dish-body">
                      <div className="dish-topline"><div className="dish-name">{dish.etiqueta && <span>{dish.etiqueta}</span>}<h4>{dish.nombre} {dish.picante && <Flame size={15} aria-label="Picante" />}</h4></div><strong>{dish.precio}</strong></div>
                      <p>{dish.descripcion}</p>
                      <button onClick={() => add(dish)} aria-label={`Agregar ${dish.nombre} al pedido`}><Plus size={18} /> Agregar</button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mascot-callout"><img src="/media/mascota.png" alt="Mascota de Diego's King" /><div><span>¿YA ELEGISTE?</span><h2>No dejes que<br />se enfríe.</h2><button onClick={() => setCartOpen(true)}>REVISAR MI PEDIDO <ShoppingBag size={18} /></button></div></section>
      </main>

      <footer>
        <span className="since">SINCE 2019</span>
        <img src="/media/logo-footer.png" alt="Diego's King" />
        <p>Conos · Alitas · Salchipapas · Chaufas</p>
        <small>© 2026 Diego's King · Carta digital</small>
      </footer>

      <AnimatePresence>{cartCount > 0 && !cartOpen && (
        <motion.button className="floating-cart" initial={{ y: 90, x: '-50%' }} animate={{ y: 0, x: '-50%' }} exit={{ y: 90, x: '-50%' }} onClick={() => setCartOpen(true)}><span><ShoppingBag size={20} /><b>{cartCount}</b> productos</span><strong>S/ {total.toFixed(2)}</strong></motion.button>
      )}</AnimatePresence>

      <AnimatePresence>{cartOpen && (
        <motion.div className="drawer-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)}>
          <motion.aside className="cart-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 260 }} onClick={e => e.stopPropagation()}>
            <div className="drawer-header"><div><span>TU ORDEN</span><h2>PEDIDO KING</h2></div><button onClick={() => setCartOpen(false)} aria-label="Cerrar pedido"><X /></button></div>
            {cart.length === 0 ? <div className="empty-cart"><ShoppingBag size={42} /><h3>Todavía no hay antojos</h3><p>Agrega tus favoritos desde la carta.</p><button onClick={() => setCartOpen(false)}>Explorar menú</button></div> : <>
              <div className="cart-items">{cart.map(item => <div className="cart-item" key={item.nombre}><div><h4>{item.nombre}</h4><span>{item.precio}</span></div><div className="quantity"><button onClick={() => change(item.nombre, -1)} aria-label={`Quitar ${item.nombre}`}><Minus size={15} /></button><b>{item.cantidad}</b><button onClick={() => change(item.nombre, 1)} aria-label={`Añadir ${item.nombre}`}><Plus size={15} /></button></div></div>)}</div>
              <div className="drawer-total"><span>Total referencial</span><strong>S/ {total.toFixed(2)}</strong></div>
              <button className="copy-order" onClick={copyOrder}>{copied ? <><Check /> PEDIDO COPIADO</> : <><Copy /> COPIAR MI PEDIDO</>}</button>
              <p className="order-note">Podrás pegar este resumen en WhatsApp cuando el restaurante comparta su número oficial.</p>
            </>}
          </motion.aside>
        </motion.div>
      )}</AnimatePresence>

      <AnimatePresence>
        {previewDish && previewDish.imagen && (
          <motion.div
            className="drawer-backdrop preview-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewDish(null)}
          >
            <motion.div
              className="photo-modal"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="photo-modal-close"
                onClick={() => setPreviewDish(null)}
                aria-label="Cerrar vista previa"
              >
                <X size={20} />
              </button>
              <div className="photo-modal-frame">
                <img src={previewDish.imagen.src} alt={previewDish.nombre} />
              </div>
              <div className="photo-modal-footer">
                <div className="dish-topline">
                  <h4>{previewDish.nombre}</h4>
                  <strong>{previewDish.precio}</strong>
                </div>
                <p>{previewDish.descripcion}</p>
                <button
                  onClick={() => {
                    add(previewDish);
                    setPreviewDish(null);
                  }}
                >
                  <Plus size={18} /> Agregar al pedido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
