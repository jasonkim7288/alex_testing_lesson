const repeatMessage = (message, repeatCount) => {
  let messageToShow = "";
  for (let i = 0; i < repeatCount; i++) {
    messageToShow += message;
  }
  return messageToShow;
}

const express = require('express')
const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({
    msg: "Hello World!"
  });
})

app.post('/studentNames', (request, response) => {
  let incomingData = request.body.studentNames;
  console.log(incomingData);
  response.json({
    firstStudentName: incomingData[0]
  })
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = {
  repeatMessage,
  app,
  server
}