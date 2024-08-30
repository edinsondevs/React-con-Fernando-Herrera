const { Schema, model } = require("mongoose");

const EventoSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    notes : {
        type: String,
    },
    start : {
        type: Date,
        required: true
    },
    end : {
        type: Date,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,  //  Schema.Types.ObjectId indica a moongose que es una referencia
        ref: 'Usuario',               // La referencia a la tabla Usuario
        required: true
    }
});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Evento',EventoSchema);
