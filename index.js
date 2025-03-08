const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
  //allow every website to access the server
  origin:'*',
  //allow to use token
  allowedHeaders:['Content-Type', 'Authorization']
}))
app.use()
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
