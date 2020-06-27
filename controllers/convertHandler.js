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
    const regex = /[^\d\.\/]/g // characters except for any
    
    result = input.indexOf(regex);
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const regex = /\D+$/g
    
    result = input.match(regex);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch (initUnit) {
      case 'L':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
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
      case 'L':
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
        console.error('invalid unit');
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
