FROM node:19

RUN npm i -g pnpm@7.30.0

WORKDIR /app

COPY pnpm-lock.yaml ./

COPY . .

RUN pnpm install 

RUN pnpm run build

WORKDIR /app/build

RUN pnpm install --prod

EXPOSE 8080
CMD ["node", "-r", "dotenv/config", "index.js"]
