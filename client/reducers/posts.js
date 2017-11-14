/**
 * Created by Veiasai on 2017/11/14.
 */
// a reducer takes in two things:

// 1.the action (info about what happend)
// 2. copy the current state
function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES' :
        default:
            return state;
    }

}

export  default  posts;