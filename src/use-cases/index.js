import customerCreate from '../use-cases/customerCreate'
import customerList from '../use-cases/customerList'

const customerCreateUseCase = customerCreate()
const customerListUseCase = customerList()

const testService = Object.freeze({
    customerCreateUseCase,
    customerListUseCase
})

export default testService

export {
    customerCreateUseCase,
    customerListUseCase
}