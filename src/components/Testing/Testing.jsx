import React from 'react'
// import style from "./Testing.module.scss"


const Testing = (props) => {
    const {bgcolor, completed } = props;

    const containerStyles = {
        height: 8,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>
                    {/* {`${completed}%`} */}
                
                </span>
            </div>
        </div>
    );
};

export default Testing;
