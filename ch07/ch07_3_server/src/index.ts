import {createServer} from 'http'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'

import {createExpressApp} from './express'

makeDir(getPublicDirPath())

const hostname = 'localhost',
  port = 4000

createServer(createExpressApp()).listen(port, () =>
  console.log(`connect http://${hostname}:${port}`)
)
