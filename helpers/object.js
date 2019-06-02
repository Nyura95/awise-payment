/**
 * @description Check if the keys exist into the obj
 * @param {string[]} keys
 * @param {object} obj
 * @returns boolean
 */
exports.exists = (keys, obj) => {
  for (let i = 0; i < keys.length; i++) {
    const split = keys[i].split('|');
    if (split.length > 1) {
      let exist = false;
      for (let y = 0; y < split.length; y++) {
        if (obj[split[y]]) {
          exist = true;
        }
      }
      if (!exist) {
        return false;
      }
    } else {
      if (obj[keys[i]] === undefined) {
        return false;
      }
    }
  }
  return true;
};
