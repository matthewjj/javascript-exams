var indiciesService = {
	map(nums, target){
		const map = new Map();
		for(i = 0; i < nums.length; i++){
			let compliment = target - nums[i]
			if( map.has(compliment) ) {
				return [i, map.get(compliment)]
			}
			else {
				map.set(nums[i], i);
			}
		}
		return map;
	},
	checkResult(keys, nums) {
		return nums[keys[0]] + nums[keys[1]];
	},
}

module.exports = indiciesService;