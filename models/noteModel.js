const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
      title: {type: String, default:'Untitled'},
      body: {type: String, require}
},{
      timestamps: true,
})

const noteModel = mongoose.model('notes', noteSchema)

module.exports = noteModel