# Profile microservice

## Descripción

Este microservicio expone un endpoint GraphQL `/graphql` para consultar el perfil del usuario autenticado, consumiendo el endpoint REST `GET /auth/profile` del proyecto integrador.

## Tecnologías y Requisitos

### Instalación de Bun

Para instalar Bun en tu sistema, ejecuta:

#### macOS y Linux
```bash
curl -fsSL https://bun.sh/install | bash
```

#### Windows
```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```

Para verificar la instalación:
```bash
bun --version
```

### Stack Tecnológico

- Express + express-graphql para el servidor GraphQL
- TypeScript para tipado estático

## 1. Análisis del Proyecto Integrador

### Identificación del Endpoint

**Endpoints consumidos**:

- `GET /auth/profile`:  
  Obtiene detalles completos de un usuario autenticado.

### Justificación de la Elección del Endpoint

Se selecciona `/auth/profile` porque:

- Recupera **solo los datos necesarios** para la vista de perfil.
- Aprovecha la autenticación previa del usuario.
- Permite filtrar campos con GraphQL, reduciendo el consumo de recursos.

### Descripción Técnica del Endpoint

| Característica       | Descripción                                      |
| -------------------- | ------------------------------------------------ |
| Método               | GET                                              |
| URL                  | `/auth/profile`                                  |
| Formato de datos     | No requiere body                                 |
| Formato de respuesta | JSON con campos del usuario autenticado          |
| Autenticación        | JWT en headers (`Authorization: Bearer <token>`) |

---

## 2. Diseño del Microservicio

### Objetivo

Construir un microservicio que:

- Exponga un endpoint GraphQL para obtener perfiles de usuario.
- Encapsule la autenticación JWT.
- Retorne únicamente datos relevantes mediante consultas flexibles.

### Tecnología de Comunicación

- **GraphQL sobre ExpressJS** para:
  - Solicitar campos específicos (evita _over-fetching_).
  - Reducir el ancho de banda vs REST.
  - Facilitar integración con múltiples clientes frontend.
  - Mantener independencia del backend principal.

### Diagrama de Flujo de Integración

## 3. Implementacion tecnica

Estructura del Proyecto

```bash

testimonios-microservice/
├── src/
│   ├── resolvers.ts    # Lógica de resolución de queries
│   ├── schema.ts       # Definición de tipos GraphQL
│   └── userProfile.ts  # Cliente para consumir /auth/profile
├── .env                # Variables de entorno
├── index.ts            # Punto de entrada
├── tsconfig.json       # Configuración TypeScript
├── package.json        # Dependencias y scripts
└── README.md           # Documentación
```

## 4. Pruebas y Documentación

### Pruebas con Postman

**Query de ejemplo**:

```graphql
query {
  profile {
    id
    email
    nombre
    biografia
    role
    two_factor_enabled
  }
}
```

### Documentación

#### 1. Instalación

```bash
bun install
```

#### 2. Variables de entorno (archivo .env)

```env
INTEGRATOR_BASE_URL=http://localhost:4000
PORT=4100
```

#### 3. Ejecución

```bash
bun dev
```
