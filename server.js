const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
      res.send('Server is up!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
      console.log(`Server is up in port: ${port}`);
})