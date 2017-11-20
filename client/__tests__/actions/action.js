/**
 * Created by Veiasai on 2017/11/20.
 */
import * as actions from '../../actions/actionCreators'

describe('actions', () => {
    it('should create an action to increase likes', () => {
        const index = 1;
        const expectedAction = {
            type: 'INCREMENT_LIKES',
            index
        }
        expect(actions.increment(index)).toEqual(expectedAction)
    })
    it('should create an action to add Comment', () => {
        const {postId, author, comment} = {postId:1,author:1,comment:1}
        const expectedAction = {
            type: 'ADD_COMMENT',
            postId,
            author,
            comment
        }
        expect(actions.addComment(postId,author,comment)).toEqual(expectedAction)
    })

    it('should create an action to remove comment', () => {
        const {i, postId} = {i:1,postId:1}
        const expectedAction = {
            type: 'REMOVE_COMMENT',
            i,
            postId
        }
        expect(actions.removeComment(i,postId)).toEqual(expectedAction)
    })

})