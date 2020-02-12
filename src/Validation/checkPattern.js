const checkPattern = (pattern, patternMsg, value, flag = "") => {
  const regExp = new RegExp(pattern, flag);
  if (regExp.test(value)) {
    return {
      error: false,
      msg: ""
    };
  } else {
    return {
      error: true,
      msg: patternMsg ? patternMsg : `allow this pattern ${pattern} only`
    };
  }
};

export default checkPattern;
