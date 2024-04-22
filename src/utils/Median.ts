// Function to calculate median of an array
const median = (arr: number[]) => {
  // Sort the array do that we can find the median
  const sortedArr = arr.sort((a, b) => a - b);
  // Find middle index
  const middle = Math.floor(sortedArr.length / 2);
  // Check if array length is even or odd
  return sortedArr.length % 2 === 0
    ? // If even, return the average of middle two numbers
      (sortedArr[middle - 1] + sortedArr[middle]) / 2
    : // If odd, return the middle number
      sortedArr[middle];
};

export default median;