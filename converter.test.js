const {numberToString} = require('./converter')

describe('number converter', () => {
  it('Should convert 1 to one', () => {
    expect(numberToString(1)).toBe("one");
  });
});