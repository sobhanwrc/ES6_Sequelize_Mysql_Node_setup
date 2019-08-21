import db from '../../config/db'
const Customer = db.customers;

export default function customerCreate (){
    return async function create (data){
        // Save to MySQL database
        const addData = await Customer.create({
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age
        })

        if(addData != null){
            return data = {
                isSuccess : true
            }
        }
    }
}