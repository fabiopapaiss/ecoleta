import knex from '../database/connection'

require('dotenv').config()

import { Request, Response } from 'express' // For typescript

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image: `http://${process.env.DOMAIN}:3333/uploads/${item.image}`
            }
        })
        return res.json(serializedItems)
    }
}

export default ItemsController