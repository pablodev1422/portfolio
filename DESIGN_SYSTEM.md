# 🎨 Design System & Branding Guidelines (Pablo Perez)

Este documento contiene la configuración visual y arquitectónica completa del portfolio. Utiliza estos valores para crear miniaturas de YouTube, imágenes de Open Graph (OG Images), posts de LinkedIn, o cualquier otra pieza gráfica relacionada con tu marca personal.

---

## 1. Colores Base (Paleta Principal)

El diseño del portfolio se basa en un esquema súper oscuro (casi negro) con contrastes en grises neutros y blancos puros para asegurar legibilidad.

| Nombre | HEX Code | Uso Principal | Variable CSS | Tailwind Class |
| :--- | :--- | :--- | :--- | :--- |
| **Void Black** | `#050505` | Fondo global de la web (`body`, `main`). | `--color-black` | `bg-[#050505]` |
| **Card Off-Black** | `#0A0A0A` | Fondo de tarjetas de proyectos y contenedores secundarios. | `--color-off-black` | `bg-[#0a0a0a]` |
| **Charcoal** | `#1A1A1A` | Botones secundarios y elementos de hover oscuros. | `--color-charcoal` | `bg-[#1a1a1a]` |
| **Pure White** | `#FFFFFF` | Títulos principales (`h1`, `h2`) y botones de llamada a la acción primarios. | N/A | `text-white` o `bg-white` |
| **Neutral 400** | `#A3A3A3` | Textos de párrafos y descripciones estándar. | N/A | `text-neutral-400` |
| **Neutral 500** | `#737373` | Subtítulos, categorías, fechas y textos pequeños secundarios. | N/A | `text-neutral-500` |

---

## 2. Tipografía

Hemos configurado Tailwind v4 para utilizar dos fuentes específicas alojadas en Google Fonts. Todo el portfolio baila entre la elegancia de una fuente Sans-serif geométrica y el toque técnico de una fuente monoespaciada.

### A. Tipografía Principal (Sans-Serif)
* **Familia:** `Poppins`
* **Tailwind Class:** `font-sans`
* **Pesos Usados:** 
    * `Ligera (300)` / `font-light`: Para grandes textos hero y descripciones relajadas.
    * `Media (500)` / `font-medium`: Para botones y nombres de proyectos.
    * `Semibold (600)` / `font-semibold`: Para destacar palabras clave.
* **Uso:** Títulos gigantes (`h1`, `h2`, `h3`), párrafos largos, botones y textos generales de la Interfaz.

### B. Tipografía Técnica (Monospace)
* **Familia:** `JetBrains Mono`
* **Tailwind Class:** `font-mono`
* **Pesos Usados:** Regular (`400`).
* **Uso:** Subtítulos superiores (ej: `SOBRE MÍ`, `ERROR 404`), etiquetas (badges) de tecnologías, y elementos decorativos tipo consola/terminal. Siempre la usamos en minúscula (`text-xs`) con bastante separación entre letras (`tracking-widest`) y en mayúsculas (`uppercase`).

---

## 3. Identidad Visual de Tecnologías (Brand Colors)

Cuando dibujes logos o menciones estas tecnologías en tus imágenes sociales, usa exactamente estos colores para que hagan *match* con los badges de tu web:

* **Java:** `#F89820` (Naranja puro)
* **Spring Boot:** `#6DB33F` (Verde hoja)
* **React:** `#61DAFB` (Cian brillante)
* **Typescript:** `#3178C6` (Azul corporativo)
* **Tailwind CSS:** `#38BDF8` (Azul cielo)
* **Docker:** `#2496ED` (Azul agua)
* **Shopify:** `#95BF47` (Verde lima)
* **Amazon / AWS:** `#FF9900` (Naranja Amazon)
* **Vercel / Vite:** Blanco o `#646CFF`

---

## 4. Efectos Visuales Clave (Estética "Apple Pro")

Tu portfolio no utiliza colores planos aburridos; su estética premium viene dada por tres efectos (shaders / texturas) que deberías simular en Photoshop/Figma al crear creatividades:

### A. Glassmorphism (Cristal Esmerilado)
Se usa en el menú superior (Navbar), los badges de skills y el modal de proyectos.
* **Receta:** Fondo negro o muy oscuro con suma transparencia (`bg-black/80` o `bg-black/50`) emparejado con un `backdrop-blur-xl` (Desfoque de fondo).
* **Borde:** Casi todos los contenedores tienen un borde ultimadamente fino y sutil: `border-white/5` (blanco al 5% de opacidad) o `border-white/10`.

### B. Film Grain (Grano Cinematográfico)
La web no es `#050505` liso. Tiene un texturizado global de ruido digital.
* **Simulación en PSD/Figma:** Crea una capa de gris al 50%, aplícale filtro de "Añadir Ruido" (monocromático) y pon la capa en modo de fusión "Superponer" o "Multiplicar" a un 3-5% de opacidad.

### C. The Aurora Glow (Resplandor de Aurora)
Usado en el fondo del Hero y cuando haces `hover` en las tarjetas de proyectos.
* **Receta CSS:** Gradiente radial o lineal enorme, difuminado intensamente (`blur-3xl`), que mezcla tonos azul espacial y púrpura suave.
* **Colores del Gradiente:** Una mezcla sutil de `rgba(59, 130, 246, 0.1)` (Azul), `rgba(168, 85, 247, 0.1)` (Púrpura) y `rgba(6, 182, 212, 0.1)` (Cian).

---

## 5. Recomendaciones para Imágenes Open Graph (1200x630px)

Si vas a crear una nueva miniatura `og:image` corporativa (por ejemplo `og-image.jpg` o `twitter-card.png`) en Figma, sigue esta estructura base:

1. **Fondo:** Usa tu color Void Black (`#050505`).
2. **Textura:** Añade un poquito de Noise/Grano por encima.
3. **Iluminación:** Pon un destello gigante y suave abajo a la derecha utilizando los tonos Púrpura/Azul muy transparentes para simular tu efecto Aurora.
4. **Tipografía:** Escribe tu nombre grande con `Poppins` en blanco (`#FFFFFF`) y añade debajo tu cargo "Backend & Full Stack Developer" en gris (`#737373`), quizás usando `JetBrains Mono` o `Poppins` regular.
5. **Decos:** Puedes añadir alguna pastilla técnica ("badge") con borde blanco sutil imitando los que tienes en tu `<About />`.
