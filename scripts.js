git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/REPO.git
git push -u origin main
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "npx gh-pages -d ."
  }
}
npm install --save-dev gh-pages
npm run deploy
npm install -g netlify-cli
netlify login
netlify init   # sigue las instrucciones para conectar o crear sitio
netlify deploy --prod --dir=.
npm i -g vercel
vercel login
vercel --prod
# sigue prompts; por defecto sube la carpeta actual como sitio estático
npm install -g serve
serve .
#!/usr/bin/env bash
HOST="ftp.tudominio.com"
USER="tuusuario"
PASS="tucontrasena"
REMOTE_DIR="/public_html/tu-carpeta"
lftp -e "mirror -R . ${REMOTE_DIR} --parallel=2; bye" -u "${USER},${PASS}" sftp://${HOST}
#!/usr/bin/env bash
REMOTE_USER="usuario"
REMOTE_HOST="mi-servidor.com"
REMOTE_PATH="/var/www/tu-sitio"
LOCAL_DIR="."
rsync -avz --delete ${LOCAL_DIR}/ ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}
