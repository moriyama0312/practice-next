import sum from './utils/sum';

describe('simple calculation', () => {
	it('add', () => {
		expect(sum(1, 2)).toBe(3);
	});
});