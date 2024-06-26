export const ToBoolArray = (number: number, bits: number): boolean[] => {
  const arr: boolean[] = [
    false, false, false, false
  ];

  let i = bits - 1;
  while (number > 0) {
    arr[i] = number % 2 !== 0;
    number = ~~(number / 2); // ~~ Permite truncar el número decimal y obtener su parte entera.
    i--;
  }
  
  return arr;
}