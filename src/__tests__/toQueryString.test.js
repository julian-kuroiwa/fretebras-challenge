import toQueryString from '../helpers/toQueryString';

describe('toQueryString', () => {
  it('should transform an object in a query string', () => {
    const object = {
      name: 'Test',
      id: 1,
    };

    expect(toQueryString(object)).toBe('name=Test&id=1');
  });

  it('should thow an error if something else than an object is passed', () => {
    const param = 'teste teste';
    const num = 123124214124;

    expect(toQueryString(param)).toEqual(
      new Error(`${param} must be an object`),
    );

    expect(toQueryString(num)).toEqual(new Error(`${num} must be an object`));
  });
});
