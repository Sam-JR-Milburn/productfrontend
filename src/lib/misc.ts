/* 32.5 --> '32.50' */
export function getPriceString(number: float): string {
  return ""+number.toFixed(2);
}
