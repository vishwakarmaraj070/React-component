export const checkSTDCode = value => {
  if (!isNaN(value)) {
    const pattern = new RegExp(`^[1-9][0-9]{1,4}$`);
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: "STD code should start with 1-to-9 and min 2 and max 5 digit"
      };
    }
  } else {
    return {
      error: true,
      msg: "fild contain only digit"
    };
  }
};

//

export const checkPhoneNumber = (value, std) => {
  if (!isNaN(value)) {
    const pattern = new RegExp(
      `^[0-9]{${
        String(std).length >= 2 ? 10 - Number(String(std).length) : "8"
      }}$`
    );
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null
      };
    } else {
      return {
        error: true,
        msg: `number should contain max ${
          String(std).length >= 2 ? 10 - Number(String(std).length) : "8"
        } digit`
      };
    }
  } else {
    return {
      error: true,
      msg: "fild contain only digit"
    };
  }
};
