function repeatElm(arr,target){
    const m = new Map()
    for(let i=0; i< arr.length; i++){
        if(arr[i] === target){
            m.set(`index ${i}`,arr[i])
        }
    }
  
     return m.size < 2 ? "no repeat element found" : m
}

console.log(repeatElm([1,3,1,4,1,5,1,2,3],1))
