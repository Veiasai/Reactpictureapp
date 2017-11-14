/**
 * Created by Veiasai on 2017/11/14.
 */

import React from 'react'
import {Link} from 'react-router'

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/"> Veiasai's sb app </Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main