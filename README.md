# Red Social Backend

![imagen red social](./img/red%20social.jpg)

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

# Objetivo

El departamento de producto nos ha encomendado desarrollar el backend correspondiente a una red social utilizando MongoDB.

Para ello tendremos que crear una base de datos y conectar nuestra API a ella.

La API tendrá que tener los sigueintes endpoints minimos:

AUTH:

- Registro de usuario:
  - POST: /api/auth/register
- Inicio sesión:
  - POST: /api/auth/login

USERS:

- Ver todos los usuarios:
  - GET: /api/users (super_admin)
- Ver perfil de usuario:
  - GET: /api/users/profile
- Modificar datos de usuario:
  - PUT: /api/users/profile

POSTS:

- Crear post:
  - POST: /api/posts
- Eliminar post por id
  - DELETE: /api/posts/{id}
- Actualizar post por id:
  - PUT: /api/post
- Recuperar mis propios posts:
  - GET: /api/posts/own
- Recuperar todos los posts:
  - GET: /api/posts
- Recuperar post por id:
  - GET: /api/posts/{id}
- Recuperar posts de un usuario:
  - GET: /api/users/posts/{user-id}

LIKES::

- Dar y quitar likes:
  - PUT: /api/posts/like/{id}

## Stack

Tecnologías utilizadas:

![JAVASCRIPT](./img/icons8-javascript-48.png) ![MONGODB](./img/icons8-mongodb-48.png) ![VSC](./img/icons8-visual-studio-code-2019-48.png) ![DOCKER](./img/icons8-estibador-48.png)

## Instalación en local

1. Clonar el repositorio
   `git clone https://github.com/FernandoCatalaMunyoz/tatoo_backend.git`
2. `npm install`
3. Conectar repositorio con la base de datos usando el archivo `.env.sample` como plantilla

   ```
    PORT=

    MONGO_URI=

    DB_MONGO_USER=
    DB_MONGO_PASSWORD=
    DB_MONGO_HOS=
    DB_MONGO_PORT=
    DB_MONGO_DATABASE=

    JWT_SECRET=
   ```

4. Añadimos los scripts al package.json

- `"seeder": "ts-node ./src/database/seeders/seeders.js"`

- `"dev": "nodemon ./src/server.js"`

- `"start": "node ./src/server.js"`

5. Ejecutamos los seeders:
   `npm run seeder`
6. Arrancamos el servidor:
   `npm run dev`

## Usuarios y contraseñas:

Email y password de lso 3 usuarios básicos:

    - User (Role user):
        email: user@user.com
        password: 123456

    - Admin (Role admin):
        email: admin@admin.com
        password: 123456

    - Super_admin (Role super_admin):
        email: super_admin@super_admin.com
        password: 123456

## ENDPOINTS

### Register:

    url: POST https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/auth/register
    Body:
    {
      "name": "nombre del usuario,
      "email" : "email del usuario",
      "password" : "Contraseña"
    }

### Login:

     url: POST https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/auth/login
     Body:
    {
        "email" : "email del usuario",
        "password" : "Contraseña"
    }

### Ver todos los usuarios(super_admin):

     url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/users
     Auth/Bearer(super_admin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNTE4MDMzYzhhYTA5NTI2YzciLCJyb2xlTmFtZSI6InN1cGVyX2FkbWluIiwiaWF0IjoxNzEwNzUzOTgyLCJleHAiOjE3MTE0NzM5ODJ9.nwPQcocOX6fzAqr0BORpG_PSeN9WrfLKXA4v2IpLIVc"

### Ver perfil de usuario:

     url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/users/profile
     Auth/Bearer(user):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"

### Modificar perfil usuario:

     url: PUT https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/users/profile
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"
     Body:
    {
        "dato a cambiar"(name,email): "dato a introducir"
    }

### Crear post:

     url: POST https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/
     Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"

### Borrar post por id:

    url: DELETE https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/:id
    Auth:
     - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"

### Actualiar post por id:

    url: PUT https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/:id
    Auth:
     - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"
     Body:
    {
        "description": "Nueva descripcion"
    }

### Recuperar mis propios posts:

    url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/own
    Auth:(del usuario que quiere recuperar sus posts)
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"

### Recuperar todos los posts:

    url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post
    Auth:
       - Bearer:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWYzNDdhNDE4MDMzYzhhYTA5NTI2YzIiLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MTA3NTQwMjAsImV4cCI6MTcxMTQ3NDAyMH0.0CIRyppTCYLnHB85hgHu_8g-UuWlHS28sNmZKjyBXTE"

### Recuperar post por id

    url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/:id
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzgzOTgsImV4cCI6MTcxMTQ1MDM5OH0.sA9fkoNp_AdCM5npU7Sv4o6V-DW9Jso9CfennkPFCQs"

### Recuperar posts por id de usuario:

    url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/:{id-usuario}
    Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzgzOTgsImV4cCI6MTcxMTQ1MDM5OH0.sA9fkoNp_AdCM5npU7Sv4o6V-DW9Jso9CfennkPFCQs"

### Dar y quitar like

     url: GET https://red-social-backend-dev-mecs.1.ie-1.fl0.io/api/post/like/:id
    Auth:
      - Bearer: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzLCJyb2xlTmFtZSI6InVzZXIiLCJpYXQiOjE3MDk1NzgzOTgsImV4cCI6MTcxMTQ1MDM5OH0.sA9fkoNp_AdCM5npU7Sv4o6V-DW9Jso9CfennkPFCQs"
