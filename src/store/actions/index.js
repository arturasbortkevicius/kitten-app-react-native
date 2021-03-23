export const GET_KITTENS = "GET_KITTENS";

export const showKittens = (kittenArray) => {
  return {
    type: GET_KITTENS,
    payload: kittenArray,
  };
};
