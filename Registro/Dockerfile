# Usa una imagen base ligera de Node.js o cualquier imagen que prefieras
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Instala dependencias globales si es necesario (en este caso, no hay ninguna)
# RUN npm install -g <paquete>

# Abre un puerto (aunque no tenga ningún servicio corriendo todavía)
EXPOSE 3000

# Mantén el contenedor en ejecución sin hacer nada específico
CMD ["tail", "-f", "/dev/null"]
