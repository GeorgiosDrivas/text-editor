import React from 'react';

const AlignAction = ({ handleLeftAlign, handleCenterAlign, handleRightAlign }) => {

    return (
        <>
            <button onClick={handleLeftAlign}>
                <i className="bi bi-justify-left"></i>
            </button>
            <button onClick={handleCenterAlign}>
                <i className="bi bi-justify"></i>
            </button>
            <button onClick={handleRightAlign}>
                <i className="bi bi-justify-right"></i>
            </button>
        </>
    )
}

export default AlignAction;