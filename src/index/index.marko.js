function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!doctype html><html lang=\"en\"><head><link rel=\"shortcut icon\" href=\"#\"><meta charset=\"UTF-8\"><title></title></head><body><h1>OH..HAI INDEX</h1></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
