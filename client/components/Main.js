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
                    <Link to="/"> Reduxstagram </Link>
                </h1>
            </div>
        )
    }
})

export default Main