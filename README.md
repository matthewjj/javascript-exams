# javascript-exams
```
npm install
npm test
```
# Installation

2 Indicies Test

Find 2 indicies from array that sum to target a give nubmer:

# Usage

```
const indiciesService = require('../library/array-2-indicies.js');

const nums = [2, 7, 11, 15];
let target = 22;

let check = indiciesService.checkResult(
	indiciesService.map(nums, target),
	nums
);
expect(check).toBe(target);
```
