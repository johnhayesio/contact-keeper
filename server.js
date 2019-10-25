const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.json({msg: 'Welcome to the ContactKeeper API'})
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`🚀 App is running at https://localhost:${PORT}`))
