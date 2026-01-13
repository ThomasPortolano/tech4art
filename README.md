# Odyssée — Louvre Audio Guide Landing Page

This repository contains the source code for the editorial landing page of **Odyssée**, a narrative audio guide app for the Louvre Museum (Android).

The website is designed for SEO performance, targeting high-intent visitors planning a trip to the Louvre. It serves as a gateway to the Google Play Store listing.

## 🚀 Tech Stack

- **HTML5**: Semantic and accessible markup.
- **CSS**: Built with [Pico.css](https://picocss.com/) (v2) for a lightweight, responsive, and semantic design.
- **JavaScript**: Minimal vanilla JS for progressive enhancement (no frameworks).
- **Hosting**: Github.

## 📂 Project Structure

```
.
├── assets/              # Shared assets (CSS, JS, Fonts, Images)
├── en/louvre-audioguide/ # English Landing Page
├── fr/audioguide-louvre/ # French Landing Page
├── index.html           # Root redirect/landing
├── sitemap.xml          # SEO Sitemap
├── vercel.json          # Vercel configuration (headers, redirects)
└── brief.md             # Product Requirement Document
```

## 🛠️ Local Development

Since this is a static site, you can serve it with any static file server.

### Using Python

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Using Vercel CLI

```bash
vercel dev
```

## 🌍 Internationalization (i18n)

The site supports English (`en`) and French (`fr`).
- **Canonical URLs** are defined for each page.
- **`hreflang` tags** are implemented to handle SEO and language targeting correctly.

## 📊 Analytics & SEO

- **Google Analytics 4 (GA4)** is integrated via GTM/gtag.js.
- **Structured Data (JSON-LD)** is included for `SoftwareApplication` and `FAQPage` schemas.
- **Open Graph** tags are present for social sharing optimization.

## 📱 App

The landing page promotes the **Odyssée** app available on Android:
[Download on Google Play](https://play.google.com/store/apps/details?id=com.anonymous.theartcompanion)
