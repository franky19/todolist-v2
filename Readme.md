# Node version is using on this todolist app
- Using NodeJS v20

## Stack Frontend
- ReactJS
- Tailwind.css
- Redux
- Redux-thunk
- Redux-persist
- Typescript
- Axios

## Stack Backend
- Nodejs
- ExpressJS
- Orm Model
- Sequelize
- Typescript


## Database is using on this todolist app
- Mysql

### Development or How to testing

1. Install Package with `npm install` on folder `backend` & `frontend`
2. Create database with name `todo` 
4. import database `todo` on database mysql using `dump-todo-202303032329.sql`
5. Change the config db using your connection DB on folder `backend/credentials/db.ts`
6. Start backend with go to folder backend > npm run dev
7. Changes file `.env-template` to be `.env` on folder frontend
8. Start frontend with go to folder frontend > npm start
9. Finish.

### Noted
the default port on backend was used on localhost:3001, and if you have other process on localhost:3001, changes the port of backend to other port on file `backend/server.ts` and changes the config on `.env` on parameter `REACT_APP_API_URL`

Now you can be used and explore it the logic of todolist 

