class Person {
  name: string;
  age: number;
}

class Vehicle {
  brand: string;
  model: string;
  year: number;
  color: string;
  owner: string;
}

class Parser<T> {
  fields: Array<string>;
  targetClass: {new(): T;};

  constructor(c: {new(): T; }, fields: Array<string>) {
    this.targetClass = c;
    this.fields = fields;
  }

  parse(data): Array<T> {
    var result: Array<T> = [];
    var lines = data.split("\n");

    return lines.map(line => {
      var object = new this.targetClass();
      var values = line.split(",");

      this.fields.forEach((field, i) => {
        object[field] = values[i];
      });

      return object;
    });

    return result;
  }
}

var personData = `John,36
Aaron,30
Peter,20`;

var personParser = new Parser<Person>(Person, ['name', 'age']);
var people = personParser.parse(personData);

console.log("*** People list:")
people.forEach(p => console.log(p));

var vehicleData = `Toyota,Camry,2010,Blue,James Owen
Honda,Civic,2001,Black,Adrian Snipes
Honda,Accord,2014,White,Brian Adams
Volkswagen,New Beatle,2007,Yellow,Alicia Keys
Mitsubishi,Eclipse,1998,Red,Joss Stone`;

var vehicleParser = new Parser<Vehicle>(
  Vehicle, ['brand', 'model', 'year', 'color', 'owner']);
var vehicles = vehicleParser.parse(vehicleData);

console.log("*** Vehicle list:")
vehicles.forEach(v => console.log(v));
