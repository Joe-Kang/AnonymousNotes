const Note = require('mongoose').model('Note');
module.exports = {
    index(request, response) {
        Note.find({}, function(err, results) {
            if(err) {
                console.log(err);
                response.json({message: "Error in find"});
            } else {
                response.json(result);
            }
        })
    },
    create(request, response) {
        console.log(request.body);
        Note.create(request.body, function(err, results) {
            if(err) {
                console.log(err);
                response.json({message: "Error in create"});
            } else {
                response.json(result);
            }
        })
    },
    delete(request, response) {
        Note.remove({_id: request.params.id }, function(err, result) {
            if(err) {
                console.log(err);   
                response.json({message: "Error in delete"});
            } else {
                response.json(result);
            }
        }) 
    }
};
