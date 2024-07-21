# This is backend side for my portfolio "tasan portfolio" site and dashboard

#### **Portfolio Live link:** https://tasan-portfolio.vercel.app/
#### **Dashboard Live link:** https://portfolio-dashboard-frontend-next.vercel.app/
####  **Live Server link:** https://portfolio-backend-one-ivory.vercel.app/
####  **Portfolio Frontend Repo:** https://github.com/tauhid-hasan-dev/portfolio-tauhid.git
####  **Backend Repo:** https://github.com/tauhid-hasan-dev/portfolio-backend.git
####  **Dashboard Client Repo:** https://github.com/tauhid-hasan-dev/portfolio-dashboard-frontend.git


### **Technology Stack:**

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** PostgreSQL
- **Object Relational Mapping (ORM):** Prisma
- **Authentication:** JWT (JSON Web Tokens)

### **Topics are covered in this Project:**

- Data validation with Prisma ORM
- Authentication with json web token
- CRUD operations(Pet, Adoption request, User)
- Error Handling using zod error.
- Routing with express router.

### **To run this project locally, follow theese instructions**

- You should have postgreSQL installed in your computer
- take a look at the .env.example file to replace your own credintials
- Import the postman collection to the postman to test the apis

**Clone this repository in your machine**

```
git clone https://github.com/tauhid-hasan-dev/portfolio-backend.git
```

**Install yarn for node_modules**

```
yarn install
```

**Run the project**

```
yarn run dev
```

**The connect the project to the database**

```
npx prisma migrate dev
```

**To connect to the database**

```
npx prisma studio
```
