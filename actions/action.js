
const FETCH_PENDING = "FETCH_ITEMS_PENDING";
const FETCH_SUCCESS = "FETCH_ITEMS_SUCCESS";
const FETCH_ERROR = "FETCH_ITEMS_ERROR";

const fetchItemsPending = () => ({ type: FETCH_PENDING })

const fetchItemsSuccess = (data) => ({ type:FETCH_SUCCESS, payload: data  })

const fetchItemsError = () => ({ type: FETCH_ERROR }) 


export { 
  FETCH_PENDING, 
  FETCH_SUCCESS, 
  FETCH_ERROR, 
  fetchItemsPending, 
  fetchItemsSuccess, 
  fetchItemsError 
}