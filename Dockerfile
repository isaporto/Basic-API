FROM node:22.2.0-slim

RUN apt update && apt install -y --no-install-recommends \
  git \
  ca-certificates \
  default-jre \
  zsh \
  curl \
  wget \
  && apt clean

USER node

WORKDIR /home/node/app

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.2.0/zsh-in-docker.sh)" -- \
  -t https://github.com/romkatv/powerlevel10k \
  -p git \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -a 'export TERM=xterm-256color'

RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc &&  \
  echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]