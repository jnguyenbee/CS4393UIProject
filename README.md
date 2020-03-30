# CS4393UIProject
#### Table of Contents



1. [ Set-up  ](#start)</br>
    </t> a. [ Installation ](#csv)</br>
2. [ Running Project ](#run)</br>
    </t> a. [ Run Server ](#server)</br>
    </t> b. [ Run Client ](#client)</br>
3. [ Project Structure ](#structure)

<a name="start"></a>
## Set-up :computer:

### Installing packages
> Open up your terminal in the root directory and run this command:
```
npm install
```
### npm packages
- [ ] [body-parser](https://www.npmjs.com/package/body-parser)
- [ ] [bootstrap](https://www.npmjs.com/package/bootstrap)
- [ ] [bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue)
- [ ] [dotenv](https://www.npmjs.com/package/dotenv)
- [ ] [express](https://www.npmjs.com/package/express)
- [ ] [mysql](https://www.npmjs.com/package/mysql)
- [ ] [nodemon](https://www.npmjs.com/package/nodemon)
- [ ] [vue](https://www.npmjs.com/package/vue)
- [ ] [vue-router](https://www.npmjs.com/package/vue-router)

<a name="run"></a>
## Running Project

<a name="server"></a>
### Run Server
> Open up your terminal in the root directory and run this command:
```
npm start
```
or 
> Open up your terminal in the root directory and run this command:
```
nodemon server.js
```
<a name="client"></a>
### Run Client
> Open up your terminal in the client directory and run this command:
```
npm run serve
```
> App running at 
```
http://localhost:8080/         # This is where the website is running on.
```

<a name="strcuture"></a>
## Project Structure
```
.
├── client
│   ├── public          
│   ├── assets
│   ├── components
|   │   ├── Home.vue
│   ├── app.vue
│   ├── main.js
│   └── README.md                
├── server   
│   ├── api
|   │   ├── routes
│   └── app.js
├── server.js
├── LICENSE
└── README.md
```
