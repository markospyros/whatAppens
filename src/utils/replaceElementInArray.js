let replaceElementInArray = (array, element, position) => {
  for (let i = 0; i < array.length; i++) {
    if ((i = position)) {
      array[i] = element;
    }
  }

  console.log(array);
};

const array = [0, 0, 0, 0, 0, 0, 0];

replaceElementInArray(array, 2, 1);
