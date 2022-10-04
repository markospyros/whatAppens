export let optionsArray = (quest, number) => {
  const answerOptions = quest.map((option) => option.answerOptions);

  let array = [];

  for (let i = 0; i < answerOptions.length; i++) {
    array.push(answerOptions[number][i].text);
  }

  return array;
};
