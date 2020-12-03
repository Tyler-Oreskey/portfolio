import React from 'react';

import classes from './Spinner.module.css';

const Spinner = (props) => {
    const styles = {
        medium: {
            fontSize: '3px'
        }
    };

    return <div style={styles[props.size]} className={classes.Spinner}></div>;
};

export default Spinner;