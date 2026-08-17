# E-Commerce - Nuxt 4

Aplicación de e-commerce construida con Nuxt 4, Vue 3 y Tailwind CSS, con ORM Prisma y base de datos MySQL (MariaDB).

## Stack tecnológico

| Capa             | Tecnología             | Versión |
| ---------------- | ---------------------- | ------- |
| Framework        | Nuxt                   | 4.5.2   |
| UI               | Vue                    | 3.5.41  |
| Estilos          | Tailwind CSS           | 6.14.0  |
| State Management | Pinia                  | 4.0.3   |
| ORM              | Prisma                 | 7.9.1   |
| Base de datos    | MySQL (MariaDB)        | 3.5.3   |
| Validación       | Vuelidate              | 2.0.3   |
| Icons            | @nuxt/icon             | 2.5.0   |
| Notificaciones   | vue-toast-notification | 3.1.3   |
| Paquete manager  | pnpm                   | -       |

## Estructura del proyecto

```
e-commerce/
├── app/
├── components/
│   └── atoms/              # Componentes atómicos reutilizables
│       ├── BaseInput.vue
│       ├── BaseBtn.vue
│       └── FormError.vue
├── layouts/
│   ├── .default.vue        # Layout principal
│   ├── auth.vue            # Layout para autenticación
│   └── admin.vue           # Layout para panel admin
├── pages/
│   ├── index.vue           # /
│   ├── auth/
│   │   ├── signin.vue      # /auth/signin
│   │   └── signup.vue      # /auth/signup
│   ├── login/
│   │   └── index.vue       # /login
│   └── admin/
│       └── dashboard.vue   # /admin/dashboard
├── lib/
│   └── prisma.ts           # Singleton Prisma client
├── utils/
│   └── toast-notification.ts
├── store/                  # Pinia stores (pendiente)
├── prisma/
│   └── schema.prisma       # Esquema de base de datos
├── generated/prisma/       # Cliente Prisma generado
├── public/
├── nuxt.config.ts
├── tailwind.config.js
├── tsconfig.json
└── eslint.config.mjs
```

## Arquitectura de componentes

El proyecto sigue **Atomic Design** con la estructura `components/`:

- **atoms/** — Elementos base: `BaseInput`, `BaseBtn`, `FormError`
- **molecules/** — (pendiente)
- **organisms/** — (pendiente)
- **templates/** — (pendiente)

Los componentes se registran sin prefijo de ruta gracias a `pathPrefix: false` en `nuxt.config.ts`, por lo que se importan directamente por nombre (ej. `<BaseInput />`).

## Modelos de base de datos

### User

| Campo      | Tipo                     | Descripción         |
| ---------- | ------------------------ | ------------------- |
| `id`       | Int (PK, auto-increment) | Identificador único |
| `email`    | String (unique)          | Correo electrónico  |
| `name`     | String? (opcional)       | Nombre del usuario  |
| `password` | String                   | Contraseña hasheada |

## Configuración

### Requisitos

- Node.js >= 18
- pnpm
- MySQL / MariaDB ejecutándose en `localhost:3306`

### Instalación

```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env   # o editar .env manualmente
```

### Variables de entorno (`.env`)

```env
DATABASE_URL="mysql://root:secret@localhost:3306/ecommerce"
JWT_TOKEN_KEY="tu-clave-jwt"
REFRESH_TOKEN_KEY="tu-clave-refresh"
```

### Base de datos

```bash
# Ejecutar migraciones
pnpm prisma migrate dev

# Generar cliente Prisma
pnpm prisma generate
```

## Scripts disponibles

| Comando             | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Servidor de desarrollo en `http://localhost:3000` |
| `pnpm build`        | Build de producción                               |
| `pnpm preview`      | Vista previa del build de producción              |
| `pnpm lint`         | Verificar linting con ESLint                      |
| `pnpm lint:fix`     | Corregir problemas de linting                     |
| `pnpm format`       | Formatear código con Prettier                     |
| `pnpm format:check` | Verificar formato sin modificar                   |
| `pnpm check:all`    | Ejecutar lint + format:check                      |

## Tema de Tailwind CSS

Colores personalizados del proyecto:

```js
// tailwind.config.js
{
  primary: '#42B883',   // Verde Vue
  secondary: '#35495E', // Azul oscuro Vue
  neutral: '#F7F9FA',
}
```

Breakpoints estilo Bootstrap: `sm: 576px`, `md: 768px`, `lg: 992px`, `xl: 1200px`, `2xl: 1400px`.

## Estado actual

- [x] Proyecto base con Nuxt 4
- [x] Prisma ORM con MySQL/MariaDB
- [x] Componentes atómicos (BaseInput, BaseBtn, FormError)
- [x] Layouts (default, auth, admin)
- [x] Páginas de autenticación con validación (Vuelidate)
- [x] Utilidad de notificaciones toast
- [x] ESLint + Prettier + pre-commit hooks
- [ ] Stores de Pinia
- [ ] Middleware de autenticación
- [ ] Rutas API / server
- [ ] Sistema de roles y permisos
- [ ] Componentes molecules, organisms y templates
