const dictionary =
  "etaoinsrhdlucmfywgpbvkxqjz012345ETAOINSRHDLUCMFYWGPBVKXQJZ6789._";
/**
 * @param {number} num
 * @param {number} [recursed] Internal use only, do not pass in.
 * @returns {string}
 */
export const encode = (num, recursed) =>
  (num > 31 ? encode((num >>> 5) - 1, 1) : "") +
  // @ts-expect-error
  dictionary[(recursed << 5) | (num & 31)];
