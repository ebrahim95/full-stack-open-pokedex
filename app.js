const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})


app.get('/coco', (req, res) => {
  res.send('it works coco')
})

app.get('/banana', (req, res) => {
  res.send('it works banana')
})


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on Port 5000')
})

