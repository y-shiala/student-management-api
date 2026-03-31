# 🎓 Student Management API

A beginner-friendly REST API built with **NestJS** and **TypeScript** that demonstrates clean architecture, input validation, and proper error handling. 

---

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Code Structure](#code-structure)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Description

The Student Management API is a RESTful backend service that allows you to create, read, update, and delete student records. It was built to demonstrate the architectural differences between Express.js and NestJS — specifically how NestJS enforces separation of concerns through modules, controllers, services, and dependency injection.

Data is stored **in-memory** — no database setup required, making it perfect for learning and demonstration purposes.

---

## ✨ Features

- ✅ Full **CRUD operations** for student records
- ✅ **Input validation** using DTOs and `class-validator`
- ✅ **Proper error handling** with descriptive HTTP error responses
- ✅ **Modular architecture** following NestJS best practices
- ✅ **TypeScript** throughout for type safety
- ✅ **In-memory data store** — no database setup needed
- ✅ Clean separation of concerns — Controllers, Services, DTOs

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [NestJS](https://nestjs.com/) | Backend framework |
| [TypeScript](https://www.typescriptlang.org/) | Programming language |
| [class-validator](https://github.com/typestack/class-validator) | Input validation |
| [class-transformer](https://github.com/typestack/class-transformer) | Data transformation |
| [Node.js](https://nodejs.org/) | Runtime environment |
| [pnpm](https://pnpm.io/) | Package manager |

---

## ✅ Prerequisites

Make sure you have the following installed before running this project:

- **Node.js** v16 or higher — [Download here](https://nodejs.org/)
- **pnpm** — Install with:
```bash
npm install -g pnpm
```
- **NestJS CLI** — Install with:
```bash
pnpm install -g @nestjs/cli
```
- **Postman** or **Thunder Client** for API testing

---

## 🚀 Installation

**Step 1 — Clone the repository:**
```bash
git clone https://github.com/your-username/student-management-api.git
cd student-management-api
```

**Step 2 — Install dependencies:**
```bash
pnpm install
```

**Step 3 — Start the development server:**
```bash
pnpm run start:dev
```

**Step 4 — Confirm the server is running:**

You should see this in your terminal:
```
[NestFactory] Starting Nest application...
[InstanceLoader] StudentsModule dependencies initialized
[RoutesResolver] StudentsController {/students}
[RouterExplorer] Mapped {/students, GET}
[RouterExplorer] Mapped {/students/:id, GET}
[RouterExplorer] Mapped {/students, POST}
[RouterExplorer] Mapped {/students/:id, PUT}
[RouterExplorer] Mapped {/students/:id, DELETE}
Nest application successfully started
```

The API is now running at `http://localhost:3000` 

---

## 📡 Usage

### Base URL
```
http://localhost:3000
```

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

---

### Example Requests

**Get all students:**
```bash
GET http://localhost:3000/students
```
Response:
```json
[
  { "id": 1, "name": "Alice Wanjiru", "email": "alice@example.com", "course": "Computer Science" },
  { "id": 2, "name": "Bob Kamau", "email": "bob@example.com", "course": "Software Engineering" }
]
```

---

**Create a student:**
```bash
POST http://localhost:3000/students
Content-Type: application/json

{
  "name": "Carol Njeri",
  "email": "carol@example.com",
  "course": "Data Science"
}
```
Response `201 Created`:
```json
{ "id": 3, "name": "Carol Njeri", "email": "carol@example.com", "course": "Data Science" }
```

---

**Get one student:**
```bash
GET http://localhost:3000/students/1
```
Response:
```json
{ "id": 1, "name": "Alice Wanjiru", "email": "alice@example.com", "course": "Computer Science" }
```

---

**Update a student:**
```bash
PUT http://localhost:3000/students/1
Content-Type: application/json

{ "course": "Cybersecurity" }
```
Response:
```json
{ "id": 1, "name": "Alice Wanjiru", "email": "alice@example.com", "course": "Cybersecurity" }
```

---

**Delete a student:**
```bash
DELETE http://localhost:3000/students/2
```
Response:
```json
{ "id": 2, "name": "Bob Kamau", "email": "bob@example.com", "course": "Software Engineering" }
```

---

## 🗂️ Code Structure

```
student-management-api/
├── src/
│   ├── students/
│   │   ├── dto/
│   │   │   └── create-student.dto.ts   # Input validation schema
│   │   ├── students.controller.ts       # Handles HTTP requests
│   │   ├── students.module.ts           # Feature module
│   │   └── students.service.ts          # Business logic
│   ├── app.controller.ts                # Root controller
│   ├── app.module.ts                    # Root module
│   ├── app.service.ts                   # Root service
│   └── main.ts                          # Application entry point
├── test/                                # End-to-end tests
├── .eslintrc.js                         # ESLint configuration
├── .prettierrc                          # Prettier configuration
├── nest-cli.json                        # NestJS CLI configuration
├── package.json                         # Project dependencies
├── tsconfig.json                        # TypeScript configuration
└── README.md                            # Project documentation
```

### Key Files Explained

| File | Purpose |
|---|---|
| `main.ts` | Bootstraps the app and enables global `ValidationPipe` |
| `app.module.ts` | Root module that imports `StudentsModule` |
| `students.module.ts` | Registers the students controller and service |
| `students.controller.ts` | Defines routes and handles HTTP requests |
| `students.service.ts` | Contains all business logic and in-memory data |
| `create-student.dto.ts` | Validates and types the POST request body |

---

## ⚙️ Configuration

No environment variables are required for this project since it uses in-memory storage.

To change the port from the default `3000`, update `main.ts`:

```typescript
await app.listen(4000); // change to any available port
```

To run in production mode:
```bash
pnpm run build
pnpm run start:prod
```

---

## 🔧 Troubleshooting

**Problem: Port 3000 is already in use**
```
Error: listen EADDRINUSE: address already in use :::3000
```
Fix — Kill the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

---

**Problem: `nest` command not found**
```
'nest' is not recognized as an internal or external command
```
Fix — Reinstall the NestJS CLI globally:
```bash
pnpm install -g @nestjs/cli
```

---

**Problem: POST /students with empty body creates an invalid record**

This happens if `ValidationPipe` is not enabled. Make sure `main.ts` includes:
```typescript
app.useGlobalPipes(new ValidationPipe());
```

---

**Problem: GET /students/:id returns empty response for non-existent ID**

Make sure your controller throws a `NotFoundException`:
```typescript
if (!student) {
  throw new NotFoundException(`Student with id ${id} not found`);
}
```

---

**Problem: Data resets on every server restart**

This is expected behavior — data is stored in-memory. To persist data, integrate a database like PostgreSQL with TypeORM (planned for a future version).

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes and commit:
```bash
git commit -m "Add: your feature description"
```
4. Push to your branch:
```bash
git push origin feature/your-feature-name
```
5. Open a Pull Request

Please make sure your code follows the existing structure — controllers for HTTP, services for logic, DTOs for validation.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

## 👤 Author

Built by **Yvonnah Shiala**.
