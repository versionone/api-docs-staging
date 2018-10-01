var express = require('express')
const axios = require('axios')
const cors = require('cors')
const v1sdk = require('v1sdk/dist/index')
const sdk = v1sdk.default
const axiosConnector = v1sdk.axiosConnector

const axiosConnectedSdk = axiosConnector(axios)(sdk)

const app = express()

app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)

app.use('/', (req, res) => {
  console.log(req.body)
  try {
    const token = req.body.token
    const host = req.body.host
    const instance = req.body.instance
    const port = req.body.port
    const isHttps = req.body.isHttps

    const v1 = axiosConnectedSdk(host, instance, port, isHttps).withAccessToken(
      token
    )
    v1.query({
      from: 'Member',
      where: {
        IsSelf: true,
      },
      select: ['Avatar.Content'],
    })
      .then(response => {
        const avatar = response.data[0][0]['Avatar.Content']
        res.contentType('application/json')
        res.status(200).send({ src: avatar })
      })
      .catch(error => {
        console.log('error', error)
        res.status(500).send(error)
      })
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.listen({ port: 3000 }, () => {
  console.log('ready')
})
