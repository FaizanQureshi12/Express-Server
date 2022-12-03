import express   from "express"
import path from 'path'
import cors from 'cors'

const app = express()
const port = process.env.Port || 5001
console.log('hello world as module javascript')
   
app.use(cors());
app.get('/abc', (req, res) => {
    console.log('request ip:',req.ip)
  res.send('Hello Faizan Qureshi!' + new Date().toString())
})

app.get('/weather', (req, res) => {
  console.log('request ip:',req.ip)
res.send(
  { 
    temp:20,
    min:10,
    max:50,
    humidity:63,
    serverTime: new Date().toString()
  });
})
app.get('/gettime', (req, res) => {
  console.log('request ip:',req.ip)
res.send('Hello Faizan Qureshi!' + new Date().toString())
})
 
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))

//Ip Address From Network properties
//http://192.168.43.166:3000

//cloud link
//https://good-lime-buffalo-gear.cyclic.app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})