const calculateSum = (inputArray) => {
  if (!inputArray || !Array.isArray(inputArray))
    throw('input at least one');
  return inputArray.reduce((acc, num) => {
    if (typeof num === 'number') {
      acc + num
    } else {
      throw("wrong data")
    }
  }, 0)
}

module.exports = {
  calculateSum
}


