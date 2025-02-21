import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FontsActions = function () {
  function handleChange(event: SelectChangeEvent<string>) {
    const selectedText: any = window.getSelection();
    const range = selectedText.getRangeAt(0);
    const fontValue = event.target.value;

    let spanParent = range.commonAncestorContainer;
    while (spanParent.nodeName !== "SPAN" && spanParent.parentNode) {
      spanParent = spanParent.parentNode;
    }

    if (spanParent.nodeName === "SPAN") {
      spanParent.style.fontSize = `${fontValue}px`;
    } else {
      const span = document.createElement("span");
      span.style.fontSize = `${fontValue}px`;
      range.surroundContents(span);
    }
  }

  function handleFontFamilyChange(event: SelectChangeEvent<string>) {
    const selectedText: any = window.getSelection();
    const range = selectedText.getRangeAt(0);
    const fontValue = event.target.value;
    console.log(fontValue);
    let spanParent = range.commonAncestorContainer;
    while (spanParent.nodeName !== "SPAN" && spanParent.parentNode) {
      spanParent = spanParent.parentNode;
    }

    if (spanParent.nodeName === "SPAN") {
      spanParent.style.fontFamily = `${fontValue}`;
    } else {
      const span = document.createElement("span");
      span.style.fontFamily = `${fontValue}`;
      range.surroundContents(span);
    }
  }

  return (
    <>
      <div className="d-flex">
        <div className="font-family-select me-3">
          <Select
            defaultValue="Roboto"
            placeholder="Font family"
            onChange={(e) => handleFontFamilyChange(e)}
            sx={{
              width: 150,
              height: 40,
            }}
          >
            <MenuItem value="Josefin Sans">Josefin Sans</MenuItem>
            <MenuItem value="Montserrat">Montserrat</MenuItem>
            <MenuItem value="Roboto">Roboto</MenuItem>
            <MenuItem value="Teko">Teko</MenuItem>
          </Select>
        </div>
        <div className="font-size-select">
          <Select
            defaultValue="10"
            onChange={(e) => handleChange(e)}
            placeholder="Font Size"
            sx={{
              width: 70,
              height: 40,
            }}
          >
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="16">16</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="22">22</MenuItem>
            <MenuItem value="24">24</MenuItem>
            <MenuItem value="26">26</MenuItem>
            <MenuItem value="28">28</MenuItem>
            <MenuItem value="18">30</MenuItem>
            <MenuItem value="20">32</MenuItem>
            <MenuItem value="22">34</MenuItem>
            <MenuItem value="24">36</MenuItem>
            <MenuItem value="26">38</MenuItem>
            <MenuItem value="28">40</MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default FontsActions;
