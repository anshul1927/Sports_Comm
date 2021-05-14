FROM node:14.15-alpine
WORKDIR /backend_app
COPY package.json /backend_app
RUN npm install
COPY . /backend_app
CMD ["npm", "run", "dev"]