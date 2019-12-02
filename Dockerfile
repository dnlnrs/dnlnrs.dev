FROM node:10
WORKDIR /app
COPY . .

RUN yarn install --production --no-lockfile

EXPOSE 80

CMD ["./bin/start.sh"]