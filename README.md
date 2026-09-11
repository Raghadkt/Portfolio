# Raghad Khalid — CV / Portfolio Site

A personal (CV) website ready to be published on GitHub Pages. Fully static (HTML/CSS/JS), no server needed.

## File Structure
```
index.html              ← Main page (all sections)
project.html            ← Detail page for any project (opens automatically based on the project)
assets/css/style.css    ← All styling + light/dark mode
assets/js/data.js       ← ← This is the file you edit to add a new project/certificate/achievement
assets/js/main.js       ← Runs the menu, dark mode, animations, and renders the data
assets/js/project-detail.js
assets/images/projects/       ← Project images
assets/images/certificates/   ← Certificate files (PDF/image)
assets/cv/                    ← CV file in PDF format
```

---

## 1) Publishing the site to GitHub Pages (first time)

1. Go to https://github.com and create an account if you don't have one.
2. Click **New repository**.
   - Name: any name you like, e.g. `portfolio` or `raghad-cv`.
   - Make it **Public**.
   - Don't add a README from that step (since we already have one).
3. Open the new repo → **Add file → Upload files**.
4. Drag in all your files and folders (index.html, project.html, assets, .nojekyll, README.md) and upload them all at once, keeping the same folder structure.
   - Most important: the `assets` folder must go up with all its contents in the same order (css / js / images / cv).
5. Click **Commit changes**.
6. From the top of the repo → **Settings** → from the sidebar, **Pages**.
7. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
8. Under **Branch**, choose `main` and the folder `/ (root)`, then **Save**.
9. Wait a minute or two, and your site link will appear at the top in the form:
   `https://username.github.io/repo-name/`

Your site is now live. Any edit you make afterward and upload will update automatically within about a minute.

---

## 2) How to add a new project (without touching the site design)

All projects, certificates, experience, and achievements live in **one single file**:
`assets/js/data.js`

### To add a new project:
1. Open `assets/js/data.js` from within GitHub (click the file, then the pencil ✏️ icon to edit).
2. Copy this template and add it inside `PROJECTS = [ ... ]` (before the final `]`, with a comma `,` after the last existing project):

```js
{
  id: "project-id-unique",
  title: "Project Name",
  category: "arduino",          // matlab | electronics | arduino | future
  categoryLabel: "Arduino",
  image: "assets/images/projects/my-image.jpg",
  shortDesc: "Short description of the project.",
  tools: ["Arduino", "C/C++"],
  details: {
    problem: "...",
    idea: "...",
    howItWorks: "...",
    components: ["Component 1", "Component 2"],
    myRole: "...",
    results: "...",
    photos: ["assets/images/projects/photo1.jpg"]
  }
}
```
3. Upload the project image inside `assets/images/projects/` with the same name you used in `image`.
4. Save (Commit changes). The project will automatically appear in the Projects section, and its detail page will be ready at `project.html?id=project-id-unique`.

### To add a certificate:
Same idea, but inside `CERTIFICATES = [ ... ]`:
```js
{
  title: "Certificate Name",
  issuer: "Issuer",
  year: "2026",
  file: "assets/images/certificates/my-cert.pdf"
}
```

### To add experience/training:
Inside `EXPERIENCE = [ ... ]`:
```js
{
  date: "Summer 2026",
  title: "Training Title",
  org: "Organization Name",
  description: "Brief description."
}
```

### To add an achievement:
Inside `ACHIEVEMENTS = [ ... ]`:
```js
{
  category: "Competitions", // Competitions | University Projects | Academic Achievements | Workshops | Events
  title: "Achievement Title",
  description: "Brief description."
}
```

**Summary:** Every time you add something new → open only `data.js` → add a new block → upload any related images → Commit. You never need to touch index.html or the CSS or any other JS file.

---

## 3) Simple edits you'll need to make yourself

- **Your email, LinkedIn, GitHub**: In `index.html` inside the `#contact` section, edit the three links.
- **The email the contact form sends to**: In `assets/js/main.js`, search for `youremail@example.com` and change it.
- **The CV file**: Place a PDF file named `Raghad-Khalid-CV.pdf` inside `assets/cv/`.
- **The personal bio**: In `index.html` inside the `#home` and `#about` sections, edit the placeholder text.

---

## 4) Important notes

- The site supports light and dark mode automatically, and remembers the visitor's choice.
- On mobile, the menu automatically becomes a ☰ button, with no extra setup needed.
- The contact form at the bottom opens the email app directly (Gmail/Outlook) since GitHub Pages doesn't support receiving forms with a backend server. If you'd like a form that actually sends from the site, I can add a free service like Formspree later — but that's optional.
