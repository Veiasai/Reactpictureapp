/**
 * Created by Veiasai on 2017/11/19.
 */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import {  shallow, mount, render  } from 'enzyme'
import Comment from '../../components/Comments'


Enzyme.configure({ adapter: new Adapter() })

const props = {
    postComments: [
        {
            "text":"1",
            "user": "5"
        }
    ],
    onClick : jest.fn(),
    removeComment: jest.fn(),
    params: {postID : 1}
}

describe('Comment component', () => {
    it('should render dom', () => {
        expect(shallow(<Comment {...props}/>).is('.comments')).toBe(true);
    })
})