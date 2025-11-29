# portfolio-react-tailwind-framer

A modern single-page portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.
This template uses a single source data file (`src/data/portfolioData.ts`) and includes a simple PDF importer
that attempts to extract basic fields from a resume PDF using `pdfjs-dist`. Parsing is heuristic — you will likely
need to edit the generated data.

## Features

- Dark-blue gradient theme
- Responsive layout
- Framer Motion animations (fade/bounce/slide)
- Single data file (`src/data/portfolioData.ts`)
- Resume PDF importer to auto-populate fields (manual review recommended)

## How to use

1. Install dependencies:
```bash
npm install
```

2. Start the dev server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:5173`

4. To update content, either edit `src/data/portfolioData.ts` or use the **Import Resume PDF** button in the top-right
   to upload a PDF and auto-populate fields (then adjust manually in code if needed).

## Notes

- The importer uses `pdfjs-dist` in the browser. It's a heuristic approach — depending on your resume layout results will vary.
- This project is a clean starter: extend styles, swap icons (Font Awesome), and refine animations as desired.

