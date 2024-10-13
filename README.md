# Express MongoDB TypeScript Docker Template

## Overview
This project provides a boilerplate template for building web applications using Express.js, MongoDB, and TypeScript, with Docker for easy containerization. This setup allows you to develop and run your application in isolated environments.

## Features
- **TypeScript Support**: Static typing for better code quality.
- **Express Framework**: Fast and minimalist web framework for Node.js.
- **MongoDB Integration**: NoSQL database for data storage.
- **Dockerized Application**: Run your application and MongoDB in containers.
- **Environment Configuration**: Manage configurations using a `.env` file.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **TypeScript**
- **Docker**

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aadith-tech/express-mongo-ts-template.git
   cd express-mongo-ts-template

  Create a .env file in the root directory with your environment variables:
    MONGODB_URI=mongodb://mongo:27017/your_database_name
  ```bash
   docker-compose up --build
