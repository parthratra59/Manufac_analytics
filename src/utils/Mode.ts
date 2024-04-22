const mode = (arr: number[]) => {
    const count: Record<number, number> = {};
    arr.forEach((num) => {
      count[num] = (count[num] || 0) + 1;
    });
    let maxCount = 0;
    let modes: { value: number; count: number }[] = [];
    for (const num in count) {
      const numCount = count[num];
      if (numCount > maxCount) {
        modes = [{ value: parseFloat(num), count: numCount }];
        maxCount = numCount;
      } else if (numCount === maxCount) {
        modes.push({ value: parseFloat(num), count: numCount });
      }
    }
    return modes;
  };
  
  export default mode;