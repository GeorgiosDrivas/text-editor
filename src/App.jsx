import React from 'react';
import './App.css';
import AlignAction from './components/alignTextActions';
import FontsActions from './components/fontsActions';
import WeightActions from './components/weightActions';

function App() {

  const handleBoldText = (e) => {
    e.target.classList.toggle("activeButton");
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('bold');
    }
  };

  const handleItalicText = (e) => {
    e.target.classList.toggle("activeButton");
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('italic');
    }
  };

  const handleUnderlineText = (e) => {
    e.target.classList.toggle("activeButton");
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('underline');
    }
  };

  const handleLeftAlign = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('JustifyLeft');
    }
  };

  const handleCenterAlign = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('JustifyCenter');
    }
  };

  const handleRightAlign = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText !== '') {
      document.execCommand('JustifyRight');
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="row mb-5">
          <div className="col-12">
            <div className="title">
              <h1>Text Editor</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between'>
              <p>
                <FontsActions />
              </p>
              <p>
                <WeightActions
                  handleBoldText={handleBoldText}
                  handleItalicText={handleItalicText}
                  handleUnderlineText={handleUnderlineText}
                />
              </p>
              <p>
                <AlignAction
                  handleLeftAlign={handleLeftAlign}
                  handleCenterAlign={handleCenterAlign}
                  handleRightAlign={handleRightAlign}
                />
              </p>
            </div>
            <div id="textarea" className="text-start ps-1" contentEditable>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
