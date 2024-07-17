export const handleJustify = (justify: string) => {
  const selection: any = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText !== "") {
    document.execCommand(justify);
  }
};
