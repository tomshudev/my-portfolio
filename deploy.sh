sudo git pull origin master
npm install
npm run-script build:css
sudo cp index.html /var/www/html/
sudo cp -R css/ /var/www/html/
sudo cp -R js/ /var/www/html/
sudo cp -R img/ /var/www/html/
