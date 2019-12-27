const checkExactLength = (value, length) => {
  if (String(value).length === length) {
    return {
      error: false,
      msg: null
    };
  } else {
    return {
      error: true,
      msg: `need exact lenght ${length}`
    };
  }
};

export default checkExactLength;
