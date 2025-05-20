#  React + Vite

✅ Sätta upp React + Vite i ett befintligt Git-repo

1. Installera Vite med React-mall i nuvarande katalog

```bash
npm create vite@latest . -- --template react

```

- . betyder att installationen sker i den nuvarande mappen.

2. Om detta meddelande visas:

```bash
Current directory is not empty. Please choose how to proceed:
○ Remove existing files and continue
○ Ignore files and continue
○ Cancel operation

```

- ➡️ Välj “Ignore files and continue” om det bara finns
 t.ex. README.md i mappen.

 3. Installera beroenden och starta utvecklingsservern

 ```bash
npm install         # Installerar alla nödvändiga paket
npm run dev         # Startar dev-servern på http://localhost:5173

 ```

 4. Lägg till ändringar i Git och gör en commit

```bash
git add .
git commit -m "commit"
git push origin main

```