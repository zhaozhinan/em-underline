/**
 * 将数据插入到数组的某一位置
 * @static
 * @since 1.0.0
 * @returns {Array} Returns {}
 * @example
 *
 * var objects = ['a','b','c','d'];
 * var shallow = _.swap(objects, 3, 1);
 * console.log(shallow); // ['a', 'd', 'b', 'c']
 */
function swap(arr, index1, index2) {
  const popData = arr.splice(index1, 1)[0];
  arr.splice(index2, 0, popData);
  return arr;
}
export default swap;
