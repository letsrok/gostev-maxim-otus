const tree = require('./tree');

test('should return something', async () => {
  const a = await tree('./');
  expect(a).anything
})

test('should return object', async () => {
  const a = await tree('./');
  expect(typeof a).toBe('object')
})

test('should return console.error', async () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
  const a = await tree('12312312');
  expect(spy).toHaveBeenCalled();
})



