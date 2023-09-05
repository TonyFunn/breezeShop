import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import secret from "../config/config.js";

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({massage: 'Ошибка при регистрации', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({massage: 'A user with the same name already exists'})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: "User successfully registered"})
        } catch (e) {
            console.error(e);
            res.status(400).json({massage: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({massage: `Пользователь ${user} не найдет` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({massage: "Неверный пароль" })
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.error(e);
            res.status(400).json({massage: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            res.json("server worked")
        } catch (e) {
            console.error(e);
            res.status(400).json({massage: 'Registration error'})
        }
    }
}

// 22:25
export default new AuthController()