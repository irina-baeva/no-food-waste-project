Full stack application dashboard for retailer with data visualisation in order to raise awareness of employees on such a subjects as sustanability and particulary food waste

---

Created by Team of developers and data scientists: Irina Baeva, Behnaz Derakhshani and Soyoon Choi

---

Tech Stack:

- Frontend: React
- Backend: Node(Express)
- DataBase: MongoDB

---

To run app:

1. npm install (to install all required packages)
2. next step is connect db (create default.json file with object {"mongoURI": ""} - take information from Atlass)
3. npm run server is running backend if success then you get:
   Server listening 5050
   Mongodb connected...
4. to check endpoints use postman
   for example GET request to http://localhost:5050/api/auth should give you response "Auth route"
