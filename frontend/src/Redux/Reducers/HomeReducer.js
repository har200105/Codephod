export const workShopReducer = (state={workshops:[]},action)=>{
    
    switch(action.type){
        case 'GET_WORKSHOPS_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_WORKSHOPS_SUCCESS':
            return{
                workshops:action.payload,
                loading:false
            } 
        case 'GET_WORKSHOPS_FAIL':
            return {
                loading:false,
                error:true
            }      
        default:
            return state;     
    }

}

export const opportunityReducer = (state={opportunities:[]},action)=>{
    
    switch(action.type){
        case 'GET_OPPORTUNITIES_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_OPPORTUNITIES_SUCCESS':
            return{
                opportunities:action.payload,
                loading:false
            } 
        case 'GET_OPPORTUNITIES_FAIL':
            return {
                loading:false,
                error:true
            }      
        default:
            return state;     
    }
    
}