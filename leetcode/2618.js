/**
 * 请你编写一个函数，检查给定的对象是否是给定类或超类的实例。

可以传递给函数的数据类型没有限制。
 */

/**
 * 
 */
/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if(obj === undefined || obj === null) return false
    while(obj!==null) {
        if(obj.constructor === classFunction) return true
        obj = Object.getPrototypeOf(obj)
    }
    return false
}
console.log(checkIfInstanceOf(5, Number))

/**
* checkIfInstanceOf(new Date(), Date); // true
*/