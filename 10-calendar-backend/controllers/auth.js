const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res= response) => {
    const { usuario, edad, direccion, telefono, correo, contrasena  } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    };
    res.status(201).json({
        user: {
            usuario,
            edad,
            direccion,
            telefono,
            correo,
            contrasena
        },
        mensagge: 'createUser',
        ok: false,
    })
    
};

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        message: 'renew'
    })
};

const loginUser = (req, res= response) => {
    const { usuario, edad, direccion, telefono, contrasena  } = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    };

    res.json({
        ok: true,
        message: 'login',
        user: {
            usuario,
            edad,
            direccion,
            telefono,
            contrasena
        }
    })
};

module.exports = {
    createUser,
    renewToken,
    loginUser
}