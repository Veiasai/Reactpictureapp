/**
 * Created by Veiasai on 2017/11/20.
 */
import reducer from '../../reducers/posts'

describe('posts reducer', ()=> {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })
    
    it('should handle INCREMENT_LIKES', ()=> {
        expect(
            reducer([{likes:1},{likes:2},{likes:3}],
                {
                    type: 'INCREMENT_LIKES',
                    index:0
                }
        )).toEqual(
            [
                {likes:2},{likes:2},{likes:3}
            ]
        )
    })
})