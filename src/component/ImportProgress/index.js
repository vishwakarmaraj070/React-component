import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Progress from "../ProgressBar";
import { ReactComponent as CloudImage } from "./cloud-upload.svg";
import { ReactComponent as CheckImage } from "./check.svg";

const ImportProgress = props => {
  const {
    className,
    uploadingFiles,
    min,
    max,
    inQueue,
    totalProgress,
    color,
    progress,
    ...attriutes
  } = props;
  const percent = ((progress - min) / (max - min)) * 100;

  // style
  const importStyle = classnames(
    "r-import-progress",
    { [`import-progress-${color}`]: color },
    className
  );
  return (
    <div className={importStyle} {...attriutes}>
      <div
        className="progressbar"
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={min}
        aria-valuemax={max}
      ></div>
      <div className="import-label">
        <CloudImage />
        <p>Importing Files</p>
      </div>
      <div className="import-details">
        <span>
          <CheckImage />
          <p>{`Uploading Files | ${uploadingFiles} %`}</p>
        </span>
        <span>
          <CheckImage />
          <p>{`In Queue | ${inQueue} %`}</p>
        </span>
        <span>
          <CheckImage />
          <p>{`Processing | ${progress} %`}</p>
        </span>
      </div>
      <div className="import-progress">
        <Progress height="3px" value={totalProgress} />
      </div>
    </div>
  );
};

ImportProgress.defaultProps = {
  color: "secondary",
  max: 100,
  min: 0,
  uploadingFiles: 0,
  inQueue: 0,
  totalProgress: 10,
  progress: 50
};

ImportProgress.propTypes = {
  color: PropTypes.string,
  uploadingFiles: PropTypes.number,
  inQueue: PropTypes.number,
  totalProgress: PropTypes.number,
  progress: PropTypes.number
};

export default ImportProgress;
