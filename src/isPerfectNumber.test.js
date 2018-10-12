import { isPerfectNumber } from './isPerfectNumber';

describe('isPerfectNumber', () => {
  it('28 is a Perfect Number', () => {
    expect(isPerfectNumber(28)).toBeTruthy();
  });

  it('29 is not a Perfect Number', () => {
    expect(isPerfectNumber(29)).toBeFalsy();
  });
})