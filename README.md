SIT737 Task 9.1P - Cloud-Native Node.js Microservice with MongoDB 


📘 Introduction

This README details my journey in completing Task 9.1P, where I integrated MongoDB into a Kubernetes-hosted Node.js microservice. I followed the task instructions meticulously, ensuring secure credential management, persistent storage, and robust application deployment. Below is my personal account of the process, challenges faced, and solutions implemented.

🛠 1. Initial Application Setup
Project Setup: Created sit737-task9p directory and initialized a Node.js project.

Dependencies: Installed express, mongodb, and dotenv.

npm install express mongodb dotenv
Code Implementation:

Created index.js with Express routes for CRUD operations.

Added MongoDB connection logic using process.env variables for credentials.

Implemented POST (/data) and GET (/data) endpoints to interact with MongoDB.

🐳 2. Dockerization
Dockerfile: Built a lightweight image using node:alpine.

☸️ 3. Kubernetes Configuration
MongoDB Setup
Persistent Storage: Defined PVC and PV in mongodb-pv.yaml and mongodb-pvc.yaml.


Node.js Application Setup
Deployment Manifest: Created node-deployment.yaml referencing the Docker image and MongoDB secrets.


🚀 4. Deployment & Testing
Applied Configurations:

kubectl apply -f mongodb-pv.yaml
kubectl apply -f mongodb-pvc.yaml
kubectl apply -f mongodb-secret.yaml
kubectl apply -f mongodb-deployment.yaml
kubectl apply -f node-deployment.yaml
kubectl apply -f node-service.yaml
Accessing the App:

Retrieved NodePort IP and port:

kubectl get svc node-service
Tested endpoints:

🔒 5. Backups & Monitoring (Additional Steps)
Backups: Set up a CronJob for daily MongoDB backups to a cloud storage bucket.

Monitoring: Deployed Prometheus and Grafana for cluster performance tracking.

📂 Final Folder Structure
sit737-task9p/
├── index.js
├── Dockerfile
├── package.json
├── mongodb-pv.yaml
├── mongodb-pvc.yaml
├── mongodb-secret.yaml
├── mongodb-deployment.yaml
├── node-deployment.yaml
├── node-service.yaml
└── README.md
✅ Completion Checklist
MongoDB integrated into Kubernetes cluster

Persistent storage using PV/PVC

Secrets for secure credential management

Node.js app connects to MongoDB

CRUD operations tested successfully

Backups and monitoring configured

💡 Reflections
This task deepened my understanding of Kubernetes orchestration, especially in managing stateful services like MongoDB. I learned the importance of persistent storage for data integrity and the role of Secrets in securing sensitive information. Challenges included configuring environment variables correctly and ensuring network policies allowed app-database communication. Overcoming these has boosted my confidence in cloud-native development.
