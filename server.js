const express = require('express')
const app = express()

app.use(express.static('build'))
// app.use('/images', express.static('public/images'))

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log('App listening on port ' + PORT + '!'));
