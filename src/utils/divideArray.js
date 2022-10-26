export let divideArray = (mainArray, array, from, to) => {
  for (let i = from; i < to; i++) {
    array.push(mainArray[i]);
  }
};
