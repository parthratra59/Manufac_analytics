 // Function to calculate median of an array
 const median = (arr: number[]) => {
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 0
      ? (sortedArr[middle - 1] + sortedArr[middle]) / 2
      : sortedArr[middle];
  };


  export default median