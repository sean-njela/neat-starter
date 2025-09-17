# Config.yml

In this ssection we will break down what that **`config.yml`** means — this is the config for **Netlify CMS**, which lets you manage content from a UI.

---

### 🔹 Backend

```yaml
backend:
  # Use Netlify Identity as backend
  name: git-gateway
  branch: main
  ### enable below lines for github integration ###
  # name: github
  # repo: sean-njela/neat-starter
```

* `name: git-gateway` → tells Netlify CMS to use **Netlify Identity + Git Gateway**.
  This means:

  * You log into the CMS via Netlify Identity.
  * Netlify’s **Git Gateway API** commits content changes to your repo.
* `branch: main` → changes will be committed to the `main` branch.
* (Alternative) `name: github` → if you uncomment this and set a `repo`, Netlify CMS talks **directly to GitHub** (no Netlify Identity needed).

---

### 🔹 Media settings

```yaml
media_folder: "src/static/img/uploads"
public_folder: "img/uploads"
```

* `media_folder`: where uploaded files (images, docs) are stored **inside your repo**.
* `public_folder`: the path they are served from **in the built site**.
  → So if you upload `logo.png`, it ends up at:
  `src/static/img/uploads/logo.png` (repo)
  `/img/uploads/logo.png` (website)

---

### 🔹 Local Backend

```yaml
local_backend: true
```

* Lets you run Netlify CMS **locally** without deploying.
* You’ll run:

  ```sh
  npx netlify-cms-proxy-server
  ```

  so you can test content editing while running `eleventy`.

---

### 🔹 Collections

Collections = types of content you can create/edit in the CMS.

#### 1. Blog

```yaml
- label: "Blog"
  name: "blog"
  folder: "src/posts"
  create: true
  fields:
    - { label: "Title", name: "title", widget: "string" }
    - { label: "Description", name: "description", widget: "string" }
    - { label: "Author", name: "author", widget: "string" }
    - { label: "Publish Date", name: "date", widget: "datetime" }
    - { label: "Body", name: "body", widget: "markdown" }
```

* Creates/edit blog posts in `src/posts/`.
* Each post = Markdown file (`.md`) with frontmatter (title, author, etc.).
* Body uses a Markdown editor widget.

---

#### 2. Projects

```yaml
- label: "Projects"
  name: "projects"
  folder: "src/projects"
  create: true
  slug: "{{slug}}"
  extension: "md"
  fields:
    - { label: "Title", name: "title", widget: "string" }
    - { label: "Publish Date", name: "date", widget: "datetime" }
    - { label: "Description", name: "description", widget: "text" }
    - { label: "Category", name: "category", widget: "select", options: ["Web", "Mobile", "Data", "Design", "Other"], default: "Web" }
    - { label: "Image", name: "image", widget: "image" }
    - { label: "URL", name: "url", widget: "string", hint: "Link to live project or repo" }
    - { label: "Tags", name: "tags", widget: "list", default: ["project"] }
```

* Similar to blog, but for project cards.
* Each entry = Markdown file in `src/projects/`.
* You can add images, categories, etc.

---

#### 3. Settings

```yaml
- label: "Settings"
  name: "settings"
  files:
    - label: "Navigation"
      file: "src/_data/navigation.yaml"
      fields: [...]
    - label: "Quick Links"
      file: "src/_data/quicklinks.yaml"
      fields: [...]
    - label: "Meta Settings"
      file: "src/_data/settings.yaml"
      fields: [...]
```

* These aren’t posts — they edit YAML data files.
* For example:

  * `navigation.yaml` → controls nav menu links.
  * `quicklinks.yaml` → homepage quick links.
  * `settings.yaml` → site-wide info like author name, site URL.

---

✅ So basically:

* **Blog & Projects** → editable Markdown content.
* **Settings** → editable YAML config files.
* **Netlify CMS** → pushes all changes back into GitHub (via Git Gateway).

---