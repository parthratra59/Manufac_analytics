// Function to calculate mode(s) of an array
const mode = (arr: number[]) => {
  // Create an object to store counts of each number
  const count: Record<number, number> = {};

  // Count occurrences of each number in the array
  arr.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  // Initialize variables to store maximum count and modes
  let maxCount = 0;
  let modes: { value: number; count: number }[] = [];

  // Iterate through count object to find modes
  for (const num in count) {
    const numCount = count[num];
    if (numCount > maxCount) {
      // If current count is greater than max count, update modes array with new mode
      modes = [{ value: parseFloat(num), count: numCount }];
      maxCount = numCount;
    } else if (numCount === maxCount) {
      // If current count equals max count, add mode to modes array
      modes.push({ value: parseFloat(num), count: numCount });
    }
  }
  return modes;
};

export default mode;