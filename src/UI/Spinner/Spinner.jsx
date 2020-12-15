import React from 'react';

const Spinner = (props) => {
    const size = {
        small: "spinner-border-sm",
        medium: "spinner-border-md"
    };

    return (
        <div className={`${size[props.size]} spinner-border text-light`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Spinner;