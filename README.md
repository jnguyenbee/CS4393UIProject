# CS4393UIProject
#### Table of Contents



1. [ Set-up  ](#start)</br>
    </t> a. [ Installation ](#install)</br>
2. [ Running Project ](#run)</br>
    </t> a. [ Run Server ](#server)</br>
    </t> b. [ Run Client ](#client)</br>
3. [ Project Structure ](#structure)

<a name="start"></a>
## Set-up :computer:
- [ ] [NodeJS LST](https://nodejs.org/en/)
- [ ] [Visual Studio Code](https://code.visualstudio.com/download)
- [ ] [MongoDB](https://www.mongodb.com/)

## Create environment variables
Create a file called .env in the server directory and fill in the following variables without quotations
```
PORT=
MONGODB_CONNECTION_URI=
```

<a name="install"></a>
### Installing packages
> Open up your terminal in the serve directory and run this command:
```
npm install
```
### npm packages
- [ ] [axios](https://www.npmjs.com/package/axios)
- [ ] [body-parser](https://www.npmjs.com/package/body-parser)
- [ ] [bootstrap](https://www.npmjs.com/package/bootstrap)
- [ ] [bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue)
- [ ] [dotenv](https://www.npmjs.com/package/dotenv)
- [ ] [express](https://www.npmjs.com/package/express)
- [ ] [multer](https://www.npmjs.com/package/multer)
- [ ] [mysql](https://www.npmjs.com/package/mysql)
- [ ] [nodemon](https://www.npmjs.com/package/nodemon)
- [ ] [vue](https://www.npmjs.com/package/vue)
- [ ] [vue-card-payment](https://www.npmjs.com/package/vue-card-payment)
- [ ] [vue-style-loader](https://www.npmjs.com/package/vue-style-loader)
- [ ] [vue-router](https://www.npmjs.com/package/vue-router)

<a name="run"></a>
## Running Project

<a name="server"></a>
### Run Server
> Open up your terminal in the root directory and run this command:
```
npm start
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

<a name="structure"></a>
## Project Structure
```
.
├── client
│   ├── public          
│   ├── assets
│   ├── src
│   │   ├── components
│   |   │   ├── ProductForm.vue
│   |   │   ├── ProductList.vue
│   |   ├── pages
│   |   │   ├── Admin
│   |   |   │   ├── Edit.vue
│   |   |   │   ├── Index.vue
│   |   |   │   ├── New.vue
│   |   |   │   ├── Product.vue
│   |   │   ├── User
│   |   |   │   ├── Index.vue
│   |   |   │   ├── Signin.vue
│   |   |   │   ├── Signup.vue
│   |   │   ├── Cart.vue
│   |   │   ├── Details.vue
│   |   ├── router
│   |   |   ├── admin.js
│   |   |   ├── cart.js
│   |   |   ├── details.js
│   |   |   ├── home.js
│   |   |   ├── index.js
│   |   |   ├── user.js
│   │   ├── App.vue
│   │   ├── main.js
│   └── README.md                
├── server   
│   ├── api
|   │   ├── routes
|   ├── app.js
│   └── server.js
├── LICENSE
└── README.md
```
