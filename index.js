'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * identity : designed to take any value as parameter and return i.
 * 
 * 
 * @param {any datatype value},
 * 
 * @return {same datatype passed in parameter}.
 *   
 */

 function identity(x) {
    return x
  };
  
  module.exports.identity = identity;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * typeof : function will accept any datatype as input;
   * // action : function returns the type of value output as a string
   * 
   * @param {Array, Number, Boolean, Undefined, String} anything: Any value to be returned 
   * as a string.
   * @return { returns output as a string}
   *   
   */

  function typeOf(input) { 
    if (typeof input === 'string') {
        return 'string'
      } else if (typeof input === 'number') {
        return 'number'
      } else if (typeof input === 'boolean') {
        return 'boolean'
      } else if (typeof input === 'undefined') {
        return 'undefined'
      } else if (typeof input === 'function') {
        return 'function'
      } else if (Array.isArray(input)) {
        return 'array';
      } else if (typeof input === 'object' && input === null) {
        return 'null'
      } else {
        return 'object'
      }
    
  }

  module.exports.typeOf = typeOf;
 /////////////////////////////////////////////////////////////////////////////////////

/**
 * first : function designed to take two parameters (array, number) evaluate elements and return output based on edge cases
 *  
 * @param { array: collection, number} collection : compare if array is array
 * @return { if array is not array or numerical argument is not a positive number, return []; should return last element if no numerical argument is given, etc.}
 *  
 */

  function first(array, number) {
      //  check if array is not array or if number is less than zero
    if (Array.isArray(array) === false || number < 0) {
      return [];
        // check if number is not a number and return the first element of array
    } else if (typeof number !== 'number') {
      return array[0];
  
    } else {
        // if numer is greater then array length, return array 
      if (number > array.length) {
        return array;
  
      } else {
          // return first element of array
        return array.slice(0, number);
  
      }
  
    }

};

module.exports.first = first;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * last : function accepts an array and a number as arguments. 
 * action : when applied, function must separate values and return last two elements of array. 
 * 
 * @param {array : collection, number}
 * @return { returns two separate arrays. One array with element(target) to be separate and another array with remaning elements }
 *  
 */

  function last(array, number) {


      // check if array is not an array or if number is less than zero
    if (Array.isArray(array) === false || number < 0) {
      return [];
      // check if numer is not a number 
    } else if (typeof number !== 'number') {
      return array[array.length - 1];
  
    } else {
        // check if numer is greater than array length
      if (number > array.length) {
        return array;
  
      } else {
          // return last two elements of array 
        return array.slice(- 2, arr.length, number);
  
      }
  
    }
    
  };

  module.exports.last = last;

  ////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * indexOf :  function designed to return index of element found within an array or to return - 1 if not found.
   * action: iterate over array  and retrieve index if value was found; otherwise, return - 1
   * 
   * @param {array, value};
   * @return {return first occurance(index) of value or return - 1, if value is not found};
   * 
   */
   
    function indexOf(array, value) {
    // iterate over array, compare values and return element if there is a match.
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
            return i
      }
    }
        // if element is not found, return - 1
    return -1
  
  }
  
module.exports.indexOf = indexOf;
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * contains : function designed to check if a value is contained inside of array
 * @param {array, value}
 * @return { returns true if value exists within array}
 *  
 */

   function contains(array, value) {
     // iterate over array in order to check if value exists.
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

module.exports.contains = contains;
///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * unique : function desinged to check for duplicate values within array
 * @param {array and value}
 * @return { return new array with duplicated value removed if any}
 * 
 */

function unique(array) {
  // output variable created to capture duplicate value
  var output = [];
  // iteare over array using for loop
  for (var i = 0; i < array.length; i++) {
  // use indexOf method to check if value exists 
    if (output.indexOf(array[i]) === - 1) {
  // push values into output variable 
      output.push(array[i]);
    }
  }
  return output

};

module.exports.unique = unique;
///////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * filter : function designed to create a new array with all elements that pass the test implemented by the provided function
   * 
   * @param {array, function} action : The function to be applied at each value of the array
   * @return { returns a new array of elements that satisfied condition}
   *   
   */

    
   function filter(array, func) {
        
    return array.filter(function (element, index, array) {
      // action function 
      if (func(element, index, array)) {
        return true;
      }
      return false;
    })
  
  };

module.exports.filter = filter; 
///////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * reject : function desgined with opositie logic of filter
 *
 * @param{an array, function(element, key, array)} action : The function to be applied at each value of the array
 * @return{return an array made up of 3 sub arrays}
 * 
 * 
 */

  function reject(array, func) {
  return array.filter(function (element, index, array) {
    if (func(element, index, array)) {
      return false;
    }
    return true;
  })
};

module.exports.reject = reject;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * partition : function designed to divide given array into two sub arrays of truth and falsy values.
 * @param{An array, function(element, key, array)} action: function to be appled at each value.
 * @return{return one array containing two sub arrays  => [[truthy values], [ falsy values]].} 
 * 
 *  
 */

  function partition(array, func) {
    // variables to capture values evaluated in function 
  let arrTruthy = [];
  let arrFalsy = [];
    // looping over each element of array.
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (func(element, i, array)) {
      arrTruthy.push(element);
    } else {
      arrFalsy.push(element);
    }
  }
  let arrResult = [];
  arrResult.push(arrTruthy);
  arrResult.push(arrFalsy);
  return arrResult;
};

