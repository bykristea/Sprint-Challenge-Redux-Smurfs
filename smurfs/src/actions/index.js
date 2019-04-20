/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURFS_START = 'ADD_SMURFS_FAIL';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_FAIL';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL';



export const addSmurf = (addSmurf) => dispatch => {
  dispatch({type: ADD_SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', addSmurf)
    .then(response => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(err => {
      dispatch({type: ADD_SMURFS_FAIL, error:'Smurf ran away...better go get em.'})
    })
}

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
  .get('http://localhost:3333/smurfs')
  .then(response =>
    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data.results }))
    .catch(err => dispatch({type: FETCH_SMURFS_FAIL, error: 'Smurfs will be smurfs..try again'}))
}