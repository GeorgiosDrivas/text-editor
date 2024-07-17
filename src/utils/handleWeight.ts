import { MouseEvent } from "react";

export const handleWeight = (e: MouseEvent<HTMLButtonElement>, util: string) => {
  e.currentTarget.classList.toggle("activeButton");
  const selection: any = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText !== "") {
    document.execCommand(util);
  }
};
