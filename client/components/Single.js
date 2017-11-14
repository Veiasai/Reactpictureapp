/**
 * Created by Veiasai on 2017/11/14.
 */
import React from 'react'
import Photo from './Photo'
import Comments from './Comments'


const Single = React.createClass({
    render() {
        const i = this.props.posts.findIndex(
            (post) => post.code === this.props.params.postId );
        const post = this.props.posts[i];
        console.log(post);
        console.log(this.props.comments);
        //const postComments = this.props.comments[postId] || [];
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}/>
            </div>
        )
    }
});

export default Single