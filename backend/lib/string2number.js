/* eslint-disable no-param-reassign */
// const math = require('mathjs');

module.exports = (data) => {
  if (typeof data === 'object') {
    Object.keys(data).map((key) => {
      if (data[key].length) {
        return data[key].forEach((object) => {
          Object.keys(object).map((field) => {
            if (field === 'date') {
              return false;
            }
            if (object[field] === '--') {
              object[field] = null;
            } else {
              const stringNumber = object[field]
              .replace(/[^0-9.-]+/g, '')
              .replace('.','');
              object[field]=+stringNumber;
            }
            return field;
          });
        });
      }
      return key;
    });
  }
  return data;
};
