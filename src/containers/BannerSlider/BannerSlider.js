import React, {Component} from 'react';
import "./BannerSlider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderItem from "./BannerSliderItem/BannerSliderItem";
import axios from "../../axios_news";


class BannerSlider extends Component {
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
            console.log(newsItem);
        }
        this.setState({news});
    };

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let bannerNews = <div>Нет новостей</div>;
        if (this.state.news.length > 0) {
            bannerNews = this.state.news.map(bannerNews => (
                <BannerSliderItem
                    id={bannerNews.id}
                    key={bannerNews.id}
                    text={bannerNews.text}
                    title={bannerNews.title}
                    imageURL={bannerNews.imageURL}/>
            ))

        }
        return (
            <Slider {...settings} className="slider_wrap">
                {bannerNews}
            </Slider>
        );

    }

}

export default BannerSlider;