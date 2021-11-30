import {DATA_ERROR, GET_DATA, DATA_LOADING_STARTS, DATA_LOADING_ENDS} from './types'
import axios from 'axios'

export const getData = () => {
    return async(dispatch) => {
        try {
            dispatch({ type: DATA_LOADING_STARTS })
            const response = await axios.get(url);
                
            dispatch({type:GET_DATA, payload:response.data})
                dispatch({ type: DATA_LOADING_ENDS });
                // dispatch({ type: REDIRECT_TO, payload: ROUTES.LOGIN })          
            
          //  dispatch(clearNetworkStats())
          dispatch({type:DATA_LOADING_ENDS})
        } catch (error) {
       
            dispatch({type:DATA_LOADING_ENDS})
            dispatch({type:DATA_ERROR})
            // if(error.response.status === 500) {
            //     dispatch({ type: GET_ERROR_STATUS_CODE, payload: error.response.status })
            // }
            // dispatch({ type: GET_AUTH_ERRORS, payload: error });
        }
      //  dispatch({ type: CLEAR_NETWORK_STATS })
    }
}






