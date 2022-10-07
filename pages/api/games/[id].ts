import type { NextApiRequest, NextApiResponse } from 'next'
import Query from '../../../components/Query'
import { Games } from '../../../components/Interface'

type Data = {
  data: Games[]
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const companyId = req.query.id
    const sql = `SELECT * FROM game WHERE companyId = ${companyId}`
    const data = await Query({sql: sql})
    res.status(200).json(data)
}