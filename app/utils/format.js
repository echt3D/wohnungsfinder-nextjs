export const strToNum = (str) => {
  const cleanedStr = str.replace(/’/g, "");
  const number = parseInt(cleanedStr, 10);
  return number;
};
