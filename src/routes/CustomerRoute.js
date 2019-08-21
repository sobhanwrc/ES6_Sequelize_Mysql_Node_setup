import makeCallback from '../express-callback'

import{
    CustomerCreate,
    CustomerList
} from '../controllers'

const routes = (app) => {
    // Create a new Customer
    app.post('/api/customersAdd', makeCallback(CustomerCreate));
    app.get('/api/customersList', makeCallback(CustomerList))
}


export default routes



// module.exports = function(app) {
 
//     const customers = require('../controllers/CustomController');
 
//     // Create a new Customer
//     app.post('/api/customers', customers.create);
 
//     // Retrieve all Customer
//     app.get('/api/customers', customers.findAll);
 
//     // Retrieve a single Customer by Id
//     app.get('/api/customers/:customerId', customers.findById);
 
//     // Update a Customer with Id
//     app.put('/api/customers/:customerId', customers.update);
 
//     // Delete a Customer with Id
//     app.delete('/api/customers/:customerId', customers.delete);
// }