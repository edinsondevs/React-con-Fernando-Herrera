/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const router = Router()
const { createUser, renewToken, loginUser } = require('../controllers/auth')
const { check } = require('express-validator')

router.post(
    '/register',
    [
        check('usuario', 'El usuario es obligatorio').not().isEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('edad', 'La edad es obligatoria').not().isEmpty(),
        check('direccion', 'La direccion es obligatoria').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('contrasena', 'La contraseña debe ser minimo de 6 caracteres').isLength({ min: 6 })
        
    ], // middlewares
    createUser)
    
    router.post(
    '/',
    [
        check('usuario', 'El usuario es obligatorio').not().isEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('contrasena', 'La contraseña debe ser minimo de 6 caracteres').isLength({ min: 6 })
    ],
    loginUser)

router.get('/renew', renewToken)


module.exports = router