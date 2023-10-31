/**
 * @param {number} num
 * @param {number} [recursed] Internal use only, do not pass in.
 * @returns {string}
 */
export const encode = (num, recursed) =>
  (num > 31 ? encode((num >>> 5) - 1, 1) : "") +
  "etaoinsrhdlucmfywgpbvkxqjz012345ETAOINSRHDLUCMFYWGPBVKXQJZ6789._"[
    // @ts-expect-error
    (recursed << 5) | (num & 31)
  ];
