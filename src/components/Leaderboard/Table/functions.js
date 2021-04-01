/**
 * This function splits and array into two halves and
 * returns an array of the two split halves
 * @param {Array} array
 * @returns {Array<[Array, Array]>}
 */
export const splitArray = (array) => {
  let indexToSplit = Math.floor(array.length / 2);
  let first = array.slice(0, indexToSplit);
  let second = array.slice(indexToSplit);
  return [first, second];
};
