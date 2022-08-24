# pern-todo-list
Creating a TODO list with PERN stack

To run,
1. Start postgres with `psql -U <username>`
2. Create a database with the two commands found in `server/database.sql`
3. Add your postgres credentials to `server/.env`
4. Navigate to the `server` directory and run `npm i`

    a. Start the server with `nodemon index.js`
5. Navigate to the `client` directory and run `npm i`
    
    a. Start the client by running `npm run start`