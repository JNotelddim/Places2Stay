/**
 * capitalizeText takes a string and capitalizes the first character in it.
 */
export const capitalizeText = (input: string) => {
  if (!input.length) {
    return input;
  }
  return input[0].toLocaleUpperCase() + input.slice(1);
};

export const pluralize = (
  input: string,
  num: number,
  pluralizer: string = 's',
) => {
  if (num > 1) {
    return input + pluralizer;
  }
  return input;
};
