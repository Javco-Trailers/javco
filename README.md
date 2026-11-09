<!-- PROJECT LOGO -->
<br />
<div align="center">
    <h3 align="center">Javco</h3>

  <p align="center">
    Website for Javco semi trailers optimized for SEO and customer interaction
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

So often we spend too much time and effort looking for the best solution for trucking. Javco wants a simplified website that helps
its customers seamlessly find the best solution for them. In the sea of searches Javco wants to rise to the top and provide
its customers great value.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The site lives in `frontend/` and follows the findadoc monorepo conventions (pnpm, ESLint flat config with
@stylistic, Tailwind v4 tokens, Vitest, Renovate, semantic PR titles).

```bash
cd frontend
corepack enable
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint       # ESLint (formatting is enforced by @stylistic, there is no Prettier)
pnpm typecheck
pnpm test       # Vitest: SEO/sitemap/robots sync and quote-email builder
pnpm build
```

- Node 24 (`frontend/.nvmrc`), pnpm 10 (`packageManager` in `frontend/package.json`).
- Business details (phone, address, nav, embeds) live in `frontend/utils/site.ts`; SEO helpers in `frontend/utils/seo.ts`.
- Every page is statically prerendered. Security headers and the CSP are set in `frontend/next.config.ts`.
- Inventory is the Cherry Trader embed. Cherry Trader only allows `https://www.javco.co` to frame it, so it is blank on
  localhost and Vercel preview URLs.
- The old CMS backend (admin login, inventory CRUD, editable text) has been retired. `/admin/*` redirects home.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Quick and eay pages for customer readability
- [x] Improve lighthouse accessibility scores
- [x] Sitemap, robots and structured data
- [x] Security headers and CSP


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Techincal Lead Email - williamedwardbrammer@gmail.com

Company Email - info@javco.co

Website URL: [www.javco.co](www.javco.co)

Project Link: [https://github.com/Javco-Trailers/javco](https://github.com/Javco-Trailers/javco)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
