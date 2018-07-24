import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export default (state = [], action) => {
   switch(action.type){
     case SAVE_COMMENT:
       return [...state, action.payload ]
     case FETCH_COMMENTS:
       if (!action.error) {
         return [...state, ...action.payload.map(comment => comment.name)]
      } else {
        return state
      }
     default:
       return state;
   }
}
