import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown, Copy, Flame, Minus, Plus, ShoppingBag, Sparkles, Star, X } from 'lucide-react';
import { DEFAULT_MENU_DATA, Dish, BOBA_OPTIONS } from './data/menuData';

type CartItem = {
  id: string;
  nombre: string;
  descripcion: string;
  precioTexto: string;
  precioUnitario: number;
  cantidad: number;
  adicionales: string[];
};

const money = (value: string) => Number(value.replace(/[^\d.]/g, '')) || 0;

function App() {
  const [activeCategory, setActiveCategory] = useState(DEFAULT_MENU_DATA[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [previewDish, setPreviewDish] = useState<Dish | null>(null);

  // Modal para agregar bobas / popping bobas
  const [bobaModalDish, setBobaModalDish] = useState<Dish | null>(null);
  const [selectedBobas, setSelectedBobas] = useState<string[]>([]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.cantidad, 0), [cart]);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.precioUnitario * item.cantidad, 0), [cart]);

  const addDish = (dish: Dish, adicionales: string[] = []) => {
    const extraTotal = adicionales.length * 5;
    const unitPrice = money(dish.precio) + extraTotal;
    const sortedExtras = [...adicionales].sort();
    const itemId = sortedExtras.length > 0 ? `${dish.nombre}__${sortedExtras.join('+')}` : dish.nombre;

    setCart(items => {
      const existing = items.find(item => item.id === itemId);
      if (existing) {
        return items.map(item => item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item);
      }
      return [
        ...items,
        {
          id: itemId,
          nombre: dish.nombre,
          descripcion: dish.descripcion,
          precioTexto: `S/ ${unitPrice.toFixed(2)}`,
          precioUnitario: unitPrice,
          cantidad: 1,
          adicionales: sortedExtras,
        }
      ];
    });
  };

  const handleAddClick = (dish: Dish, categoryId?: string) => {
    if (categoryId === 'bubble-tea' || categoryId === 'frappes' || categoryId === 'sodas-italianas' || dish.permiteBobas) {
      setBobaModalDish(dish);
      setSelectedBobas([]);
    } else {
      addDish(dish, []);
    }
  };

  const change = (itemId: string, delta: number) => {
    setCart(items => items
      .map(item => item.id === itemId ? { ...item, cantidad: item.cantidad + delta } : item)
      .filter(item => item.cantidad > 0)
    );
  };

  const scrollTo = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyOrder = async () => {
    const detail = cart.map(item => {
      const extras = item.adicionales && item.adicionales.length > 0
        ? ` (+ Popping Bobas: ${item.adicionales.join(', ')})`
        : '';
      return `${item.cantidad} × ${item.nombre}${extras} — S/ ${(item.precioUnitario * item.cantidad).toFixed(2)}`;
    }).join('\n');

    await navigator.clipboard.writeText(`Pedido Diego's King\n\n${detail}\n\nTotal referencial: S/ ${total.toFixed(2)}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><img src="/media/logo-diegos-king.webp" alt="Diego's King" /></a>
        <div className="king-note" aria-label="I love Diego's King"><span>I</span><b>♥</b><span>DK</span></div>
        <button className="bag-button" onClick={() => setCartOpen(true)} aria-label={`Abrir pedido, ${cartCount} productos`}>
          <ShoppingBag size={20} /><span>Pedido</span><b>{cartCount}</b>
        </button>
      </header>

      <div className="ticker" aria-hidden="true"><div>
        {[0, 1, 2, 3].map(i => <span key={i}>HOLA, MIS KINGLOVERS <i>♥</i> PAPAS SIN MIEDO <i>✦</i> ALITAS CON CORONA <i>✦</i> BUBBLE TEA CON POWER <i>✦</i> </span>)}
      </div></div>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-image" aria-hidden="true" /><div className="hero-shade" />
          <div className="hero-copy">
            <div className="eyebrow"><Flame size={16} /> HOLA, PAPERITOS</div>
            <h1>Hola, mis<br /><em>King<wbr />lovers.</em></h1>
            <p>El antojo manda aquí: conos cargados, alitas bañadas, chaufas, bubble tea, sodas italianas y frappés para compartir.</p>
            <button className="primary-cta" onClick={() => scrollTo('conos')}>VER LA CARTA <ChevronDown size={18} /></button>
          </div>
          <div className="bartolito-badge" aria-label="Bartolito, mascota de Diego's King">
            <img src="/media/bartolito.webp" alt="Bartolito" />
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
              {category.banner && (
                <div className="category-banner">
                  <img src={category.banner} alt={category.nombre} />
                </div>
              )}
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
                      <div className="dish-topline">
                        <div className="dish-name">
                          {dish.etiqueta && <span>{dish.etiqueta}</span>}
                          <h4>{dish.nombre} {dish.picante && <Flame size={15} aria-label="Picante" />}</h4>
                        </div>
                        <strong>{dish.precio}</strong>
                      </div>
                      <p>{dish.descripcion}</p>
                      <button onClick={() => handleAddClick(dish, category.id)} aria-label={`Agregar ${dish.nombre} al pedido`}>
                        <Plus size={18} /> Agregar
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mascot-callout"><img src="/media/mascota.webp" alt="Mascota de Diego's King" /><div><span>¿YA ELEGISTE?</span><h2>No dejes que<br />se enfríe.</h2><button onClick={() => setCartOpen(true)}>REVISAR MI PEDIDO <ShoppingBag size={18} /></button></div></section>
      </main>

      <footer>
        <span className="since">SINCE 2019</span>
        <img src="/media/logo-footer.webp" alt="Diego's King" />
        <p>Conos · Alitas · Salchipapas · Chaufas · Bubble Tea · Sodas Italianas · Frappés</p>
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
              <div className="cart-items">
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div>
                      <h4>{item.nombre}</h4>
                      {item.adicionales && item.adicionales.length > 0 && (
                        <small className="cart-item-extras">
                          ✦ Bobas: {item.adicionales.join(', ')} (+ S/ {(item.adicionales.length * 5).toFixed(2)})
                        </small>
                      )}
                      <span>{item.precioTexto}</span>
                    </div>
                    <div className="quantity">
                      <button onClick={() => change(item.id, -1)} aria-label={`Quitar ${item.nombre}`}><Minus size={15} /></button>
                      <b>{item.cantidad}</b>
                      <button onClick={() => change(item.id, 1)} aria-label={`Añadir ${item.nombre}`}><Plus size={15} /></button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="drawer-total"><span>Total referencial</span><strong>S/ {total.toFixed(2)}</strong></div>
              <button className="copy-order" onClick={copyOrder}>{copied ? <><Check /> PEDIDO COPIADO</> : <><Copy /> COPIAR MI PEDIDO</>}</button>
              <p className="order-note">Podrás pegar este resumen en WhatsApp cuando el restaurante comparta su número oficial.</p>
            </>}
          </motion.aside>
        </motion.div>
      )}</AnimatePresence>

      {/* Modal para Adicionales de Bobas / Popping Bobas */}
      <AnimatePresence>
        {bobaModalDish && (
          <motion.div
            className="drawer-backdrop preview-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBobaModalDish(null)}
          >
            <motion.div
              className="boba-modal"
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="boba-modal-header">
                <div>
                  <span className="boba-badge">PERSONALIZA TU BEBIDA</span>
                  <h3>{bobaModalDish.nombre}</h3>
                  <strong>Base: {bobaModalDish.precio}</strong>
                </div>
                <button
                  className="photo-modal-close"
                  onClick={() => setBobaModalDish(null)}
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="boba-modal-body">
                <div className="boba-options-header">
                  <div>
                    <h4>Adicionar Bobas / Popping Bobas</h4>
                    <p>Elige uno o más sabores de bolitas (+ S/ 5.00 c/u):</p>
                  </div>
                  <span className="price-tag">+ S/ 5.00 c/u</span>
                </div>

                <div className="boba-flavor-grid">
                  {BOBA_OPTIONS.map(opt => {
                    const isSelected = selectedBobas.includes(opt.nombre);
                    return (
                      <button
                        key={opt.nombre}
                        type="button"
                        className={`boba-flavor-pill ${isSelected ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedBobas(prev =>
                            prev.includes(opt.nombre)
                              ? prev.filter(f => f !== opt.nombre)
                              : [...prev, opt.nombre]
                          );
                        }}
                      >
                        <span className="boba-check">{isSelected ? '✓' : '+'}</span>
                        <span className="boba-name">{opt.nombre}</span>
                        <span className="boba-price">+ S/ 5</span>
                      </button>
                    );
                  })}
                </div>

                {selectedBobas.length > 0 && (
                  <div className="boba-summary">
                    <span>Adicionales seleccionados ({selectedBobas.length}):</span>
                    <b>+ S/ {(selectedBobas.length * 5).toFixed(2)}</b>
                  </div>
                )}
              </div>

              <div className="boba-modal-footer">
                <button
                  type="button"
                  className="boba-btn-add"
                  onClick={() => {
                    addDish(bobaModalDish, selectedBobas);
                    setBobaModalDish(null);
                  }}
                >
                  <Plus size={18} />
                  {selectedBobas.length > 0
                    ? `Agregar con bobas (S/ ${(money(bobaModalDish.precio) + selectedBobas.length * 5).toFixed(2)})`
                    : `Agregar al pedido (${bobaModalDish.precio})`}
                </button>

                {selectedBobas.length > 0 && (
                  <button
                    type="button"
                    className="boba-btn-plain"
                    onClick={() => {
                      addDish(bobaModalDish, []);
                      setBobaModalDish(null);
                    }}
                  >
                    Agregar sin adicionales ({bobaModalDish.precio})
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para ver Imagen Completa en Alta Definición */}
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
                    handleAddClick(previewDish);
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
