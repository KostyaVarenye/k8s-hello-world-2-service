import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  const helloMessage = `VERSION2: Hello from the ${os.hostname()}`
  console.log(helloMessage)
  console.log('\n')
  res.send(helloMessage)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})