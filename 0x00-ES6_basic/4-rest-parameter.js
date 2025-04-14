export default function returnHowManyArguments(...args) {
  let number = 0;
  for (const _x of args) {
    number += 1;
  }
  return number;
}
