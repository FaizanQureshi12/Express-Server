console.log('hello world as module javascript')

import express   from "express"
import path from 'path'
const app = express()
const port = process.env.Port || 3000

app.get('/abc', (req, res) => {
    console.log('request ip:',req.ip)
  res.send('Hello Faizan Qureshi!' + new Date().toString())
})
 
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))

//Ip Address From Network properties
//http://192.168.43.166:3000

//cloud link
//https://good-lime-buffalo-gear.cyclic.app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})