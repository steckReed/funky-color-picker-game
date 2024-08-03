// Fisher Yates Shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffleArray = (originalArray: unknown[]) => {
  // Deep copy
  const array = JSON.parse(JSON.stringify(originalArray));

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

export default shuffleArray;
