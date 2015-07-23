var csv = require('csv');
var fs = require('fs');

var data = ('./app/data.csv');

module.exports = function (data) {
  fs
    .createReadStream(data)
    .pipe(csv.parse())
    .pipe(csv.transform(function (record) {
      return record.map(function (value) {

      });
    }))
    .pipe(csv.stringify())
    .pipe(process.stdout);

}
