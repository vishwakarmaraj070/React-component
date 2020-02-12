const checkExactLength = (value, length) => {
  if (String(value).length === length) {
    return {
      error: false,
      msg: null
    };
  } else {
    return {
      error: true,
      msg: `Need exact lenght ${length}`
    };
  }
};

export default checkExactLength;
