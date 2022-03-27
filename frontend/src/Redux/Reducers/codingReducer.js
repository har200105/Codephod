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


export const addCodingReducer  = (state={},action)=>{
    switch(action.type){
        case 'ADD_CODING_REQ':
            return {
                ...state,
                loading:true,
                isAdded:false
            }
        case 'ADD_CODING_SUCCESS':
            return {
                coding:action.payload,
                loading:false,
                isAdded:action.payload
            }    

        case 'ADD_CODING_FAIL':
            return {
                loading:false,
                error:true,
                isAdded:false
            }
        default:
            return state           
    }
}


export const addWorkshopReducer  = (state={},action)=>{
    switch(action.type){
        case 'ADD_WORKSHOP_REQ':
            return {
                ...state,
                loading:true,
                isAdded:false
            }
        case 'ADD_WORKSHOP_SUCCESS':
            return {
                coding:action.payload,
                loading:false,
                isAdded:action.payload
            }    

        case 'ADD_WORKSHOP_FAIL':
            return {
                loading:false,
                error:true,
                isAdded:false
            }
        default:
            return state           
    }
}

