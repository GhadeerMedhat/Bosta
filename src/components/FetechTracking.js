// src/actions/trackingActions.js
import axios from 'axios';

const API_BASE_URL = 'https://tracking.bosta.co/shipments/track/';

export const fetchTracking = (trackingNumber) => async (dispatch) => {
  dispatch({ type: 'FETCH_TRACKING_REQUEST' });

  try {
    const response = await axios.get(`${API_BASE_URL}${trackingNumber}`);
    dispatch({ type: 'FETCH_TRACKING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRACKING_FAILURE', payload: error.message });
  }
};
