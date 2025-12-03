import type {MongoDB} from '../mongodb'
import {stringToObjectId} from '../mongodb'
import {Router} from 'express'
import * as U from '../utils'

export const authRouter = (...args: any[]) => {
  const db: MongoDB = args[0]
  const user = db.collection('user')
  const router = Router()

  return router
    .post('/signup', async (req, res) => {
      const {body} = req

      try {
        // console.log('./signup', body)
        const exists = await user.findOne({email: body.email})

        if (exists) {
          res.json({ok: false, errorMessage: '이미 가입한 회원입니다.'})
        } else {
          const {email, password} = body
          const hashed = await U.hashPasswordP(password)
          const newBody = {email, password: hashed}
          const {insertedId} = await user.insertOne(newBody)
          const jwt = await U.jwtSignP({userId: insertedId})

          res.json({ok: true, body: jwt})
        }
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .post('/login', async (req, res) => {
      const {authorization} = req.headers || {}
      if (!authorization) {
        res.json({ok: false, errorMessage: 'JSON 토큰이 없습니다.'})
        return
      }
    })
}
