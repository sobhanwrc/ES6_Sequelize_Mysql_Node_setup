import {
    customerCreateUseCase,
    customerListUseCase
} from '../use-cases'

import customerCreateController from './CustomerAddController'
import CustomerListController from './CustomerListController'

const CustomerCreate = customerCreateController({customerCreateUseCase})
const CustomerList = CustomerListController({customerListUseCase})

const userTypeController = Object.freeze({
    CustomerCreate,
    CustomerList
})

export default userTypeController

export {
    CustomerCreate,
    CustomerList
}