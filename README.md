<p align="center"><img width=60% src="https://github.com/mcnamarakc/Project3/blob/master/images/title-a-dripping-marker.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![SQL](https://img.shields.io/badge/Library-SQL-green.svg?logo=mysql)
![Express](https://img.shields.io/badge/Javascript-Express-orange.svg)
![React](https://img.shields.io/badge/Javascript-React-orange.svg?logo=react)
![Node](https://img.shields.io/badge/Javascript-Node.js-green.svg?logo=node.js)

<p align="center"> GeoGraffiti is an app to help users discover street art </p>


## Installation for development

```bash
git clone https://github.com/mcnamarakc/Project3.git
npm i
```

Update your config file for your database information

```javascript
"username": "root",
"password": null,
"database": "project3_development",
"host": "127.0.0.1",
"dialect": "mysql"
```

Create a database in mysql command line or using mysql workbench and run this command to bring db up to date:

```bash
sequelize db:migrate
sequelize db:seed:all
```

Add a .env file in the root of the server folder

```bash
JWT_SECRET=make_up_a_string_here
```

Run the development script

```bash
npm run start:dev
```
