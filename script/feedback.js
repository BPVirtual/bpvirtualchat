var mongoose = require('mongoose');
 

var feedbackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cpf: String,
    nota: String
});
 
var Feedback = mongoose.model('Feedback', feedbackSchema);
 
exports.post = function (req, res) {
     
    var feedbacks = [];

    var item = { 
        cpf: req.body.cpf, 
        nota: req.body.nota
    };
         
    feedbacks.push(item);

    Feedback.create(feedbacks, function(err, documents) {
        if (err) throw err;
    });

    res.send(feedbacks.length + ' feed salvo.');
     
};

module.exports = Feedback;
