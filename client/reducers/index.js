/**
 * Created by Veiasai on 2017/11/14.
 */

import { combineReducers } from 'redux'
import { routerReducer }from 'react-router-redux';
import posts from './posts';
import comments from './comments'

const rootReducer = combineReducers({comments, posts,  routing: routerReducer});

export default  rootReducer;