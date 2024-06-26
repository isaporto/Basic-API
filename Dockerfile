FROM node:22.2.0-slim

RUN apt update && apt install -y --no-install-recommends \
  git \
  ca-certificates

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]