# CV Personal - Practica Final

Aplicacion web de CV personal desplegada con Docker Compose, compuesta por React, Node.js y MySQL.

## Estudiante

**Alejandro Iglesias Raldes** — La Paz

## Arquitectura

| Servicio  | Tecnologia      | Puerto |
|-----------|-----------------|--------|
| frontend  | React + Nginx   | 3000   |
| backend   | Node.js         | 4000   |
| database  | MySQL           | 3306   |

## Imagenes Docker Hub

- `air5795/iglesias-frontend:v1`
- `air5795/iglesias-backend:v1`

## Requisitos

- Docker Desktop instalado y corriendo

## Ejecucion

```bash
git clone https://github.com/air5795/proyecto-final-diplomado.git
cd proyecto-final-diplomado
docker compose up -d
```

Abrir el navegador en: [http://localhost:3000](http://localhost:3000)

## Detener la aplicacion

```bash
docker compose down
```

## Estructura del Proyecto

```
proyecto-final-diplomado/
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── public/
│   └── src/
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── database/
│   └── init.sql
└── docker-compose.yml
```

## Endpoint disponible

```
GET http://localhost:4000/cv
```

Retorna los datos del CV en formato JSON desde MySQL.
