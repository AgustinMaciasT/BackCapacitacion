const express = require('express')
const route = require('./route')
const app = express()
const port = 3000

const getAgus = (req, res, next) => {
  console.log(req.path)
  if(req.headers.auth === "true")
    next()
  else
    res.json({error:true})
}

app.use(getAgus)

app.use("/v1", route)


/* app.get('/agus', (req, res, next, error) => {
  console.log('Hola desde agus')
  res.send('')
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
