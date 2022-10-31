export let extractQuestionnaires = (element, array) => {
  for (let i = 0; i < element.length; i++) {
    array.push(element[i].questions[0]);
  }
};
