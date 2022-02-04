export const getCodingReducer  = (state={coding:[]},action)=>{
    switch(action.type){
        case 'GET_CODING_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_CODING_SUCCESS':
            return {
                coding:action.payload,
                loading:false
            }    

        case 'GET_CODING_FAIL':
            return {
                loading:false,
                error:true
            }
        default:
            return state        
    }
}


export const addCodingReducer  = (state={coding:[]},action)=>{
    switch(action.type){
        case 'ADD_CODING_REQ':
            return {
                ...state,
                loading:true
            }
        case 'ADD_CODING_SUCCESS':
            return {
                coding:action.payload,
                loading:false
            }    

        case 'ADD_CODING_FAIL':
            return {
                loading:false,
                error:true
            }
        default:
            return state           
    }
}