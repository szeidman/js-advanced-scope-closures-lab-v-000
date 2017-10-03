function produceDrivingRange(blockRange){
  return function (start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}

function produceTipCalculator(percent){
  return function (fare) {
    return fare * percent;
  }
}

function createDriver(driver){
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
