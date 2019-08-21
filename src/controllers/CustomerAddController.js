// const db = require('../../config/db');
// const Customer = db.customers;
 
// // Post a Customer
// exports.create = (req, res) => {  
//   // Save to MySQL database
//   Customer.create({  
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     age: req.body.age
//   }).then(customer => {    
//     // Send created customer to client
//     res.send(customer);
//   });
// };
 
// // FETCH all Customers
// exports.findAll = (req, res) => {
//   Customer.findAll().then(customers => {
//     // Send all customers to Client
//     res.send(customers);
//   });
// };
 
// // Find a Customer by Id
// exports.findById = (req, res) => {  
//   Customer.findById(req.params.customerId).then(customer => {
//     res.send(customer);
//   })
// };
 
// // Update a Customer
// exports.update = (req, res) => {
//   const id = req.params.customerId;
//   Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
//            { where: {id: req.params.customerId} }
//            ).then(() => {
//            res.status(200).send("updated successfully a customer with id = " + id);
//            });
// };
 
// // Delete a Customer by Id
// exports.delete = (req, res) => {
//   const id = req.params.customerId;
//   Customer.destroy({
//     where: { id: id }
//   }).then(() => {
//     res.status(200).send('deleted successfully a customer with id = ' + id);
//   });
// };


export default function customerCreateController({customerCreateUseCase}){
    return async function create (httpRequest){
        console.log(httpRequest.body);
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const addData = await customerCreateUseCase(httpRequest.body)
            if(addData.isSuccess == true) {
                return {
                    headers,
                    body: addData
                }
            }else{
                return {
                    headers,
                    body: addData
                }
            }
        }catch(e) {
            return {
                headers,
                body: {
                    error: e.message
                }
            }
        }
    }
}