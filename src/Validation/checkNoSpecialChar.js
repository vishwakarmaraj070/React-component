const checkNoSpecialChar = value => {
  const pattern = new RegExp("[^a-zA-z0-9]", "gi");
  if (pattern.test(value)) {
    return {
      error: true,
      msg: "Not allow any special char"
    };
  } else {
    return {
      error: false,
      msg: null
    };
  }
};

export default checkNoSpecialChar;
