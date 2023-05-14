## Solution - Backend with Express

This is the backend that handles the RESTful API and performs the CRUD operations on the products items stored in the database

## Database

Postgres was used for the database and Sequelize was used as the ORM and for Migrations. The Postgres is running on a docker container. 

## Deployment

The deployment was handled using the following:
- **Docker**: Docker was used to build images to create container instances. Using GitHub actions, on pull request each image will be created and pushed to DockerHub (This was my choice for the registry because it was free). Images includs the following. 
-- **Frontend**: The Angular application.
-- **Backend**: The Express Server
-- **Proxy**: An Nginx server that acts as proxy and performs some changes to the header/routes before passing to the right path; either the frontend or the backend
- **Google Cloud Hosting**: For simplicity, a single VM instance was created and used on Google cloud hosting. Here docker was installed and docker compose was run on a docker-compose.yaml file (Multi-container architechure) which contains the configuration for the **Frontend**, **Backend**, **Proxy**, and **Progres**.

---

## Question Part 2: Back-end (Node.js/Express)

## 2.1 Create a simple API

**Objective**: Evaluate the candidate's experience with Node.js and Express.
**Task**: Develop a RESTful API with Express that supports CRUD operations for the product list.

## 2.2 Middleware and Authentication

**Objective**: Test the candidate's understanding of middleware and authentication in Express.
**Task**: Implement JWT-based authentication for the API and protect specific routes.

# Part 3: Database

## 3.1 Data modeling and CRUD operations

**Objective**: Assess the candidate's ability to work with databases.
**Task**: Choose a database (e.g., MongoDB, PostgreSQL, MySQL), design a schema for the product list, and implement CRUD
operations.

## 3.2 Data validation

**Objective**: Test the candidate's ability to validate data at the database level.
**Task**: Add server-side validation for product details and handle errors appropriately.

# Part 4: Integration

## 4.1 Connect front-end and back-end

**Objective**: Evaluate the candidate's ability to integrate the Angular application with the back-end API.

**Task**: Connect the Angular application with the Express API to create a full-stack application.

## 4.2 Deployment

**Objective**: Test the candidate's knowledge of deploying a full-stack Angular application.
Task: Provide instructions or deploy the full-stack application to a platform like Heroku, AWS, or Google Cloud
Platform.

This test will provide a comprehensive assessment of an Angular Full Stack Developer's skills, covering various aspects
of front-end and back-end development, as well as database and deployment knowledge.

