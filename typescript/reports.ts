class Report {
  data: Array<string>;

  constructor(data: Array<string>) {
    this.data = data;
  }

  run() {
    this.data.forEach((line) => console.log(line));
  }
}

function pad(s: string, len: number, pad: string) {
  s = s + '';
  var spaces = (len + 1) - s.length;
  return s + Array(spaces).join(pad);
}

class TabbedReport extends Report {
  headers;
  values;

  constructor(headers, values) {
    // determine max length for each column
    var lengths = headers.map((header, i) => {
      var maxLength = header.length;
      values.forEach(data => {
        if (data[i].length > maxLength) {
          maxLength = data[i].length;
        }
      });
      return maxLength;
    });

    // report data
    var data: Array<string> = [];

    // headers
    data.push(headers.map((h, i) => pad(h, lengths[i], ' ')).join(" "));

    // separators
    data.push(headers.map((h, i) => pad('', lengths[i], '-')).join(" "));

    // data
    values.map(row => {
      data.push(row.map((col, i) => pad(col, lengths[i], ' ')).join(" "));
    });

    super(data);
  }
}

var headers = ['Name', 'Gender', 'Age'];
var values = [
  ['Alice Green', 'Female', 55],
  ['Paul Pfifer', 'Male', 26],
  ['Louis Blakenship', 'Male', 44]
]
var r = new TabbedReport(headers, values);
r.run();
