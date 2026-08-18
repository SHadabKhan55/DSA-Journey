var intersection = function(nums1, nums2) {

    const nums2Set = new Set(nums2); 
    const common = new Set();

    for (let i = 0; i < nums1.length; i++) { 
        if (nums2Set.has(nums1[i])) {
            common.add(nums1[i]);
        }
    }

    return [...common]
};

console.log(intersection([1,5,2,3,4],[1,2,4,5]))