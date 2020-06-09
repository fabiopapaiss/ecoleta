import express from 'express'
import { celebrate, Joi } from 'celebrate'

const routes = express.Router()

import multer from 'multer'
import multerConfig from './config/multer'
const upload = multer(multerConfig)

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()


routes.get('/items', itemsController.index)

routes.post(
    '/points',
    upload.single('point_image'),  
    pointsController.create,
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    })
    )
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)


export default routes
