var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let current = nums[mid]
        if (current === target) {
            return mid
        } else if (current < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
};
