# Profile microservice

## Descripción

Este microservicio expone un endpoint GraphQL `/graphql` para consultar el perfil del usuario autenticado, consumiendo el endpoint REST `GET /auth/profile` del proyecto integrador.

## Tecnologías

- Bun como package manager y runtime.
- Express + express-graphql.
- TypeScript.

## Configuración

1. Clonar el repositorio.
2. Configurar variables en `.env`:
