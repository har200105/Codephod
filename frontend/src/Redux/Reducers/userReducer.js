export const getUserReducer  = (state={user:{}},action)=>{

    switch(action.type){

        case 'GET_USER_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_USER_SUCCESS':
            return {
                user:action.payload,
                loading:false
            }    

        case 'GET_USER_FAIL':
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
        case 'GET_MY_POSTS_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_MY_POSTS_SUCCESS':
            return {
                qa:action.payload,
                loading:false
            }    

        case 'GET_MY_POSTS_FAIL':
            return {
                loading:false,
                error:true
            }  
        default:
            return state         
    }

}