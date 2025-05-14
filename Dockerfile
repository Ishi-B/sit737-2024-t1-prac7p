FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

FROM node:20
WORKDIR /app
COPY --from=build /app .
RUN groupadd -r app && useradd -r -g app app
USER app
EXPOSE 8080
CMD ["npm","start"]
