# Access Manager v1

[![Figma release]](https://www.figma.com/file/gj6qeyq4ANtGW7VGwHnuy9/Untitled?type=design&node-id=0%3A1&mode=design&t=wdPTlQznZwaHy9iV-1)

[![Postman link]](https://galactic-shadow-1108.postman.co/workspace/Team-Workspace~f0138757-a189-4dfd-8757-00bcdac19850/collection/9156335-ff95aac9-09b7-4c27-94a6-a0c43eda0640?action=share&creator=9156335)


The following project consists of the configuration of a mono repo, which seeks to share configurations, types, libraries in common between the backend and frontend. also use the static loads of nestjs to process the front statics and obtain a SSR.

# Commands

* `npm run dev`

with the command presented above you will be able to run in parallel both codes from the development environment. however this way you will be running the backend from port 3000 and the frontend from port 5173.

* `npm run build`

the build command allows you to generate a dist package where you will find the compiled product for production, in this way once you corral backend with the `npm start` command you can automatically from port 3000 get the SSR ui.

# Where to get start the project

Quick Start
-----------

unfortunately docker compose is having a problem with the alpine version and turbo is not running satisfactorily, so we will have to create this section manually:
1. create a database with the name `test`.
2. use the postman collection attached above and run the services in the following order.
    * create role type
    * create role
    * create user

# Backend ENV
APP_ENV=development
APP_NAME="Test"
APP_URL=http://localhost:3000
APP_PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root1202
DATABASE_NAME=test

# Frontend ENV

VITE_API_BASE=/api