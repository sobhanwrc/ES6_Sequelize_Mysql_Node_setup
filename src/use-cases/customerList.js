import db from '../../config/db'
const Customer = db.customers;

export default function customerList(){
    return async function getList() {
        const customerList = await Customer.findAll()
        
        let data = {}
        if(customerList.length > 0){
            return data = {
                isSuccess : true,
                data : customerList
            }
        }else{
            return data = {
                isSuccess : true,
                data : [],
                message : "No data found."
            }
        }
        
        
    }
}