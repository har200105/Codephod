export const getQAReducer  = (state={qa:[]},action)=>{

    switch(action.type){

        case 'GET_QA_REQ':
            return {
                ...state,
                loading:true
            }
            
        case 'GET_QA_SUCCESS':
            return {
                qa:action.payload,
                loading:false
            }    

        case 'GET_QA_FAIL':
            return {
                loading:false,
                error:true
            }  
            
        default:
            return state      

    }

}


export const addQAReducer  = (state={qa:[]},action)=>{

    switch(action.type){
        case 'ADD_QA_REQ':
            return {
                ...state,
                loading:true
            }
        case 'ADD_QA_SUCCESS':
            return {
                projects:action.payload,
                loading:false
            }    

        case 'ADD_QA_FAIL':
            return {
                loading:false,
                error:true
            }
        default:
            return state           
    }

}



export const getMyQAReducer  = (state={qa:[]},action)=>{

    switch(action.type){

        case 'GET_MY_QA_REQ':
            return {
                ...state,
                loading:true
            }
            
        case 'GET_MY_QA_SUCCESS':
            return {
                qa:action.payload,
                loading:false
            }    

        case 'GET_MY_QA_FAIL':
            return {
                loading:false,
                error:true
            }  
            
        default:
            return state      

    }

}