# CCP Electron Nuxt Tailwind Boilerplate

My boilerplate setup to get an Electron NUXT app going pronto!

---

# TLDR;

Just get it done (replace projectname with your project's name, duh):

```bash
vue init michalzaq12/electron-nuxt projectname
cd projectname
yarn
yarn add --dev @nuxtjs/tailwindcss postcss@latest

# Try to copy root files if executing into a folder you'll move when this is done
mkdir ./src/renderer/assets/css
yes | cp -rf ../tailwind.css ./src/renderer/assets/css/
yes | cp -rf ../nuxt.config.js ./src/renderer/
yes | cp -rf ../tailwind.config.js ./src/renderer/
yes | cp -rf ../.prettierrc ./
```

**THEN**

1. Copy **`.tailwind.css`** file into `./src/renderer/assets/css/`
1. Copy **`nuxt.config.js`** file into `./src/`
1. Copy **`.prettierrc`** file from boilerplate into root directory

---

# THE SLOWER DETAILED WAY

Here's how I arrived at the above quick & dirty:

### 1: ELECTRON-NUXT:

https://github.com/michalzaq12/electron-nuxt  
 Installs the bulk of dependencies needed to run and deploy Electron apps with NUXT (VueJS) which is bad-ass, off-to-the-races. You can stop here, but why?

```bash
# Install vue-cli and scaffold boilerplate if not already done
npm install -g vue-cli

# Initialize a new electron-nuxt project
vue init michalzaq12/electron-nuxt <project-name>

# Install dependencies and run your app
cd <project-name>
yarn
yarn dev
```

### 2: TAILWIND NUXT:

Make it easy to style-up! TailwindCSS is the SHIT!

`yarn add --dev @nuxtjs/tailwindcss postcss@latest`

[@Nuxt/Tailwind Setup](https://tailwindcss.nuxtjs.org/setup) and [Tailwind Docs](https://tailwindcss.com/docs/guides/nuxtjs#include-tailwind-in-your-css) and [Tailwind CSS Intelisense Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and `jit: true` for [@tailwindcss/jit](https://github.com/tailwindlabs/tailwindcss-jit)  
Found I had to restart VSCode for Intelisense to work properly.

#### Default tailwind.js:

**Remember!** `tailwind.js` goes into the renderer subfolder when using electron-nuxt because of its unique folder structure implementation.

```javascript
const colors = require('tailwindcss/colors')

module.exports = {
  jit: false,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

### Default tailwind.css

Place default tailwind.css file inside `~/assets/css/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  /* This is hidious. */
  @apply border-4 border-red-600;
}
```

### 3: PRETTIER CONFIG:

Make clean code really straightforward. Make sure to also configure VSCode to autoformat with the prettier-vscode [VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

```json
{
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 160
}
```

**VSCODE USER SETTINGS**

```json
{
  "editor.formatOnSave": false
}
```

**ESLINT PRETTIER**  
https://github.com/prettier/eslint-config-prettier  
 If we're gonna use ESLINT ??

## EXTRA FANCY

- **SOUND**: https://howlerjs.com/
- **ICONS**: https://github.com/chungtran4078/nuxtjs-mdi-font#readme  
  **REFERENCE**: https://materialdesignicons.com/ <-- Install the latest version of this which is what NUXT-MDI-FONT uses
