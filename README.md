# No-food-waste

Full stack application dashboard for a retailer company with data visualisations in order to raise awareness of employees on such a subjects as sustanability and food waste. It is a learning semester project. Author was using: Udemy "MERN Stack Front To Back" by Brad Traversy for seting API, and following documentations: Material UI, Mapbox GL, ChartJS, JWT.

## Deployed (work in progress)

https://guarded-ravine-01897.herokuapp.com/

Author: Irina Baeva.

---

## Technologies:

- Frontend: React + Redux + Material UI
- Backend: NodeJS, Express, JWT Authentication
- DataBase: MongoDB

![App Architecture](./app-architecture.png)

---

## Features

- registration with email and password,
- login, logout with JWT,
- check local and global statistics

## Installation

Clone the project

```sh
git clone https://github.com/irina-baeva/no-food-waste-project.git
```

Install all required packages for backend and frontend

```sh
npm install
```

```sh
cd ./client
```

```sh
npm install
```

You might want to look into config/production.json to set up your jwt secret word and MAPBOX TOKEN.

#### Running the project

Run the app in the development mode and open http://localhost:3000 to view it in the browser. From root folder:

```sh
npm run dev
```

Builds the app for production to the build folder

```sh
cd ./client
npm run build
```

---

## Documentation for API

Check endpoints of API with Postman

##### Register User:

_Post request with empty body:_

```sh
http://localhost:5050/api/users
```

We get Errors:

```sh
{
    "errors": [
        {
            "msg": "Name is required",
            "param": "name",
            "location": "body"
        },
        {
            "msg": "Include valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Please, enter a password with 6 or more characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

_Post request with user who already registered with request body as following:_

```sh
{
	"name": "Irina",
	"email": "irinabayova@gmail.com",
	"password": "**********"
}
```

We get Errors as a response:

```sh
{
    "errors": [
        {
            "msg": "User already exists"
        }
    ]
}
```

_The following is an example of a valid request body for the Register Account:_

```sh
{
	"name": "Test Test",
	"email": "test@gmail.com",
	"password": "******"
}
```

As a success response we get JWT token:

```sh
{
    "token": "********************************.******************.**********************"
}
```

And new test user appeared in Mongodb Atlas collections:
![Registered user](./atlas_collection.png)

##### Get User:

GET Request endpoint

```sh
http://localhost:5050/api/auth
```

Headers

key: x-auth-token
value: JWT_TOKEN_HERE

Response body

```sh

{
    "date": "2020-05-07T06:15:36.311Z",
    "_id": "5eb3d0e6d9e3f59226b03432",
    "name": "Test Test",
    "email": "test@gmail.com",
    "avatar": "",
    "__v": 0
}
```

##### Login user:

_Post request to the following endpoint, header and body:_

```sh
http://localhost:5050/api/auth
```

Key: Content-Type
Value: application/json

```sh
{
	"email": "test@gmail.com",
	"password": "******"
}
```

As a success response we get JWT token:

```sh
{
    "token": "********************************.******************.**********************"
}
```

##### Get User Profile:

GET Request endpoint

```sh
http://localhost:5050/api/profile/me
```

Headers

key: x-auth-token
value: JWT_TOKEN_HERE

Response (since we did not created profile)

```sh
{
     "msg": "There is no profile for the user"
}
```

##### Post User Profile (work in progress)

---

## Documentation for Client

#### Structure of frontend

```sh
client/
  node_modules/
  .env
  .gitignore
  package.json
  public/
  src/
   actions
   components/
      authentification/
         Login.js
         Register.js
      dashboard/
         Dashboard.js
         Drawer.js
         GlobalStat.js
         LocalStat.js
         SalesShrinkageBar.js
         WeekdayPie.js
      layout/
         Alert.js
         Landing.js
         Navbar.js
      routing/
   reducers/
   utils
   App.css
   App.js
   index.js
   store.js
```

#### Libraries

- [fontawesome library for React](https://github.com/FortAwesome/react-fontawesome) - icons
- [material-ui](https://material-ui.com/fr/getting-started/installation/) - Material-UI components
- [axios](https://github.com/axios/axios) - making requsts
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) - React wrapper for Chart.js
- [react-map-gl](https://github.com/visgl/react-map-gl) - React wrapper for MapboxGL JS
- [react-redux](https://redux.js.org/basics/usage-with-react) - State management
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - Cool feature to understand what is happening with state components
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Create client-side routing
- [uuis](https://github.com/uuidjs/uuid) - Generate unique ids

#### Frontend screens

The main frontend screens are represented by map with number of food waste in European countries (statistics are taken from http://www.fao.org/faostat/en/#data/FBS ) and by data visualisations of sales and shrinkage
![Map](./screens_images/map.png)
![Local](./screens_images/local_stat.png)
