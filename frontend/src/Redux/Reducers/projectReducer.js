export const getProjectsReducer  = (state={projects:[]},action)=>{

    switch(action.type){

        case 'GET_PROJECTS_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_PROJECTS_SUCCESS':
            return {
                projects:action.payload,
                loading:false
            }    

        case 'GET_PROJECTS_FAIL':
            return {
                loading:false,
                error:true
            }    
        default:
            return state 
    }

}


export const deleteProjectsReducer  = (state={},action)=>{

    switch(action.type){

        case 'DELETE_PROJECTS_REQ':
            return {
                ...state,
                loading:true
        }
        
        case 'DELETE_PROJECTS_SUCCESS':
            return {
                success:true,
                loading:false
        }    

        case 'DELETE_PROJECTS_FAIL':
            return {
                loading:false,
                error:true
        }    
        
        default:
            return state;
        
    }

}






export const addProjectsReducer  = (state={projects:[]},action)=>{

    switch(action.type){
        case 'ADD_PROJECTS_REQ':
            return {
                ...state,
                loading:true
            }
        case 'ADD_PROJECTS_SUCCESS':
            return {
                projects:action.payload,
                loading:false
            }    

        case 'ADD_PROJECTS_FAIL':
            return {
                loading:false,
                error:true
            }    
        default:
            return state     
    }
}


export const addProjectCommentReducer  = (state={},action)=>{

    switch(action.type){
        case 'ADD_COMMENT_PROJECT_REQ':
            return {
                ...state,
                loading:true
            }
        case 'ADD_COMMENT_PROJECT_SUCCESS':
            return {
                success:action.payload,
                loading:false
            }    

        case 'ADD_COMMENT_PROJECT_FAIL':
            return {
                loading:false,
                error:true
            }    
        default:
            return state     
    }
}





export const addReplyReducer = (state={},action)=>{

    switch(action.type){
        
        case 'REPLY_PROJECT_COMMENT_REQUEST':
          
            return {
                ...state,
                loading:true
            }
        
        case 'REPLY_PROJECT_COMMENT_SUCCESS':
           
            return {
                success:true,
                loading:false
            }    

        case 'REPLY_PROJECT_COMMENT_FAIL':
        
            return {
                loading:false,
                error:true
            }    
        
        default:
            return state     
    }
}

