
/**
 * 判断基础类型
 */
export const checkType = (val, type) => {
  if(val === null || val === undefined) {
    return String(val) === String(type);
  }
  if (!type) {
    return false;
  }
  const typeVal = Object.prototype.toString.call(val).toLowerCase();
  return typeVal === `[object ${type.toLowerCase()}]`
}
