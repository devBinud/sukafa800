# Sukapha 800 — Chaolung Sukapha & The Ahom Kingdom (1228 – 2028)

The official celebration site for 800 years of **Chaolung Sukapha**, the Tai prince who crossed the Patkai hills in 1228 CE and founded the Ahom Kingdom of Assam. It works as a festival hub for the 2028 celebrations and as a lasting historical archive.

## 🧭 Pages

| Route | Page | What it covers |
| --- | --- | --- |
| `/` | `HomePage` | Hero, About the Realm, epoch explorer, living heritage, Asom Divas, history quiz |
| `/migration` | `MigrationPage` | **The Migration** — interactive Mong Mao → Patkai → Charaideo timeline and the founder's story |
| `/legacy` | `LegacyPage` | **The Legacy** — Bor Asom, the Council of Gohains, Buranjis, Paik system, FAQs |
| `/events` | `EventsPage` | **Centenary Events** — countdown, programme, participation, registration |
| `/vault` | `HeritageVaultPage` | **Heritage Vault** — Charaideo Maidams and the royal monument catalogue |
| `/dynasty` | `DynastyPage` | 600-year dynasty: Swargadeos, Saraighat, national heroes |
| `/tribute` | `TributePage` | Community tribute wall and visitor guide |
| `/visit` | `VisitPlannerPage` | Heritage visit planner for Sivasagar, Gargaon and Charaideo |
| `/legal` | `LegalPage` | Privacy, terms of use and accessibility |

Older URLs (`/about`, `/culture`, `/heritage`, `/planner`) redirect to their new routes.

## 🎨 Design

Follows the Sukapha 800 blueprint's 60-30-10 colour system (tokens in `src/index.css`):

- **60%** Warm Silk Cream `#FDFBF7`
- **30%** Royal Hengul Red `#A62B2B` and Muga Royalty Gold `#D4AF37`
- **10%** Vibrant Crest Gold `#FFC107`, reserved for calls to action

## 🗂️ Structure

```
src/
  components/   Navbar, Footer, AhomCrest, MigrationTimeline, CentenaryCountdown, ...
  components/ui shadcn / Vengeance UI components (Tailwind)
  data/         ahomData.js (history content), centenaryEvents.js (event programme)
  pages/        one file per route (see table above)
```

## 🛠️ Tech Stack

- **React 19** + **Vite**
- **React Router 7**
- **Lucide React** (icons)
- Hand-written CSS for the site, plus **Tailwind CSS v4** (no Preflight) for shadcn / Vengeance UI components

## 🚀 Running Locally

```bash
npm install
npm run dev
```
