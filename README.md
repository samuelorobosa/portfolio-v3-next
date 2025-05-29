# Samuel's Portfolio Site

[https://samuelorobosa.vercel.app/](https://samuelorobosa.vercel.app/)

A modern, responsive portfolio built with Next.js, React, Tailwind CSS, and SCSS. Showcases projects, articles, and contact information with smooth animations and a clean UI.

---

## 🚀 Features

- **Portfolio**: Highlight projects with links and details
- **Articles**: Fetches and displays articles from [dev.to](https://dev.to/)
- **Contact**: Easy way to reach out via email and social links
- **Responsive Design**: Looks great on all devices
- **Animated UI**: Powered by Framer Motion
- **Custom Theming**: Easily update colors and styles

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) 12
- [React](https://reactjs.org/) 18
- [Tailwind CSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [@tanem/react-nprogress](https://github.com/tanem/react-nprogress) (route loading bar)

## 📦 Getting Started

1. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```
2. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. **Build for production**
   ```bash
   yarn build && yarn start
   # or
   npm run build && npm start
   ```

4. **Lint the code**
   ```bash
   yarn lint
   # or
   npm run lint
   ```

## 📁 Project Structure

- `pages/` - Next.js pages (routes: `/`, `/projects`, `/articles`, `/contact`)
- `components/` - Reusable UI components (Navbar, Layout, Loader, etc.)
- `data/` - Static data for home, projects, contact, etc.
- `context/` - React Context for navigation and articles
- `styles/` - Global and module-based styles (Tailwind, SCSS)
- `public/` - Static assets (favicons, images, fonts)

## 🎨 Color Reference

| Color             | Hex                                                                 |
|-------------------|---------------------------------------------------------------------|
| Blue-Magenta      | ![#10101A;](https://dummyimage.com/10x10/10101a/000000.png) `#10101A` |
| Titan White       | ![#EAE8FF](https://dummyimage.com/10x10/EAE8FF/000000.png) `#EAE8FF`  |
| Blue Zodiac       | ![#424861](https://dummyimage.com/10x10/424861/000000.png) `#424861`  |
| Light Blue Zodiac | ![#6b7292](https://dummyimage.com/10x10/6b7292/000000.png) `#6b7292`  |
| Royal Blue        | ![#2667FF](https://dummyimage.com/10x10/2667FF/000000.png) `#2667FF`  |

## ✨ Customization

- Update colors in `styles/modules/colors.module.css` and Tailwind config
- Add or edit projects in `data/Projects/projectsData.js`
- Update articles source in `pages/articles/index.jsx`
- Change social/contact info in `data/Contact/socialsData.js`

## 📬 Contact

- [Portfolio](https://samuelorobosa.vercel.app/)
- [Email](mailto:orobosaamagbakhen@email.com)
- [Twitter](https://twitter.com/samuelorobosa)
- [LinkedIn](https://www.linkedin.com/in/samuelorobosa/)

---

© Samuel Amagbakhen. Built with ❤️ using Next.js.

