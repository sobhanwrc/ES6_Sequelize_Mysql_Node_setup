export default function customerCreateController({customerListUseCase}){
    return async function create (httpRequest){
        console.log(httpRequest.body, 'cointroller');
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const addData = await customerListUseCase()
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