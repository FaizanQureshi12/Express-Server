console.log('hello world as module javascript')

import express   from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('request ip:',req.ip)
  res.send('Hello World!' + new Date().toString())
})
//Ip Address From Network properties
//http://192.168.43.166:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})