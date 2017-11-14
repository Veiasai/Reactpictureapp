/**
 * Created by Veiasai on 2017/11/14.
 */
// a reducer takes in two things:

// 1.the action (info about what happend)
// 2. copy the current state
function posts(state = [], action) {
    "use strict";
    console.log(state, action);
    return state;
}

export  default  posts;