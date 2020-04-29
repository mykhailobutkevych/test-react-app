import axios from "axios";

const apiRoot = "http://mr-test-backend.sadek.usermd.net/houses";

export const GET_HOUSES = "GET_HOUSES";
export const GET_HOUSE = "GET_HOUSE";
export const TRIGGER_GET_HOUSES = "TRIGGER_GET_HOUSES";

export function triggerGetHouses() {
  return {
    type: TRIGGER_GET_HOUSES,
  };
}

export function getHouses() {
  const request = axios.get(apiRoot);

  return (dispatch) => {
    request.then((r) => {
      dispatch({
        type: GET_HOUSES,
        payload: r.data,
      });
    });
  };
}

export function getHouse(id) {
  const request = axios.get(`${apiRoot}/${id}`);

  return (dispatch) => {
    request.then((r) => {
      dispatch({
        type: GET_HOUSE,
        payload: r.data,
      });
    });
  };
}

export function deleteHouse(id) {
  const request = axios.delete(`${apiRoot}/${id}`);

  return (dispatch) => {
    request.then((response) => {
      dispatch(triggerGetHouses());
    });
  };
}

export function addHouse(data) {
  return (dispatch) => axios.post(apiRoot, data);
}
