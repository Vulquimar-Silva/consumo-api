# Criar API e Consumir no Front e no Back

## API

Criar uma API:
- [x] Iniciar o projeto => `npm init -y`
- [x] Instalar as dependências => `npm install express nodemon cors axios`
- [x] Criar uma rota para acessar a API
- [x] Servir a API
- [x] Habilitar o CORS
- [x] Habilitar o nodemon para reiniciar o servidor automaticamente

## Front-end

Consumir API:
- [x] Utilizar o React CDN
- [x] Consumir nossa API com o axios
- [x] Usar try/catch
- [x] mostrar resposta na tela

## backend

Consumir API:
- [x] Usar axios e deixe um exemplo feito em fetch também
- [x] Usar try/catch
- [x] Utilizar a API jsonplaceholder `https://jsonplaceholder.typicode.com/posts`

-- JSONPlaceholder comes with a set of 6 common resources:

    /posts	100 posts
    /comments	500 comments
    /albums	100 albums
    /photos	5000 photos
    /todos	200 todos
    /users	10 users

-- All HTTP methods are supported. You can use http or https for your requests.

    GET	/posts
    GET	/posts/1
    GET	/posts/1/comments
    GET	/comments?postId=1
    POST	/posts
    PUT	/posts/1
    PATCH	/posts/1
    DELETE	/posts/1