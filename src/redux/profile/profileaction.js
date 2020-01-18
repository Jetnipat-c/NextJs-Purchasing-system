import { ADD_INFO } from "./types";

export function addinformation(data) {
  return function(dispatch) {
    console.log("้ข้อมูลที่จะเก็บลง Store"+data);
    dispatch({  type:ADD_INFO,
      payload: data});
  };
}


