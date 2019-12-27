const checkMobile = (value, other = false) => {
  if (!isNaN(value)) {
    const pattern = new RegExp(
      `^[${other ? "1-9" : "7-9"}][0-9]{${other ? "9," : "9"}}$`,
      "gi"
    );
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: `number should start with ${
          other ? "1-9 and min 9 and max..." : "7-to-9 and max 10 digit"
        }`
      };
    }
  } else {
    return {
      error: true,
      msg: "number contain only digit"
    };
  }
};

export default checkMobile;
