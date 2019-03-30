var reject = false;

module.exports = function(req, res, next) {
  reject = !reject;

  if (reject) {
    res.status(301).json('Perfectly balanced as all things should be.');
  } else {
    next();
  }
};
