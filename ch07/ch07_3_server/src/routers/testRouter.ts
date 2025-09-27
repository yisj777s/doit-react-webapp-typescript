import type {MongoDB} from '../mongodb'
import {Router} from 'express'

export const testRouter = (...args: any[]) => {
  const db: MongoDB = args[0]
  const test = db.collection('test')
  const router = Router()
  return router
    .get('/', async (req, res) => {
      try {
        const findResult = await test.find({}).toArray()
        res.json({ok: true, body: findResult})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .get('/:id', async (req, res) => {
      const {id} = req.params
      try {
        const findResult = await test.findOne({id})
        res.json({ok: true, body: findResult})
      } catch (e) {
        if (e instanceof Error) res.json({ok: false, errorMessage: e.message})
      }
    })
    .post('/', (req, res) => {
      // req.body 의 데이터를 서버에 저장하기를 요청하는 경우
      const {body} = req
      res.json({ok: true, body})
    })
    .put('/:id', (req, res) => {
      // id값을 가진 데이터의 수정을 요청하는 경우
      const {id} = req.params
      const {body} = req
      res.json({ok: true, body, id})
    })
    .delete('/:id', (req, res) => {
      // id값을 가진 데이터의 삭제를 요청하는 경우
      const {id} = req.params
      res.json({ok: true, id})
    })
}
