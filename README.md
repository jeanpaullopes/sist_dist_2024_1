Repositório central de Sistemas Distribuídos

no terminal do zero:

    npm install express --save

    npm install express-generator -g

    express --no-view --git myAPI


change directory:  

    cd myAPI

    install dependencies: $ npm install


run the app: 

    DEBUG=myapi:* npm start


install Nodemon

    npm i -D -g nodemon


alterar o package.json 

    "scripts": { "start": "node ./bin/www", "dev": "nodemon ./bin/www" },



    DEBUG=myapi:* npm run dev



Para quem clonar o repo, entrar na pasta myAPI e rodar

    npm install


Para usar WebSocket

    npm install websocket-express ws @types/ws @types/express


Criando uma imagem Docker

1. crie um arquivo com o nome Dockerfile na pasta raiz do projeto
2. crie o arquivo .dockerignore
3. crie o arquivo docker-compose.yml


    