# AJC Planning Design Ltd: website

A fast, static website (plain HTML, CSS and a little JavaScript). There is nothing to install or build, and it can be hosted on Vercel, Netlify, Cloudflare Pages or GitHub Pages.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Adrian |
| `services.html` | Services |
| `portfolio.html` | Portfolio, filterable by Residential / Commercial & Leisure / Energy |
| `contact.html` | Contact details and enquiry form |

## Publishing it (one-off)
1. **GitHub:** sign in, click **+ → New repository**, name it `ajc-planning-design` and click **Create**.
   On the next screen click **uploading an existing file**, drag in *everything inside this folder* (not the folder itself), then click **Commit changes**.
2. **Vercel:** sign in, click **Add New… → Project**, choose **Continue with GitHub** and allow access to the repository, pick `ajc-planning-design` and click **Deploy**. Leave every setting at its default.
3. A few seconds later the site is live at `https://ajc-planning-design.vercel.app` (or similar).
4. **Your own domain:** in Vercel open the project, go to **Settings → Domains**, add `ajcplanningdesign.com` and follow the DNS instructions it shows for your domain provider.

From then on, any change committed to the GitHub repository goes live automatically.

## Making edits
- **Text:** open the `.html` file on GitHub, click the pencil icon, edit and commit.
- **Images:** they live in `images/`. To swap one, upload a new file with the **same name**. The current images were cut from screenshots, so higher-resolution originals will look sharper.
- **Colours and fonts:** these are set at the top of `css/styles.css`.

## Contact form
For now the form opens the visitor's email app with the message filled in. To have messages sent straight to your inbox, create a free form endpoint (for example Formspree or Web3Forms) and wire it into `js/main.js`.
