const express = require('express');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    app.listen(port, () => {console.log(`Server is running at http://localhost:${port}`);});
    console.log('Database connection established successfully');
  }
});

// Export the app for testing purposes
module.exports = app;
// To run the server, use the command: npm start
// For development, use: npm run start-dev
// To run tests, use: npm test (currently not set up)
// To install dependencies, run: npm install        
// To initialize the project, run: npm init -y