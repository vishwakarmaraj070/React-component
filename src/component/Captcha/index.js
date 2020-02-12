import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ReactComponent as Redo } from "./redo.svg";
import { ReactComponent as Volume } from "./volume.svg";
import Button from "../Button";

const Captcha = props => {
  const { className, onClick, ...attributes } = props;
  const captchaCharRef = useRef();

  const [captchaChar, setCaptchaChar] = useState({
    char1: "",
    char2: "",
    char3: "",
    char4: "",
    char5: "",
    num1: null,
    num2: null,
    num3: null
  });
  const [isClickedRedo, setClickedRedo] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [captchStatus, setCaptchStatus] = useState(false);

  const [color, setColor] = useState(null);
  const [captchInput, setCaptchInput] = useState("");

  // style
  const captchaStyle = classnames(
    "r-captcha",
    { [`captcha-${color}`]: color },
    className
  );

  // generate totale 8 char
  // 5 char and 3 degits
  // char between 65 to 90 Math.round(Math.random() * (90 - 65) + 65);
  // number between 48 to 57 Math.round(Math.random() * (57 - 48) + 48);

  const getNewCaptchValue = () => {
    setCaptchaChar({
      char1: String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65)),
      char2: String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65)),
      char3: String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65)),
      char4: String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65)),
      char5: String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65)),
      num1: Math.round(Math.random() * 8),
      num2: Math.round(Math.random() * 8),
      num3: Math.round(Math.random() * 8)
    });
  };

  const handleRedo = e => {
    e.preventDefault();
    setClickedRedo(true);
    setCaptchInput("");
    setColor("");
    setCaptchStatus(false);
    setFirstLoad(false);
    getNewCaptchValue();
    setTimeout(() => {
      setClickedRedo(false);
    }, 200);
  };

  useEffect(() => {
    getNewCaptchValue();
    setFirstLoad(true);
    setCaptchStatus(false);
  }, [firstLoad]);

  const handleCaptchaChange = e => {
    const value = e.target.value;
    setCaptchInput(e.target.value);
    if (captchaCharRef.current.textContent === value.toUpperCase()) {
      setColor("secondary");
      setCaptchStatus(true);
    } else {
      if (value.length === 8) {
        setColor("danger");
      } else {
        setColor("");
      }
      setCaptchStatus(false);
    }
  };

  const handleContinue = e => {
    onClick && onClick(e, captchStatus);
  };

  return (
    <div className={captchaStyle} {...attributes}>
      <p className="captcha-lebel">Match the characters in the pictures</p>
      <div className="captcha-container">
        <div ref={captchaCharRef} className={`captcha-char`}>
          <span>{captchaChar.char1}</span>
          <span>{captchaChar.char2}</span>
          <span>{captchaChar.num1}</span>
          <span>{captchaChar.char3}</span>
          <span>{captchaChar.num2}</span>
          <span>{captchaChar.char4}</span>
          <span>{captchaChar.char5}</span>
          <span>{captchaChar.num3}</span>
        </div>
        <div className="captcha-sound">
          <Volume />
          <Redo
            onClick={handleRedo}
            className={`${isClickedRedo ? "redo-anim" : ""}`}
          />
        </div>
      </div>
      <div className="captcha-input-container">
        <span>Characters</span>
        <input
          type="text"
          value={captchInput}
          maxLength={8}
          onChange={handleCaptchaChange}
        />
      </div>
      <div className="captch-action">
        <Button size="sm" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

Captcha.propTypes = {
  onClick: PropTypes.func
};

export default Captcha;
