import { GET_ALL_USER_INFO_REQUEST_SUCCESS } from "./action";

const INITIAL_STATE = {
    users: [],
    current_user :[],
    userDetails :[{}]
}

export default (state = INITIAL_STATE,action)=>{
   
    switch (action.type){
     
          case "SETCURRENT":
          return({
              ...state,
              current_user:action.payload
          })

          case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
            
      
            return {
                ...state,
              userDetails:action.payload
            };
          }
  }
    return state;

}
