# Directory Tree Structure:

```
├── backend
           ├── Controllers
           │             └── AuthController.js
           ├── Middlewares
           │             ├── Auth.js
           │             └── AuthValidation.js
           ├── Models
           │             ├── User.js
           │             └── db.js
           ├── Routes
           │             ├── AuthRouter.js
           │             └── ProductRouter.js
           ├── index.js
           ├── package-lock.json
           └── package.json

```
- **User Schema**:
    - `User schema code`
       -  https://github.com/mr0erek/MERN-Authentication-sys/blob/d2b4f5c27e13ebdd608c254137593bfadf78d3f8/backend/Models/User.js#L1-L24

### User Login and Signup Endpoints:
 
  1. https://github.com/mr0erek/MERN-Authentication-sys/blob/c04324a83972876887cb296ff5e9d8cf5cb49205/backend/Controllers/AuthController.js#L1-L80
  
  2. https://github.com/mr0erek/MERN-Authentication-sys/blob/a69d6f83141e7bb046786c90917b5737818fd3d2/backend/Middlewares/AuthValidation.js#L1-L33
  
  3. https://github.com/mr0erek/MERN-Authentication-sys/blob/c04324a83972876887cb296ff5e9d8cf5cb49205/backend/Routes/AuthRouter.js#L1-L14

### TO Start Backend Server Locally:
**Open a New Terminal and paste**
- `cd backend; npm install`
- `npm start`
>[!NOTE]
>Do not forget to create a new `.env` file in backend dir
>also do add given named variables : `JWT_SECRET`, `MONGO_CONNECT_URI` and `PORT`

**Example**: 
```bash
JWT_SECRET=ABCD@1234                # It can be ANYTHING, as per your wish
MONGO_CONNECT_URI=<DB_LINK>
PORT=8080
```
