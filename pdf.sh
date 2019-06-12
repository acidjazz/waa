#! /bin/sh
#
# pdf.sh
# Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
#
# Distributed under terms of the APACHE license.
#

yum -y update
yum -y install git pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc
su ec2-user -c "
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_comple
source ~/.bashrc
nvm install v10.16.0
curl -o- -L https://yarnpkg.com/install.sh | bash
source ~/.bashrc
ssh-keyscan github.com >> ~/.ssh/known_hosts
git clone https://github.com/alvarcarto/url-to-pdf-api.git
cd ~/ujrl-to-pdf-api
yarn
cp .env.sample .env
yarn global add pm2
pm2 start src/index.js -- start --name \"web\"



"
