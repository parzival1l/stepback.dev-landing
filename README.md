# stepback.dev Landing Page

A static landing page for stepback.dev - a git-style conversational AI platform.

## Local Development

This site uses absolute paths and requires a web server to run locally.

### Using Python's HTTP Server

**Python 3:**
```bash
python3 -m http.server 8000
```

**Python 2 (deprecated):**
```bash
python -m http.server 8000
```

Then open your browser to:
```
http://localhost:8000
```

### Alternative: Using Node.js (if you have it installed)

```bash
npx http-server -p 8000
```

### Alternative: Using PHP

```bash
php -S localhost:8000
```

## Port Options

You can use any available port. Common choices:
- `8000` (default)
- `8080`
- `3000`
- `5000`

Example with custom port:
```bash
python3 -m http.server 8080
```

## Project Structure

```
stepback.dev-landing/
├── index.html              # Main landing page
├── access.html             # Access request page
├── roadmap.html            # Product roadmap
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # JavaScript functionality
└── blog/
    ├── index.html          # Blog listing
    └── why-stepback-was-founded.html
```

## Documentation

- `CONNECTION_GUIDE.md` - Backend connection guide
- `REPOSITORY_CHECKLIST.md` - Pre-deployment checklist
- `stepback-landing-page-plan.md` - Implementation plan

## Notes

- The site uses absolute paths (e.g., `/css/styles.css`), so it must be served from a web server root
- Do not open HTML files directly in the browser (file:// protocol) as paths won't resolve correctly

