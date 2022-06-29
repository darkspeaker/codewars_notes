function indexEqualsValue(list) {
  let start = 0
  let end = list.length - 1
  let mid 
  // while(start <= end){
  //   mid = Math.round((end - start) / 2) + start
  //   if (mid < list[mid]) {
  //     end = mid - 1
  //   }
  //   else if(list[mid] === mid ){
  //    for(let i = 0; i <= list[mid]; i++){
  //       if(list[i] === i){
  //         return i
  //       }
  //     }
  //   }
  //   else {
  //     start = mid + 1
  //   }
  // }
  // for(let i = start; i <= end; i++){
  //   mid = Math.round((end - start) / 2) + start
  //   if(list[mid] === mid && list[i] !== i ){
  //     // if(list[i] === i){
  //       // return i
  //     // }
  //     return mid
  //    }
  //    else if (mid < list[mid]) {
  //     end = mid - 1
  //   } 
  //   else {
  //     start = mid + 1
  //   }
  // }
  while(start <= end){
    mid = Math.round((end - start) / 2) + start
    if(list[mid] < start){
      start = mid + 1 
    }
    else if(list[mid] > start){
      end = mid - 1
    }
    else{
      return mid
    }
  }


  return -1
}
// console.log(indexEqualsValue([-8,0,2,5]))

// console.log(indexEqualsValue([-3,0,1,3,10]))

console.log(indexEqualsValue([20, 31, 12, 3, 4, 5, 7, 10, 15]))



      