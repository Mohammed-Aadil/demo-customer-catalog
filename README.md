# Customer Catalog with MEAN stack demo

Steps to run this project

make an .env file in root dir and add following envs:
```
MONGO_DB_URL=mongodb://mongodb/CustomerCata
NODE_ENV=prod
```

1. in root folder run `npm install`
1. in public/ folder run `npm install`
2. in public/ folder run `node_modules/@angular/cli/bin/ng build --prod`
3. in root dir run `docker-compose up app`