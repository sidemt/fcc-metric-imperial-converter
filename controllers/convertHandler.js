/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    const regex = /[^\d\.\/]+/g // characters except for digits or . or /
    
    var index = input.search(regex);
    
    var number_str = input.slice(0, index);
    if (number_str.length == 0) {
      result = 1; // if nothing is provided it defaults to 1
    } else if (number_str.indexOf('/') >= 0){
      var arr = number_str.split('/');
      if (arr.length == 2){
        // given number is a fraction
        result = parseFloat(arr[0]) / parseFloat(arr[1]);
      } else {
        // given number contains 2 or more '/''
        result = 'invalid number';
      }
    } else {
      result = Number.parseFloat(number_str);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const regex = /[^\d\.\/]+/g // characters except for digits or . or /
    
    var index = input.search(regex);
    
    result = input.slice(index);
    
    const valid_units = ['gal','l','mi','km','lbs','kg'];
    if (valid_units.includes(result.toLowerCase())) {
      return result;
    } else {
      return 'invalid unit';
    }
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    initUnit = initUnit.toLowerCase();
    
    switch (initUnit) {
      case 'l': // lower case
        result = 'gal';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'l':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit) {
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      default:
        result = 'invalid unit';
    }
    
    console.log('result: ', result);
    
    // round to 5 decimals
    if (result != 'invalid unit') {
      Math.round(result, 5);
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if (initNum === 'invalid number' && initUnit === 'invalid unit' ) {
      result = 'invalid number and unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number';
    } else if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    } else {
      result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
