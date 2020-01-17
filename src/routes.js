const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
// index, show, store, update, destroy

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index )

routes.put('/devs/:id', DevController.update)

routes.delete('/devs/:id', DevController.destroy)

module.exports = routes;