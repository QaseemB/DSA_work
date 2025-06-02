function twoSum(arr,target){
	let map = new Map();
	for (let i = 0; i < arr.length; i++){
		let diff = target - arr[i];
		if (map.has(diff)) return [map.get(diff), i]
		map.set(arr[i], i)
	}
	return [];
}
console.log(twoSum([5,19,75,4,3,88,3],9));
