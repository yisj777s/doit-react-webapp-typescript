import {Router} from 'express'

export const testRouter = (...args: any[]) => {
  const router = Router()
  return router
    .get('/', (req, res) => {
      // 모든 데이터를 요청하는 경우
      res.json({ok: true})
    })
    .get('/:id', (req, res) => {
      const {id} = req.params
      // id값을 가진 데이터만 요청하는 경우
      res.json({ok: true, id})
    })
    .post('/', (req, res) => {
      // req.body 의 데이터를 서버에 저장하기를 요청하는 경우
      const {body} = req
      res.json({ok: true, body})
    })
}
