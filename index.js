/**
 * @param {number} num
 * @returns {string}
 */
export const encode = (
  num,
  // @ts-expect-error
  recursed
) =>
  (num > 31 ? encode((num >>> 5) - 1, 1) : "") +
  "etaoinsrhdlucmfywgpbvkxqjz0123-_ETAOINSRHDLUCMFYWGPBVKXQJZ456789"[
    (recursed << 5) | (num & 31)
  ];
