import express from 'express'

export const createExpressApp = (...args: any[]) => {
  const app = express().get('/', (req, res) => {
    res.json({message: 'Hello express World!fuck'})
  })
  return app
}
