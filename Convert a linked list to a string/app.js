class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
function stringify(list) {
  let str = ''
  function temp(l){
    if(!l) return 'null'
    str += l.data + ' -> '
    if(l.next !== null){
      return temp(l.next)
    }
    else{
      str += 'null'
      return str
    }
  }
  return temp(list)
}
console.log(stringify(new Node(1, new Node(2, new Node(3)))))
console.log( stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))))
// console.log( stringify(null))