const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

const createUser = async (req, res= response) => {
    const { correo } = req.body;
    
    try {        
        let usuario = await Usuario.findOne({ correo });
        
        if (usuario) {
            return res.status(400).json({
                ok: false,
                message: 'El correo ya existe'
            })
        }
        
        usuario = new Usuario(req.body); 
        await usuario.save();

        res.status(201).json({
            mensagge: 'Usuario Creado Correctamente',
            uid: usuario._id,
            nombre: usuario.nombre,
            ok: false,
        })        
        
    } catch (error) {
        console.log('error al crear usuario', error);
        res.status(500).json({
            ok: false,
            message: 'Error en el servidor'
        })
    }

    
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