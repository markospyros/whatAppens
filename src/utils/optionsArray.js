export let optionsArray = (quest, number) => {
  const answerOptions = quest.map((option) => option.answerOptions);

  let array = [];

  for (let i = 0; i < 4; i++) {
    array.push(answerOptions[number][i]);
  }

  return array;
};
