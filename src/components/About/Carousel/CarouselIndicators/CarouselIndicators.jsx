import React from "react";

import classes from "./CarouselIndicators.module.css";

const CarouselIndicators = (props) => {
    let indicatorStyles = {
        active: {
            backgroundColor: 'white',
        },
        inactive: {
            backgroundColor: '#B3B3B3'
        }
    };

    const carouselIndicators = Array(props.carouselLength).fill().map((_, index) => {
        let indicatorStyle;

        if (props.currentSlide === index) {
            indicatorStyle = indicatorStyles.active;
        } else {
            indicatorStyle = indicatorStyles.inactive;
        }

        return (
            <li
                key={index}
                onClick={() => props.selected(index)}
                style={indicatorStyle}
                className={classes.HighlightedCircles}>
            </li>
        )
    });

    return (
        <div className={`${classes.CarouselIndicators}`}>
            <ol className={`carousel-indicators`}>
                {carouselIndicators}
            </ol>
        </div>
    );
};

export default CarouselIndicators;