# Proyecto Final – Dental Time
Proyecto CRUD Full Stack desarrollado con React + NodeJS (Express)

## Descripción
Aplicación web para la gestión de pacientes de la clínica Dental Time.
Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar)
sobre pacientes mediante una API Rest desarrollada en NodeJS y un
frontend en React.

## Capturas

![screenshot1](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc2.png)

![screenshot2](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc1.png)

![screenshot3](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc3.png)

## Tecnologías utilizadas

### Backend
- NodeJS
- Express
- Nodemon
- JavaScript

### Frontend
- React
- React Router
- Axios
- Tailwind CSS
## Puesta en marcha

### Backend
```shell
cd backend
npm install
npm run dev
```

### Frontend
```shell
cd frontend
npm install
npm run dev
```

## Funcionalidades

Listado de pacientes

Creación de pacientes

Edición de pacientes

Eliminación de pacientes

Navegación mediante React Router

Comunicación con API Rest mediante Axios

## Testing de la API

Las peticiones CRUD han sido probadas mediante Postman:

GET /pacientes

GET /pacientes/:dni

POST /pacientes

PUT /pacientes/:dni

DELETE /pacientes/:dni
