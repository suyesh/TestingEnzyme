import tv4 from 'tv4'
import stateSchema from 'middleWares/stateSchema'

export default ({ dispatch, getState }) => next => action => {
  next(action);
  const result = tv4.validateResult(getState(), stateSchema)
  if (result.valid) {
    console.warn('Invalid State: =>', result)
  }
}
