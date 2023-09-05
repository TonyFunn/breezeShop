import Router from "express";
import { check } from "express-validator";
import controller from "../controllers/authController.js";

const router = new Router()

router.post('/registration', controller.registration, [
    check('username', "Имя пользователя не должно быть пустым").notEmpty(),
    check('passvord', "Пароль должен быть больше 4 и меньше 10").isLength({min: 4, max: 10})
])
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

export default router