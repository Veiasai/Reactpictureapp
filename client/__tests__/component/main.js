/**
 * Created by Veiasai on 2017/11/19.
 */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import {  shallow, mount, render  } from 'enzyme'
import Main from '../../components/Main'


Enzyme.configure({ adapter: new Adapter() })

const props = {
    children : 1,
}

describe('Main component', () => {
    it('should render dom', () => {
        expect(shallow(<Main {...props}/>).find('Link').contains('这样如何')).toBe(true);
    })
})