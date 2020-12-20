import Head                 from 'next/head'
import React, {Component}   from 'react'
import Slider               from "react-slick";
import Slide                from "./Slide/Slide";
import classes              from './MainSlider.module.sass'

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    customPaging: i => (
        <div className={'dot'}></div>
    )
};

class MainSlider extends Component {
    render() {
        return(
            <>
                <Head>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <Slider {...sliderSettings}>
                    { this.props.data.map((slide, index) => {
                        return <div className={classes.slide} key={index}><Slide data={slide} /></div>
                    }) }
                </Slider>
            </>
        )
    }
}

export default MainSlider