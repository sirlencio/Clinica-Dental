# Proyecto Final – Dental Time

Sistema CRUD Full Stack para la gestión administrativa de pacientes en clínicas dentales, desarrollado con una arquitectura desacoplada utilizando React para el cliente y NodeJS para el servidor.

## Descripción
Esta aplicación permite centralizar la gestión de datos de pacientes, facilitando las tareas de registro, consulta, edición y eliminación de perfiles. Se ha priorizado la integridad de los datos mediante validaciones en el cliente y una interfaz de usuario profesional basada en componentes reutilizables.

## Capturas de Pantalla

![Página Principal](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc1.png)
*Vista principal.*

![Listado de Pacientes](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc2.png)
*Vista de tabla de gestión de pacientes.*

![Formulario de Pacientes](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc3.png)
*Formulario de creación con validación de campos.*

![Validación y Notificaciones](https://github.com/sirlencio/Clinica-Dental/blob/main/screenshots/sc4.png)
*Vista principal en modo oscuro.*

## Tecnologías Utilizadas

### Backend
- **NodeJS**: Entorno de ejecución para el servidor.
- **Express**: Framework para la creación de la API Rest.
- **Nodemon**: Herramienta de monitorización para el desarrollo.
- **CORS**: Middleware para permitir peticiones entre diferentes dominios.

### Frontend
- **React**: Biblioteca para la construcción de la interfaz.
- **Shadcn/UI**: Sistema de diseño y componentes de interfaz.
- **Zod**: Esquemas de validación de datos para el cliente.
- **Sonner**: Sistema de notificaciones reactivas (Toasts).
- **Tailwind CSS**: Framework de estilos para el diseño responsive.
- **React Router**: Gestión de la navegación SPA.
- **Axios**: Cliente HTTP para la comunicación con la API.
- **Lucide React**: Biblioteca de iconos vectoriales.

## Funcionalidades

- **Listado dinámico**: Visualización de pacientes registrados con interfaz optimizada.
- **Creación de pacientes**: Formulario de alta con restricción de tipos de datos.
- **Validación robusta**: Control de formato para DNI, Código Postal y Teléfono mediante esquemas de Zod.
- **Edición de datos**: Actualización selectiva de información de pacientes existentes.
- **Eliminación**: Borrado lógico de registros desde la base de datos.
- **Feedback de usuario**: Notificaciones visuales de éxito o error tras cada operación.

## Puesta en marcha

### Instalación del Backend
```shell
cd backend
npm install
npm run dev
```

### Instalación del Frontend
```shell
cd frontend
npm install
npm run dev
```

## Testing de la API

El correcto funcionamiento de los endpoints ha sido verificado mediante herramientas de testing de APIs (Postman/Insomnia):

- **GET** /pacientes: Obtención de la colección completa.

- **GET** /pacientes/:dni: Consulta de un registro específico.

- **POST** /pacientes: Registro de nueva entidad de paciente.

- **PUT** /pacientes/:dni: Actualización total o parcial del registro.

- **DELETE** /pacientes/:dni: Eliminación del registro por identificador.