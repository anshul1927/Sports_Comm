# FROM node:14.15-alpine
# WORKDIR /frontend_app
# COPY package.json /frontend_app
# RUN npm install
# COPY . /frontend_app
# CMD ["npm", "start"]

FROM nginx:1.17.1-alpine
COPY ./build /usr/share/nginx/html