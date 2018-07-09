import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from '../../axios_news';
import "../News/News.css"

class FullNewsItem extends Component {
    state = {
        currentPost: {}
    };


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get('/posts/' + id + '.json').then(response => {
            const currentPost = response.data;
            currentPost.id = id;

            this.setState({currentPost});
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <section className="full_news_item section">
                <h1>{this.state.currentPost.title}</h1>
                <img src={this.state.currentPost.imageURL} alt={this.state.currentPost.title} className='img_news'/>
                <div dangerouslySetInnerHTML={{__html: this.state.currentPost.fullText}} className="full_text_in_full_post"/>
                <Link to={`/post/${this.state.currentPost.id}/edit`} className="btn_edit">Редактировать</Link>
            </section>
        );
    }
}

export default FullNewsItem;
