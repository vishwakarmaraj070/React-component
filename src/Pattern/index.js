export const Percentage = {
  pattern: `(^100(\\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\\.[0-9]{1,2})?$)`,
  patternMsg: `Number between 0-100 with optional decimal`
};

export const AmountWithDecimal = {
  pattern: `^([-])?[1-9]([0-9]{1,13})?(\\.[0-9]{2})?$`,
  patternMsg: `Max-length 14 digits allow with optional decimal`
};

export const AmountWithoutDecimal = {
  pattern: `^([-])?[1-9]([0-9]{1,13})?$`,
  patternMsg: `Max-lengt 14 digits allow `
};

export const AmountWithDecimalNoNegative = {
  pattern: `^[1-9]([0-9]{1,13})?(\\.[0-9]{2})?$`,
  patternMsg: `Max-lengt 14 digits allow with optional decimal without negative value`
};

export const AmountWithoutDecimalNoNegative = {
  pattern: `^[1-9]([0-9]{1,13})?$`,
  patternMsg: `Max-lengt 14 digits allow without negative value`
};

export const PinCodeIndia = {
  pattern: `^[0-9]{6}$`,
  patternMsg: `Exact 6 degits required`
};

export const PinCodeOutside = {
  pattern: `^[0-9]{8,}$`,
  patternMsg: `Exact upto 8 degits required`
};

export const IFSCCode = {
  pattern: `^[A-Z]{4}[0][A-Z0-9]{6}$`,
  patternMsg: `4 Character, followed by 0, followed by 6 number. `
};

export const GSTIN = {
  pattern: `^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]{3}$`,
  patternMsg: `2 digit followed by 5 caps char followed by 4 digits followed by caps char and 3 digits or char`
};

export const TAN = {
  pattern: `^[A-Z]{4}[0-9]{5}[A-Z]$`,
  patternMsg: `Caps 4 char followed by 5 digits and 1 char`
};

export const PAN = {
  pattern: `[A-Z]{3}[P|H|C|J|F|A|T|B|L|G][A-Z]{1}[0-9]{4}[A-Z]{1}$`,
  patternMsg: `Caps 3 char followed by 1 status char and 1 char followed by 4 digits and 1 char`
};

export const BankAccount = {
  pattern: `[a-zA-Z0-9]([/-]?((([0-9]*[1-9][0-9]*)*[a-zA-Z/-])|([0-9]*[1-9][0-9]*[a-zA-Z]*))+)*[0-9]*`,
  patternMsg:
    "[a-zA-Z0-9]([/-]?(((d*[1-9]d*)*[a-zA-Z/-])|(d*[1-9]d*[a-zA-Z]*))+)*[0-9]*"
};

export const LLP = {
  pattern: `^[A-Z0-9-]{8}$`,
  patternMsg: "^[A-Z0-9-]{8}$"
};

export const CIN = {
  pattern: `^[A-Z0-9]{21}$`,
  patternMsg: "^[A-Z0-9]{21}$"
};

export const Email = {
  pattern: `^([\\w\\.\\-_]+)?\\w+@[\\w-_]+(\\.\\w+){1,}`,
  patternMsg: `Invalid email`
};

export const Password = {
  pattern: `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`,
  patternMsg: `Password must have small and cap char,numbers,special char`
};
