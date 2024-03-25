Repositório central de Sistemas Distribuídos

no terminal

npm install express --save

npm install express-generator -g

express --no-view --git myAPI

change directory: $ cd myAPI

install dependencies: $ npm install

run the app: $ DEBUG=myapi:* npm start

install Nodemon

$ npm i -D -g nodemon

package.json "scripts": { "start": "node ./bin/www", "dev": "nodemon ./bin/www" },

$ DEBUG=myapi:* npm run dev