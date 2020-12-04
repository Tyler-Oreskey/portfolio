import React, { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import classes from './Toast.module.css';

const Toast = (props) => {
    let [message, setMessage] = useState([props.message]);
    const [counter, setCounter] = useState(3);

    const transitions = useTransition(message, null, {
        from: { transform: "translate3d(0,-40px,0)" },
        enter: { transform: "translate3d(0,0px,0)" },
        leave: { opacity: 0, transition: "opacity .25s ease" }
    });

    useEffect(() => {
        if (counter === 0) {
            setMessage([]);
            if (props.toggleSuccessMessage !== undefined) {
                props.toggleSuccessMessage(false)
            }

        }
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter, props]);

    const styles = {
        error: {
            backgroundColor: 'red'
        },
        success: {
            backgroundColor: '#00bfff'
        }
    };

    const style = styles[props.type];

    const toastMessage = transitions.map(({ item, key, props }) => (
        <animated.div
            key={key}
            style={{ ...props, ...style }}
            className={classes.Toast}>
            {item}
        </animated.div>
    ));

    return (
        <Auxiliary>
            {toastMessage}
            {props.children}
        </Auxiliary>
    );
};

export default Toast;