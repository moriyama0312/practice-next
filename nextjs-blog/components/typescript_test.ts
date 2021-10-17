interface Obj {
	hoge: string
	fuga: number
}

const testFunc = ({hoge, fuga}: Obj) => {
	console.log(hoge);
};

const obj1 = {
	hoge: 'aaa',
	fuga: 1
};

const obj2 = {
	hoge: 'bbb',
	fuga: 2,
	hage: 'aaa'
};

testFunc(obj1);

testFunc(obj2);

// testFunc({hoge: 'aaa', fuga: 2, hage: 'aaa'});

export default testFunc;