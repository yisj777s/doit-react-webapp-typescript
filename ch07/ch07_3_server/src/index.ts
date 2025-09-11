import {createServer} from 'http'
import {createExpressApp} from './express'

const hostname = 'localhost',
  port = 4000

createServer(createExpressApp()).listen(port, () =>
  console.log(`connect http://${hostname}:${port}`)
)
