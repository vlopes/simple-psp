# pagarme_test

Projeto utilizado como avaliação


# Inicialização

Para iniciar o projeto é necessario que o Docker e o Docker Compose ja estejam instalados na maquina.
Links para a instalação:
- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)

Para iniciar o serviço execute:

`docker-compose build`

`docker-compose up`

Quando os dois containers estiverem rodando acesse o container do node utilizando o comando:

`docker exec -ti node.app bash`

Dentro do container execute o comando para que as migrações sejam efetuadas:

`npm run migrate`
