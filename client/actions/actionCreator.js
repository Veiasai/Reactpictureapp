/**
 * Created by Veiasai on 2017/11/14.
 */

// increment
export function increment(index) {
    "use strict";
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment){
    "use strict";
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, i) {
    "use strict";
    return {
        type:'REMOVE_COMMENT',
        i,
        postId
    }
}