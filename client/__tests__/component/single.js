/**
 * Created by Veiasai on 2017/11/19.
 */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import {  shallow, mount, render  } from 'enzyme'
import Single from '../../components/Single'


Enzyme.configure({ adapter: new Adapter() })

const props = {
    posts: {"code":"a",
        "caption":"小精灵牛逼",
        "likes":56,
        "id":"1161022966406956503",
        "display_src":"https://raw.githubusercontent.com/Veiasai/pictures/master/%E5%B0%8F%E7%B2%BE%E7%81%B5%E5%8D%A1%E5%A2%99.png",
        findIndex: jest.fn(() => {0}),
    },
    comments: {"a" : [
        {
            "text":"动漫",
            "user": "Veia"
        }]
    },
    params: {postID : "a"},
}

describe('Single component', () => {
    it('should render dom', () => {
        expect(shallow(<Single {...props}/>).is('.single-photo')).toBe(true);
    })
})