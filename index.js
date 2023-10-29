const dictionary =
  "etaoinsrhdlucmfywgpbvkxqjz012345ETAOINSRHDLUCMFYWGPBVKXQJZ6789._";
/**
 * @param {number} num
 * @returns {string}
 */
export const encode = (num) =>
  dictionary[
    (num & 31) | // take the last 5 bits
      // @ts-expect-error
      ((num > 31) << 5) // if num is greater than 31, set the 6th bit
  ] + (num >>> 5 ? encode(num) : ""); // if num was greater than 31, encode the remaining bits
