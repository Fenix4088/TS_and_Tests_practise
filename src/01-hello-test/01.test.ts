import { mult, splitIntoWords, sum } from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test('sum should be correct', () => {

  const result1 = sum(a, b);
  const result2 = sum(b, c);

  expect(result1).toBe(3);
  expect(result2).toBe(5);
});

test('multiply should be correct', () => {


  const result1 = mult(a, b);
  const result2 = mult(b, c);

  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

test('splitIntoWords should be correct', () => {
  const sen1 = 'Hello my friend!';
  const sen2 = 'JS - programming    language';

  const result1 = splitIntoWords(sen1);
  const result2 = splitIntoWords(sen2);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('Hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friend!');

  expect(result2.length).toBe(4);
  expect(result2[0]).toBe('JS');
  expect(result2[1]).toBe('-');
  expect(result2[2]).toBe('programming');
  expect(result2[3]).toBe('language');

});