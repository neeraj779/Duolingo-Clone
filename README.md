<p align="center">
  <img src="./src/assets/svg/welcome.svg" width="20%" alt="DUOLINGO-CLONE-logo">
</p>
<p align="center">
    <h1 align="center">DUOLINGO-CLONE</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/neeraj779/Duolingo-Clone?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/neeraj779/Duolingo-Clone?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/neeraj779/Duolingo-Clone?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📂 Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [📦 Installation](#-installation)
  - [🤖 Usage](#-usage)

## 📂 Repository Structure

```sh
└── Duolingo-Clone/
    ├── README.md
    ├── bun.lockb
    ├── eslint.config.js
    ├── index.html
    ├── main.js
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   ├── fonts
    │   │   │   ├── din-round-bold.woff2
    │   │   │   └── din-round-light.woff2
    │   │   ├── images
    │   │   │   └── header.png
    │   │   └── svg
    │   │       ├── clock.svg
    │   │       ├── duolingo.svg
    │   │       ├── error.svg
    │   │       ├── flags.svg
    │   │       ├── google-logo.svg
    │   │       ├── note.svg
    │   │       └── welcome.svg
    │   ├── common
    │   │   └── types
    │   │       ├── AuthContext.types.ts
    │   │       ├── Card.types.ts
    │   │       ├── ErrorBoundary.types.ts
    │   │       ├── Flag.types.ts
    │   │       ├── Footer.types.ts
    │   │       ├── Language.types.ts
    │   │       ├── LeftBar.types.ts
    │   │       ├── Login.types.ts
    │   │       ├── Section.types.ts
    │   │       ├── TopBar.types.ts
    │   │       └── welcome.types.ts
    │   ├── components
    │   │   ├── Card.tsx
    │   │   ├── ErrorBoundary.tsx
    │   │   ├── ErrorMessage.tsx
    │   │   ├── Flag.tsx
    │   │   ├── Footer.tsx
    │   │   ├── LanguageCarousel.tsx
    │   │   ├── LanguageDropDown.tsx
    │   │   ├── LeftBar.tsx
    │   │   ├── Loader
    │   │   │   ├── Loader.tsx
    │   │   │   └── loader.css
    │   │   ├── NavBar.tsx
    │   │   ├── RightBar.tsx
    │   │   ├── Section.tsx
    │   │   └── TopBar.tsx
    │   ├── contexts
    │   │   └── AuthContext.tsx
    │   ├── hooks
    │   │   ├── useAuth.ts
    │   │   ├── useFetchQuestions.ts
    │   │   ├── useLogin.ts
    │   │   └── useRegister.ts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── mocks
    │   │   └── db.json
    │   ├── pages
    │   │   ├── Character.tsx
    │   │   ├── Landing.tsx
    │   │   ├── LangRegister.tsx
    │   │   ├── Leaderboards.tsx
    │   │   ├── Learn
    │   │   │   ├── Learn.tsx
    │   │   │   └── learn.css
    │   │   ├── Login.tsx
    │   │   ├── Quests.tsx
    │   │   ├── Register.tsx
    │   │   ├── Shop.tsx
    │   │   └── Welcome.tsx
    │   ├── utils
    │   │   ├── englishCharData.ts
    │   │   └── languages.ts
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🚀 Getting Started

### 📦 Installation

Build the project from source:

1. Clone the Duolingo-Clone repository:

```sh
❯ git clone https://github.com/neeraj779/Duolingo-Clone
```

2. Navigate to the project directory:

```sh
❯ cd Duolingo-Clone
```

3. Install the required dependencies:

```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ npm run dev
```
