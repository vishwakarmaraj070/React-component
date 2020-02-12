import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { ReactComponent as DownArrow } from "./down-arrow.svg";
import { ReactComponent as CloudUpload } from "./cloud-upload.svg";
import Progress from "../ProgressBar";
import Button from "../Button";

const DragAndDrop = props => {
  const { className, onClick, onChange, progressValue, ...attributes } = props;

  const [dropFiles, setDropFiles] = useState([]);

  const dragAndDropStyle = classnames("r-drag-drop", {
    "drop-over": dropFiles.length
  });

  // function
  const handleDragOver = e => {
    e.preventDefault();
    let dargDrop = document.querySelector(".r-drag-drop");
    dargDrop.classList.add("drop-over");
  };

  const handlEDragLeave = e => {
    e.preventDefault();
    let dargDrop = document.querySelector(".r-drag-drop");
    dargDrop.classList.remove("drop-over");
  };

  const startUpLoading = files => {
    let fileObj = [];
    // file array
    for (let index = 0; index < files.length; index++) {
      fileObj.push(files[index]);
    }
    setDropFiles(fileObj);
  };

  const handleDrop = (e, files) => {
    e.preventDefault();
    onChange && onChange(e, files);
    startUpLoading(files);
  };

  const handleUploadFile = e => {
    onClick && onClick(e, dropFiles);
  };

  const handleClose = e => {
    e.preventDefault();
    setDropFiles([]);
  };

  return (
    <div>
      <label
        htmlFor="file"
        id="drop-zone"
        onDrop={e => handleDrop(e, e.dataTransfer.files)}
        onDragOver={e => handleDragOver(e)}
        onDragLeave={e => handlEDragLeave(e)}
        className={dragAndDropStyle}
        {...attributes}
      >
        {/* input */}
        <input
          type="file"
          id="file"
          multiple
          className="drop-zone"
          onChange={e => handleDrop(e, e.target.files)}
        />
        {/* placeholder */}
        {!dropFiles.length && (
          <div className="drop-box-center">
            <p>Drag And Drop File here</p>
            <DownArrow />
          </div>
        )}
        {/* drop file container */}
        <div className="drop-file-container" onClick={e => e.preventDefault()}>
          {dropFiles.length > 0 &&
            dropFiles.map((file, index) => (
              <div key={index} className="drop-file-box">
                <div className="file-image"></div>
                <div className="file-name">
                  <p>{file.name}</p>
                </div>
              </div>
            ))}
        </div>
        {/* progress bar */}
        <div className="progress-wrapper">
          {dropFiles.length > 0 && (
            <Progress value={progressValue}>{progressValue}%</Progress>
          )}
        </div>
      </label>
      <div>
        <div className="mt-1">
          <Button onClick={handleUploadFile}>
            <CloudUpload style={{ marginRight: "15px" }} />
            Upload file from computer
          </Button>
          <Button color="close" onClick={handleClose}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};
DragAndDrop.defaultProps = {
  progressValue: 0
};

DragAndDrop.propTypes = {
  progressValue: PropTypes.number
};

export default DragAndDrop;
