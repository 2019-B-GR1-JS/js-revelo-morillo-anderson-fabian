/**
 * CabeceraCarrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    estado: {
      type: 'string'
    },
    fecha: {
      type: 'string'
    },
    total: {
      type: 'number'
    },
    direccion: {
      type: 'string'
    },
    idUsuario: {
      model: 'usuario',
      required: false
    },
    detallesCarrito: {
      collection: 'detalleCarrito',
      via: 'idCabeceraCarrito'
    }

  },

};

