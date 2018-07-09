import React from 'react';

const BannerSliderItem = (props) => {

    return (
        <div className="banner_slide_item" style={{backgroundImage: "url(" + props.imageURL + ")"}}>
            <div className="transparent_layer">
            <h1 className="banner_capt">{props.title}</h1>
               <p className="banner_text">
                   {props.text}
               </p>
            </div>
        </div>
    );
};

export default BannerSliderItem;
