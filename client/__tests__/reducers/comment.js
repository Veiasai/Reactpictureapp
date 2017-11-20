/**
 * Created by Veiasai on 2017/11/20.
 */

import reducer from '../../reducers/comments'

describe('comment reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('should handle ADD_COMMENT', () => {
        expect(
            reducer({ 0:{}}, {
                type: 'ADD_COMMENT',
                author: 'test1',
                comment: 'test2',
                postId: 0
            })
        ).toEqual({
                "0": [
                    {
                        user: 'test1',
                        text: 'test2'
                    }]
            }
        )
        expect(
            reducer(
                {0:
                    [{
                        user: 'test1',
                        text: 'test2'
                    }
                    ]},
                {
                    type: 'ADD_COMMENT',
                    author: 'test3',
                    comment: 'test4',
                    postId: 0

                }
            )
        ).toEqual({"0" :[
            {
                user: 'test1',
                text: 'test2'
            },
            {
                user: 'test3',
                text: 'test4'
            }]}
        )
    })

    it('should handle REMOVE COMMENT', ()=> {
        expect(
            reducer(
                {0:
                    [{
                        user: 'test1',
                        text: 'test2'
                    }
                    ]},
                {
                    type: 'REMOVE_COMMENT',
                    i:0,
                    postId: 0
                }
            )
        ).toEqual({0:[]})
    })
})