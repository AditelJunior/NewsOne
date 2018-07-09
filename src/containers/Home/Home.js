import React, {Component} from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import axios from "../../axios_news";
import NewsItem from "../News/NewsItem/NewsItem";
import "./Home.css"

class Home extends Component {
    state = {
        news: [],
    };
    componentDidMount() {
        this.getNewsList();
    }

    getNewsList = async () => {
        const news = [];
        let count = 3;
        let response = await axios.get("/posts.json");



        let objKeys = Object.keys(response.data);
        objKeys.reverse();

        if (objKeys.length < 3) {
            count = objKeys.length;
        }

        for (let i = 0; i < count; i++) {
            const post = response.data[objKeys[i]];

            post.id = objKeys[i];
            news.push(post);
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
            <section className="home_block section">
                <BannerSlider/>
                <div className="news_list">
                    <h1>Новости</h1>
                    {newsItem}
                </div>


            </section>
        );
    }
}

export default Home;
