import { MouseEvent } from "react";

export const handleJustify = (
  e: MouseEvent<HTMLButtonElement>,
  justify: string
) => {
  e.currentTarget.classList.toggle("activeButton");
  const selection: any = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText !== "") {
    document.execCommand(justify);
  }
};
