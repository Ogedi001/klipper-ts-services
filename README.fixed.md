# 🚀 Klipper TypeScript Services (Nx Monorepo)

A modern **TypeScript monorepo** powered by [Nx](https://nx.dev) and [NestJS](https://nestjs.com), hosting all **backend microservices** for the **Klippa SaaS Platform** — including authentication, CRM, notifications, business logic, and AI assistant services.

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="90" alt="NestJS Logo" />
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="80" alt="Nx Logo" />
</p>

---

## 🧭 Overview

This monorepo centralizes all **NestJS microservices** written in **TypeScript**, managed using **Nx** for scalable builds, modular development, and shared libraries.

Each service runs independently but shares common utilities, DTOs, and configuration across the workspace.

### Included Services

| Service                  | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **Auth Service**         | Handles authentication, identity, RBAC, and KYC verification. |
| **CRM Service**          | Manages client relationships, interactions, and records.      |
| **Business Service**     | Handles business profiles, operations, and internal logic.    |
| **Notification Service** | Manages emails, in-app, and SMS notifications.                |
| **AI Assistant Service** | Provides AI-driven automation and smart responses.            |

---

## 🏗️ Monorepo Structure

```text
klipper-ts-services/
├── apps/                   # All NestJS services live here
│   ├── auth-service/
│   ├── crm-service/
│   ├── business-service/
│   ├── notification-service/
│   └── ai-assistant-service/
│
├── libs/                   # Shared libraries
│   ├── common/             # Shared utilities, interceptors, decorators
│   ├── config/             # Centralized environment/config loader
│   └── dto/                # Shared data transfer objects
│
├── docker/                 # Dockerfiles for each service
│   ├── Dockerfile.auth
│   ├── Dockerfile.crm
│   └── Dockerfile.notification
│
├── tools/                  # Custom Nx tools & scripts
├── .github/                # CI/CD workflows (GitHub Actions)
├── nx.json                 # Nx project definitions
├── tsconfig.base.json      # Base TS config for all services
├── package.json            # Root dependencies
└── README.md               # You are here
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
yarn install
```

### 2. Run a Specific Service

```bash
yarn nx serve auth-service
```

You should see:

```
🚀 Application is running on: http://localhost:3000/api
```

### 3. Build a Service

```bash
yarn nx build crm-service
```

### 4. Run All Tests

```bash
yarn nx run-many --target=test
```

---

## 🧱 Shared Libraries

- **`libs/common`** → Custom decorators, interceptors, guards, utilities.
- **`libs/config`** → Centralized environment & configuration loader.
- **`libs/dto`** → Shared Zod-based DTOs and type schemas for all services.

Use them via imports:

```ts
import { LoggerService } from '@klipper-ts-services/common';
import { CreateUserDto } from '@klipper-ts-services/dto';
```

---

## 🧰 Developer Tools

### View Dependency Graph

```bash
yarn nx graph
```

### Check Monorepo Health

```bash
yarn nx doctor
```

### Sync TypeScript References

```bash
yarn nx sync
```

---

## 🧪 Testing

Each service has its own `e2e` test suite:

```
apps/auth-service-e2e/
apps/crm-service-e2e/
...
```

Run a specific suite:

```bash
yarn nx test auth-service
```

---

## 🐳 Docker & Deployment

Each service has a dedicated Dockerfile under `/docker`:

```bash
# Example: build the auth-service image
docker build -f docker/Dockerfile.auth -t klipper-auth-service .
```

Deployment pipelines are defined in `.github/workflows/`.

---

## 🧑‍💻 Contributing

1. Clone the repo
2. Create a new service using:

   ```bash
   yarn nx g @nx/nest:application new-service
   ```

3. Follow the established modular structure under `apps/`

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🧠 Learn More

- [Nx Documentation](https://nx.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [Zod Validation](https://zod.dev)
- [Nx Console (VS Code Plugin)](https://nx.dev/getting-started/editor-setup)
