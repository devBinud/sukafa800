# Typography & Font Family Design System

This document specifies the exact typography setup, font families, Google Font imports, and CSS rules used across the website so you can replicate it identically on any other website.

---

## 1. Font Families Used

| Usage | Font Family | Fallbacks |
| :--- | :--- | :--- |
| **Headings (`h1` - `h6`)** | `'Farro'` | `'Inter', system-ui, -apple-system, sans-serif` |
| **Body & UI Text** | `'Inter'` | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |
| **Alternative / Modern UI** | `'Plus Jakarta Sans'` | `sans-serif` |

---

## 2. Google Fonts Imports

### Option A: HTML `<head>` Links (Recommended)
Add this directly inside the `<head>` of your HTML document:

```html
<!-- Google Fonts Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Farro (Headings) & Inter (Body) -->
<link href="https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
```

---

### Option B: CSS `@import` (At the top of your CSS file)
If you prefer adding it inside your global CSS file (e.g., `index.css` or `globals.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Farro:wght@300;400;500;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap');
```

---

## 3. CSS Variables Setup

Add this inside your `:root` block:

```css
:root {
  /* Typography Variables */
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'Farro', 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Plus Jakarta Sans', var(--font-sans);
}
```

---

## 4. Global CSS Rules

Copy and paste these base styles into your global stylesheet:

```css
/* Body / General Text */
body {
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Form Controls & Buttons */
button, input, textarea, select {
  font-family: inherit;
}
```

---

## 5. Typography Hierarchy & Weights

| Element / Class | Font Family | Weight | Letter Spacing | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **`h1` / Hero Heading** | `'Farro'` | `700` (Bold) | `-0.03em` | `1.15` - `1.2` |
| **`h2` / Section Heading** | `'Farro'` | `700` (Bold) | `-0.02em` | `1.25` |
| **`h3` / Card Title** | `'Farro'` | `600` / `700` | `-0.01em` | `1.3` |
| **`h4` / `h5` / Subheadings** | `'Farro'` | `600` (SemiBold) | `normal` | `1.4` |
| **Body Regular** | `'Inter'` | `400` (Regular) | `normal` | `1.6` |
| **Body Medium / Accents** | `'Inter'` | `500` (Medium) | `normal` | `1.5` |
| **Buttons & Badges** | `'Inter'` | `600` (SemiBold) | `-0.01em` | `1` |
| **Small / Captions / Labels** | `'Inter'` | `500` / `600` | `0.02em` | `1.4` |

---

## 6. Tailwind CSS Configuration (If using Tailwind)

If the other website uses Tailwind CSS, add this to `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Farro', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
};
```
