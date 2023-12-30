import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FontsActions = function () {

    function handleChange(event) {
        const selectedText = window.getSelection();
        const range = selectedText.getRangeAt(0);
        const fontValue = event.target.value;

        // Check if the selection is within a span tag
        let spanParent = range.commonAncestorContainer;
        while (spanParent.nodeName !== 'SPAN' && spanParent.parentNode) {
            spanParent = spanParent.parentNode;
        }

        // If the selection is within a span tag, modify its font size
        if (spanParent.nodeName === 'SPAN') {
            spanParent.style.fontSize = `${fontValue}px`;
        } else {
            // If not within a span tag, create a new span
            const span = document.createElement('span');
            span.style.fontSize = `${fontValue}px`;
            range.surroundContents(span);
        }
    }

    function handleFontFamilyChange(event) {
        const selectedText = window.getSelection();
        const range = selectedText.getRangeAt(0);
        const fontValue = event.target.value;

        // Check if the selection is within a span tag
        let spanParent = range.commonAncestorContainer;
        while (spanParent.nodeName !== 'SPAN' && spanParent.parentNode) {
            spanParent = spanParent.parentNode;
        }

        // If the selection is within a span tag, modify its font size
        if (spanParent.nodeName === 'SPAN') {
            spanParent.style.fontFamily = `${fontValue}`;
        } else {
            // If not within a span tag, create a new span
            const span = document.createElement('span');
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
                        onChange={handleFontFamilyChange}
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
                        onChange={handleChange}
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
    )
}

export default FontsActions;
