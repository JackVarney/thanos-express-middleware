var reject = false;

module.exports = function(req, res, next) {
  reject = !reject;

  if (reject) {
    res.status(301).json('The hardest choices require the strongest wills.');
  } else {
    next();
  }
};
