const noteController = require('../controllers/notes');
let path = require('path');

module.exports = function(app) {
    app.get('/all', function(request,response) {
      noteController.index(request, response);
    });

    app.post('/create', function(request, response) {
      noteController.create (request, response);
    });

    app.post('/:id/delete', function(request, response) {
      noteController.delete(request, response);
    })
    
    app.all("*", (request,response) => {
      response.sendFile(path.resolve("angular-app/dist/index.html"))
    })
}