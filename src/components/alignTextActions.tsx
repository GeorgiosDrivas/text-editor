import React, { MouseEvent } from "react";

interface T {
  handleJustify: (e: MouseEvent<HTMLButtonElement>, x: string) => void;
}

const AlignAction = ({ handleJustify }: T) => {
  return (
    <>
      <button onClick={(e) => handleJustify(e, "JustifyLeft")}>
        <i className="bi bi-justify-left"></i>
      </button>
      <button onClick={(e) => handleJustify(e, "JustifyCenter")}>
        <i className="bi bi-justify"></i>
      </button>
      <button onClick={(e) => handleJustify(e, "JustifyRight")}>
        <i className="bi bi-justify-right"></i>
      </button>
    </>
  );
};

export default AlignAction;
