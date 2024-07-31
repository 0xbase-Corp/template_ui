FROM node:21-alpine as builder

WORKDIR /app
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:21-alpine as runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NEXT_PUBLIC_API_URL="http://172.31.35.245:5050"

EXPOSE 3000

CMD ["node", "server.js"]
