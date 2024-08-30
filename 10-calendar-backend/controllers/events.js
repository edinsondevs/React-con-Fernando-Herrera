const { response } = require('express');
const Evento = require('../models/Events');
const Usuario = require('../models/Usuario');

const getEventos = async ( req, res= response ) => {
    let eventos = await Evento.find({});
    
    if(!eventos){
        return res.status(400).json({
            ok: false,
            msg: 'Error en la consulta'
        })
    }
    res.json({
        ok: true,
        msg: eventos
    })
}


const createEvento = async (req, res= response) => {
    // Asegurarme que tengo el evento
    let evento = new Evento(req.body);
    try {
        
        evento.user = evento._id;
        const eventoCreado = await evento.save();

        res.status(201).json({
            ok: true,
            data: eventoCreado,
            msg: 'Evento creado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el evento'
        })
        
    }
}

// {
//     ok: true,
//     msg: 'updateEvento'
// }
const updateEvento = (req, res= response) => {
    res.json({
        ok: true,
        msg: 'updateEvento'
    })
}

// {
//     ok: true,
//     msg: 'deleteEvento'
// }
const deleteEvento = ( req, res= response) => {
    res.json({
        ok: true,
        msg: 'deleteEvento'
    })
}


module.exports = {
    getEventos,
    createEvento,
    updateEvento,
    deleteEvento
}