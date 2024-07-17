import React from 'react';

interface T {
    handleJustify: (x: string) => void
}

const AlignAction = ({ handleJustify }: T) => {

    return (
      <>
        <button onClick={() => handleJustify("JustifyLeft")}>
          <i className="bi bi-justify-left"></i>
        </button>
        <button onClick={() => handleJustify("JustifyCenter")}>
          <i className="bi bi-justify"></i>
        </button>
        <button onClick={() => handleJustify("JustifyRight")}>
          <i className="bi bi-justify-right"></i>
        </button>
      </>
    );
}

export default AlignAction;