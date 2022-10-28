export let addPointsIntoCategories = (categoryArray, substring) => {
  let variable = 0;
  for (let i = 0; i < categoryArray.length; i++) {
    if (categoryArray[i].varName.includes(substring) === true) {
      variable += categoryArray[i].points;
    }
  }

  return variable;
};
