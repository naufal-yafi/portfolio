export const limitText = (text: string, lengthMax: number): string => {
  if (text.length <= lengthMax) {
    return text;
  } else {
    return text.slice(0, lengthMax - 3) + "...";
  }
};
