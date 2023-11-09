// src/reducers/trackingReducer.js
const initialState = {
    trackingData: null,
    loading: false,
    error: null,
  };
  
  const Tracking = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRACKING_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TRACKING_SUCCESS':
        return { ...state, loading: false, trackingData: action.payload, error: null };
      case 'FETCH_TRACKING_FAILURE':
        return { ...state, loading: false, trackingData: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default Tracking;
  