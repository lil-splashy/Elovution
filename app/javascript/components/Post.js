
import React, { Component } from 'react';

const Post = (props) => {
    console.log(props);
    const postList = props.post.map((Post) => {
        return (
            <ul>
                <li key={Post._id}>
                    <span>{Post.title}</span><br />
                    <span>{Post.date}</span><br />
                    <span>{Post.body}</span><br />
                    <button onClick={props.deletePost.bind(null, Post._id)}>Delete</button>
                    <button onClick={props.showModal.bind(null, Post)}>Edit</button>
                </li>
            </ul>
        )
    });
    return postList;
}

export default Post;