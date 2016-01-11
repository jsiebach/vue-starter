module.exports = function (string, limit, whole) {
  if (string.length <= limit) return string;
  if (whole && string.indexOf(' ') < 0) return string;

  var limit = whole ? string.lastIndexOf(' ', limit) : limit;
  return string.slice(0, limit).trim() + '...';
}
