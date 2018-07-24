export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then ) {
    return next(action)
  }

  action.payload
  .then((response) => {
    const newAction = { ...action, payload: response.data }
    dispatch(newAction);
  })
  .catch((error) => {
    const newAction = { ...action, payload: error, error: true }
    dispatch(newAction);
  });
}
