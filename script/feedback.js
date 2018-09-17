var mongoose = require('mongoose');
 
var feedbackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    nota: String
});
 
var Feedback = mongoose.model('Feedback', feedbackSchema);
 
module.exports = Feedback;
