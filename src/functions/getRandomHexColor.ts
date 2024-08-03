
const getRandomHexColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hex = '#' + randomColor.padStart(6, '0');
  
  return hex;
}

export default getRandomHexColor;
