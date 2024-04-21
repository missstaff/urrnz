/**
 * Babel configuration module.
 * @param {Object} api - The Babel API object.
 * @returns {Object} - The Babel configuration object.
 */
module.exports = function (api) {
  return {
    plugins: ["macros"],
  };
};
