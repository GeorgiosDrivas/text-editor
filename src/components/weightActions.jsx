const WeightActions = ({ handleBoldText, handleItalicText, handleUnderlineText }) => {
    return (
        <>
            <button onClick={handleBoldText}>
                <i className="bi bi-type-bold"></i>
            </button>
            <button onClick={handleItalicText}>
                <i className="bi bi-type-italic"></i>
            </button>
            <button onClick={handleUnderlineText}>
                <i className="bi bi-type-underline"></i>
            </button>
        </>
    )
}

export default WeightActions;