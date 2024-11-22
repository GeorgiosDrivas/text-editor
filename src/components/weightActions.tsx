import React, { MouseEvent } from "react";

interface T {
  handleWeight: (e: MouseEvent<HTMLButtonElement>, x: string) => void;
}

const WeightActions = ({ handleWeight }: T) => {
  return (
    <>
      <button onClick={(e) => handleWeight(e, "bold")}>
        <i className="bi bi-type-bold"></i>
      </button>
      <button onClick={(e) => handleWeight(e, "italic")}>
        <i className="bi bi-type-italic"></i>
      </button>
      <button onClick={(e) => handleWeight(e, "underline")}>
        <i className="bi bi-type-underline"></i>
      </button>
    </>
  );
};

export default WeightActions;
