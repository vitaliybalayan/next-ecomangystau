import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import CategoryButton from '../CategoryButton/CategoryButton'

import classes from './ServiceSlider.module.sass'

class ServicesSlider extends Component {
    render() {
        const params = {
            spaceBetween: 30,
            slidesPerView: 2,
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 2,
                    watchOverflow: true
                }
            },
            onInit: (swiper) => {
                this.swiper = swiper
            }
        }

        return(
            <div className={classes.category_button}>
                <div className={'container'}>
                    <Swiper {...params}>
                        { this.props.data.map((link, index) => {
                            return <SwiperSlide key={index}><CategoryButton title={link.name} subtitle={link.subname} to={link.url} /></SwiperSlide> 
                        }) }
                    </Swiper>
                </div>
            </div>           
        )
    }

    componentDidUpdate() {
        this.swiper.update();
    }
}

export default ServicesSlider