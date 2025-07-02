const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Export the app for testing purposes
module.exports = app;
// To run the server, use the command: npm start
// For development, use: npm run start-dev
// To run tests, use: npm test (currently not set up)
// To install dependencies, run: npm install        
// To initialize the project, run: npm init -y