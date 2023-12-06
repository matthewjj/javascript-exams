const indiciesService = require('../library/array-2-indicies.js');

test('find 2 indicies from array that sum to target 9', () => {

	const nums = [2, 7, 11, 15];
	let target = 9;

	let check = indiciesService.checkResult(
		indiciesService.map(nums, target),
		nums
	);
	expect(check).toBe(target);
})

test('find 2 indicies from array that sum to target 35', () => {

	const nums = [20, 7, 11, 15];
	let target = 35;

	let check = indiciesService.checkResult(
		indiciesService.map(nums, target),
		nums
	);
	expect(check).toBe(target);
})

test('cant sum 35', () => {

	const nums = [2, 7, 12, 15];
	let target = 35;

	let check = indiciesService.checkResult(
		indiciesService.map(nums, target),
		nums
	);
	expect(check).not.toBe(target);
});