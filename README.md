# Atahar Hossain – Portfolio

Angular 17 standalone portfolio following the DA-Kurs checklist.

## Quick start

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/portfolio
```

## Project structure

```
src/app/
├── components/           # Reusable section components
│   ├── header/           # Sticky nav with mobile menu & language toggle
│   ├── hero/             # Above-the-fold with ticker
│   ├── about/            # Photo + bio + bullet points
│   ├── skills/           # Tech icon grid
│   ├── projects/         # Featured projects list
│   ├── experience/       # Testimonials carousel
│   ├── contact/          # Reactive form with validation
│   └── footer/           # Links + back-to-top
├── directives/
│   └── scroll-animation.directive.ts   # IntersectionObserver fade-in
├── pages/
│   ├── home/             # Assembles all sections
│   ├── imprint/          # Impressum (router link)
│   └── privacy/          # Datenschutzerklärung
└── services/
    ├── language.service.ts             # EN/DE toggle (Angular signal)
    └── translations/                   # en.ts · de.ts · interface.ts
```

## Add your photo

Place your profile image at `src/assets/img/profile.jpg` (max 500 KB,
ideally 600 × 800 px).

## Checklist highlights implemented

- ✅ Separate component per section
- ✅ Sticky header with scroll offset for anchor links
- ✅ Responsive ≥ 320 px, content max-width 1200 px
- ✅ Hero 100 vh above-the-fold
- ✅ Infinite CSS ticker / marquee
- ✅ Scroll-reveal animations via IntersectionObserver
- ✅ EN/DE language switch (Angular signals + computed translations)
- ✅ Contact form: onBlur validation, no layout shifts, submit disabled until valid + checkbox
- ✅ All external links open in new tab (`target="_blank" rel="noopener"`)
- ✅ Imprint & Privacy via RouterLink (same header/footer)
- ✅ Custom SVG favicon & custom `<title>`
- ✅ `cursor: pointer` on all interactive elements
- ✅ Transitions 100 ms
- ✅ No lorem ipsum
- ✅ No serif fonts (Space Mono + Inter)
- ✅ Max 400 LOC per file, max 14 lines per function
