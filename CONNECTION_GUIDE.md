# stepback.dev Landing Page - Connection Guide

This document outlines all pages, endpoints, and configurable links in the landing page that need to be connected to your backend and updated before deployment.

---

## Pages & Endpoints

| Page | Path | Description |
|------|------|-------------|
| Landing Page | `/` | Main marketing page with features, how it works, tech stack |
| Access Request | `/access.html` | Private beta signup form + contact options |
| Blog Listing | `/blog/` | List of all blog posts |
| Blog Post | `/blog/why-stepback-was-founded.html` | First blog post (draft) |
| Roadmap | `/roadmap.html` | Product roadmap with status indicators |

---

## Links to Replace

### GitHub Repository

**Current placeholder:** `https://github.com/parzival1l/stepback.dev`

**Files to update:**
- `index.html` (line ~106 - hero "open source" link)
- `index.html` (line ~511 - footer GitHub link)
- `access.html` (line ~100 - "Explore the Code" section)
- `access.html` (footer GitHub link)
- `blog/index.html` (footer GitHub link)
- `blog/why-stepback-was-founded.html` (line ~97 - in article content)
- `blog/why-stepback-was-founded.html` (footer GitHub link)
- `roadmap.html` (footer GitHub link)

**Search & replace:**
```
Find: https://github.com/parzival1l/stepback.dev
Replace: YOUR_GITHUB_URL
```

---

### Email Address

**Current placeholder:** `hello@stepback.dev`

**Files to update:**
- `index.html` (footer contact link)
- `access.html` (email link in urgent requests section)
- `access.html` (footer contact link)
- `blog/index.html` (footer contact link)
- `blog/why-stepback-was-founded.html` (footer contact link)
- `roadmap.html` (feedback email + footer contact link)

**Search & replace:**
```
Find: hello@stepback.dev
Replace: YOUR_EMAIL
```

---

### App URL (for signed-in users)

**Current placeholder:** `https://app.stepback.dev`

**Files to update:**
- `access.html` (line ~119 - "Already have access? Sign in" link)

**Search & replace:**
```
Find: https://app.stepback.dev
Replace: YOUR_APP_URL
```

---

## Backend Connections Required

### 1. Email Signup Form (access.html) — CURRENTLY DISABLED

The email signup form is commented out in `access.html`. When ready to enable:

1. Uncomment the form in `access.html` (lines 92-124)
2. Configure the endpoint in `js/main.js` (line 129):

```javascript
const SIGNUP_ENDPOINT = '/api/signup'; // Change to your endpoint
```

**Request format:**
```
POST /api/signup
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Expected response (success):**
```json
{
  "success": true,
  "message": "You're on the list!"
}
```

**Expected response (error):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

**FastAPI example endpoint:**
```python
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class SignupRequest(BaseModel):
    email: EmailStr

@app.post("/api/signup")
async def signup(request: SignupRequest):
    # Save email to database
    # await db.signups.insert_one({"email": request.email})
    return {"success": True, "message": "You're on the list!"}
```

**Alternative options:**
- Formspree (https://formspree.io) - change endpoint to `https://formspree.io/f/YOUR_ID`
- Netlify Forms - add `netlify` attribute to form
- Google Sheets via Apps Script

**Demo mode:** When enabled, if the endpoint doesn't exist, the form shows a success message anyway (for testing). Remove this behavior in production by editing `js/main.js` lines 184-192.

---

### 2. Analytics (Optional)

Stubs are already in place in `js/main.js` for:
- CTA click tracking
- Scroll depth tracking

**To enable Google Analytics:**
1. Add GA script to `<head>` of each HTML file
2. Uncomment the `gtag()` calls in `js/main.js`

---

## Environment-Specific URLs

For different environments, you may need to update:

| Variable | Development | Production |
|----------|-------------|------------|
| App URL | `http://localhost:3000` | `https://app.stepback.dev` |
| API Endpoint | `http://localhost:8000/api` | `https://api.stepback.dev` |
| GitHub | Your repo URL | Your repo URL |

---

## Quick Setup Checklist

- [ ] Replace GitHub URL (`https://github.com/parzival1l/stepback.dev`)
- [ ] Replace email address (`hello@stepback.dev`)
- [ ] Replace app URL (`https://app.stepback.dev`)
- [ ] Add favicon (`/favicon.ico`)
- [ ] Add OG image (`/assets/images/og-image.png`)
- [ ] Add logo SVG (`/assets/images/logo.svg`)
- [ ] Set up analytics (optional)
- [ ] Update blog post content
- [ ] Update roadmap items as needed
- [ ] (Optional) Enable email signup form and connect to backend

---

## File Structure

```
stepback_landing/
├── index.html              # Main landing page
├── access.html             # Access request (email form disabled)
├── roadmap.html            # Product roadmap
├── css/
│   └── styles.css          # All shared styles
├── js/
│   └── main.js             # Animations + form handling
├── blog/
│   ├── index.html          # Blog listing
│   └── why-stepback-was-founded.html
└── assets/
    └── images/             # OG images, logo, etc.
```

---

## Adding New Blog Posts

1. Duplicate `blog/why-stepback-was-founded.html`
2. Update the content, title, meta tags
3. Add a new card to `blog/index.html`

## Adding Roadmap Items

Add new items to `roadmap.html`:
```html
<div class="roadmap-item animate-on-scroll">
  <div class="roadmap-header">
    <span class="roadmap-status planned">Planned</span>
    <!-- Options: completed, in-progress, planned -->
  </div>
  <h3>Feature Name</h3>
  <p>Feature description...</p>
</div>
```
