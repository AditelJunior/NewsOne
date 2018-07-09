import React, {Component} from 'react';
import axios from '../../axios_news';
import NewsItem from "./NewsItem/NewsItem";
// import Home from "../Home/Home";
import "./News.css"
class News extends Component {
    state = {
        news: [],
    };
    componentDidMount() {
        this.getNewsList();
    }
    getNewsList = async () => {
        const news = [];
        let response = await axios.get("/posts.json");

        for(let key in response.data) {
            const newsItem = response.data[key];
            newsItem.id = key;
            news.push(newsItem);

        }

        this.setState({news});
    };


render() {

        let newsItem = 'Нет новостей';
        if (this.state.news.length > 0) {
            newsItem = this.state.news.map(newsItem => (
                <NewsItem
                    id={newsItem.id}
                    key={newsItem.id}
                    text={newsItem.text}
                    title={newsItem.title}
                    imageURL={newsItem.imageURL}/>
            ))
        }

        return (
            <section className="news_list section">
                <h1>Новости</h1>
                <div className="news_list">
                    {newsItem}
                </div>
            </section>
        );
    }
}

export default News;