module.exports.partition = partition; 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * map : function desinged to loop over collection and evaluate condition, thus populate new arrray if confition was satisfied/ Then, return values.
 * @param { array or object} collection: The collection over which to iterate.
 * @param { function(element, index, collection)} action: The Function to be applied to each value in the 
 * collection
 * @return { return new array populated with new results }
 * 
 */

   function map(collection, func) {
  if (Array.isArray(collection)) {
    var arr1 = [];
    for (var i = 0; i < collection.length; i++) {
      var temp = func(collection[i], i, collection); // action 
      arr1.push(temp);

    }
    // arr1 + (i * collection.length);
    result1 = arr1;

  } else {
    var arr2 = [];
    for (var key in collection) {
      var newValue = func(collection[key], key, collection)
      arr2.push(newValue);
    }
    result1 = arr2;

    // return key + ( collection[key] * collection.keys(collection).length );


  }
  return result1;

};

module.exports.map = map;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * pluck : function desinged to retrieve properties of collection 
 * @param { array of objects,  property} 
 * @return { return array containing property value of every element in array}
 *  
 */
  function pluck(arrayOfObjects, property) {
  return _.map(arrayOfObjects, function (element, index, array) {
    return element[property];
  });

}

module.exports.pluck = pluck;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * every :  function desinged to iterate over each element of a collection and return true if "all" the values 
 * the list pass the predicate truth test
 * 
 * @param { collectio: array or object}
 * @param { func(collection[i], i, collection)} action: function to be applied at each element of collection
 * 
 * @return {return true if all element of collection pass the test function}
 * 
 */

  function every(collection, func) {

  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (typeof func === 'undefined') {
        if (!collection[i]) {
          return false;
        }
      } else {
        var output = func(collection[i], i, collection)
        if (output === false) {
          return false;
        }
      }

    }
    return true;

  } else {

    for (var key in collection) {
      if (typeof func === 'undefined') {
        if (!collection[key]) {
          return false;
        }
      } else {
        var output = func(collection[key], key, collection)
        if (output === false) {
          return false;
        }
      }

    }

    return true;

  }

}

module.exports.every = every;
/////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * some : function desiged to iterate over each element of a collection and return true if at least one of the values 
 * the list pass the predicate truth test
 * 
 * @param { collection, array or object} 
 * @param { func(collection[i], i, collection)} action: function to be applied at each element of collection
 * 
 * @return {return true if at least one element of collection pass the test function}
 * 
 */

  function some(collection, func){

  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (typeof func === 'undefined') {
        if (collection[i]) {
          return true;
        }
      } else {
        var output = func(collection[i], i, collection)
        if (output === true) {
          return true;
        }
      }

    }
    return false;

  } else {

    for (var key in collection) {
      if (typeof func === 'undefined') {
        if (collection[key]) {
          return true;
        }
      } else {
        var output = func(collection[key], key, collection)
        if (output === true) {
          return true;
        }
      }



    }

    return true;

  }

 };
 module.exports.some = some;
 //////////////////////////////////////////////////////////////////////////////////////////////////


 /**
  * reduce : function desinged to reduce a list of values into a single value.
  * @param {an array}
  * @param {function(array, func, seed)} action : function to be applied at each element of collection
  * @return { return new array with reduced value}
  */

   function reduce(array, func, seed) {

    let result;
    if (seed !== undefined ) { 
      result = seed;
      _.each(array, function(e, i, a){
        result = func(result, e, i, a) 
      });
      
    } else { 
      result = array[0];
      for ( let i = 1; i < array.length; i++) { 
        result = func(result, array[i], i, array)

      }
      
      return result
    }
  };
     module.exports.reduce = reduce;

///////////////////////////////////////////////////////////////////////////////////

/**
 * extend : function desinged to copy all of the properties in the source objects over to the destination object, and return the destination object. 
 * 
 * @param {object, object}
 * @return { return copy of object property }
 * 
 * 
 */

  function extend(object1, ...object2) { 
    

  let mergedObject = Object.assign(object1, ...object2);
  console.log(mergedObject);

  return mergedObject;

}

module.exports.extend = extend;