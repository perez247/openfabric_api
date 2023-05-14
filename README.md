# Backend with Express

This is the backend that handles the RESTful API and performs the CRUD operations on the products items stored in the database


# Database

Postgres was used for the database and Sequelize was used as the ORM and for Migrations. The Postgres is running on a docker container. 

## Deployment

The deployment was handled using the following:
- **Docker**: Docker was used to build images to create container instances. Using GitHub actions, on pull request each image will be created and pushed to DockerHub (This was my choice for the registry because it was free). Images included the fr. 
-- **Frontend**: The Angular application.
-- **Backend**: The Express Server
-- **Proxy**: An Nginx server that acts as proxy and performs some changes to the header/routes before passing to the right path; either the frontend or the backend
- **Google Cloud Hosting**: For simplicity, a single VM instance was created and used on Google cloud hosting. Here docker was installed and docker compose was run on a docker-compose.yaml file (Multi-container architechure) which contains the configuration for the **Frontend**, **Backend**, **Proxy**, and **Progres**.
