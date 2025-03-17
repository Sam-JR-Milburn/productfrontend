/* 32.5 --> '32.50' */
export function getPriceString(number: float): string {
  if(number == null){
    return "Undefined"; /* Check if null or undefined with '==' */
  }
  return ""+number.toFixed(2);
}
