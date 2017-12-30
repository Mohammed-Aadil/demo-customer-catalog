# Customer Catalog with MEAN stack demo

Steps to run this project

make an .env file in root dir and add following envs:
```
MONGO_DB_URL=mongodb://mongodb/CustomerCata
NODE_ENV=prod
```

1. npm install
2. cd public && node_modules/@angular/cli/bin/ng build --prod
3. docker-compose up app