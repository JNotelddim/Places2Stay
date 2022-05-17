/**
 * capitalizeText takes a string and capitalizes the first character in it.
 */
export const capitalizeText = (input: string) => {
  if (!input.length) {
    return input;
  }
  return input[0].toLocaleUpperCase() + input.slice(1);
};
