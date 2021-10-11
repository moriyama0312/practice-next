describe('promise test', () => {
	it('return promise', () => {
		const p = new Promise((resolve)=> {
			setTimeout(() => {
				resolve('return message!!');
			}, 2000);
		})

		return p.then((data) => {
			expect(data).toBe('return message!!');
		})
	})
})