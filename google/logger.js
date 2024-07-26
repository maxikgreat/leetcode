
var Logger = function() {
  this.map = {}
  this.interval = 10
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (typeof this.map[message] === 'undefined') {
    this.map[message] = timestamp
    return true
  }

  if (timestamp - this.map[message] >= this.interval) {
    this.map[message] = timestamp
    return true
  }

  return false
};

var obj = new Logger()
const array =[[0,"A"],[0,"B"],[0,"C"],[0,"A"],[0,"B"],[0,"C"],[0,"A"],[0,"B"],[0,"C"],[0,"A"]]
array.forEach(([timestamp, message]) => {
  console.log(obj.shouldPrintMessage(timestamp,message))
})
