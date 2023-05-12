FROM node:19

RUN npm i -g pnpm@7.30.0

WORKDIR /app

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

# RUN pnpm fetch --prod

COPY . .
RUN pnpm install 

RUN pnpm run build

EXPOSE 8080
CMD ["node", "-r", "dotenv/config", "build"]