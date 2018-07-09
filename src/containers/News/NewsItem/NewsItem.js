import React from 'react';
import {Link} from "react-router-dom";


const NewsItem = (props) => {
    return (
        <div className="post_block">
            <Link className="img_read_more" to={`/post/${props.id}`}>
            <img src={props.imageURL} alt="img_news" className="img_news"/>
            </Link>
            <h1 className="post_capt">{props.title}</h1>
            <p className="post_text">{props.text}</p>
            <Link className="btn_read_more btn_form" to={`/post/${props.id}`}>Read more >>></Link>
        </div>
    );
};


export default NewsItem;
