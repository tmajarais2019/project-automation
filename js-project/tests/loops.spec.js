import { test, expect } from '@playwright/test';

test.describe('Loop test cases', () => {
  
  test('validates each item in a list using a for loop', async () => {
    const items = ['apple', 'banana', 'cherry'];
    let validCount = 0;

    for (let i = 0; i < items.length; i++) {
      // Playwright uses .toMatch()
      expect(items[i]).toMatch(/^[a-z]+$/);
      validCount += 1;
      console.log(items[i]); // Fixed: Moved inside the loop
    }

    expect(validCount).toBe(items.length); // Fixed: .toBe() instead of .to.equal()
  });

  test('builds expected strings with a while loop', async () => {
    const inputs = ['first', 'second', 'third'];
    let index = 0;
    const output = [];

    while (index < inputs.length) {
      output.push(`item-${index}:${inputs[index]}`);
      index += 1;
    }

    console.log(output); // Fixed: Moved inside the test block

    // Playwright uses .toEqual() for arrays/objects
    expect(output).toEqual([
      'item-0:first',
      'item-1:second',
      'item-2:third'
    ]);
  });

  test('iterates over object properties with for...in', async () => {
    const user = { name: 'Alice', age: 30, country: 'US' };
    const keys = [];

    for (const key in user) {
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        keys.push(key);
        expect(user[key]).toBeDefined(); // Fixed syntax
      }
    }

    expect(keys).toEqual(expect.arrayContaining(['name', 'age', 'country']));
  });

  test('uses for...of to run multiple test cases', async () => {
    const cases = [
      { input: 1, expected: 1 },
      { input: 2, expected: 4 },
      { input: 3, expected: 9 }
    ];

    for (const testCase of cases) {
      const actual = testCase.input * testCase.input;
      expect(actual).toBe(testCase.expected);
    }
    console.log(cases); 
  });
  
});

  let firstName = 'John';
  console.log(firstName);