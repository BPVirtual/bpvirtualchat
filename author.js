var mongoose = require('mongoose');
 
var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    biography: String
    
});
 
var Author = mongoose.model('Author', authorSchema);
 
module.exports = Author;