# Usa la imagen oficial de Node.js
FROM node:18

# Crea el directorio de trabajo en el contenedor (en este caso, /app)
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instala las dependencias en /app 
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Exponer
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]