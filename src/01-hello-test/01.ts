export const value = "01-01";


export function splitIntoWords(sentense: string): Array<string> {
  const word = sentense.split(" ");

  return word.filter(w => w !== "");
}

export function sum (a: number, b: number) : number {
  return a + b;


}export function mult (a: number, b: number) : number {
  return a * b;
}