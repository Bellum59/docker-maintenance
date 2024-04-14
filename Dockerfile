FROM node:18.20
RUN apt update
RUN apt upgrade -y
RUN apt install -y dbus
RUN apt install -y libnss3-dev
RUN apt install -y libdbus-1-3
RUN apt install -y libatk1.0-0
WORKDIR /var/www/projetMobile/w
COPY package*.json ./
RUN npm install
COPY . .
WORKDIR nodes_modules/electron/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
