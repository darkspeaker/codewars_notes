// Input: {{-1, 4, 5},
//         { 2, 3, 4}}

// Output: {{ 5, 4},
//          { 4, 3},
//          {-1, 2}}

// var a = rotateMatrix([[-1,4,5],[2,3,4]]),
//     b = [[5,4],[4,3],[-1,2]];




let k = []
var rotateMatrix = a => {
  var deepCopy = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [],
            i = 0,
            len = obj.length;
        for (; i < len; i++) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for (i in obj) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
  }
  var ret = deepCopy(a);

  var rotate90Left = function (m) {
    m = transpose(m);
    m = reverseRows(m);
    return m;
  };

  var transpose = function (m) {
    if (m.length === m[0].length) {
        return transpose(m);
    } else {
        return transpose3(m);
    }
  }
  var transpose3 = function (m) {
    var result = new Array(m[0].length);
    for (var i = 0; i < m[0].length; i++) {
        result[i] = new Array(m.length - 1);
        for (var j = m.length - 1; j > -1; j--) {
            result[i][j] = m[j][i];
        }
    }
    return result;
  };
  var reverseRows = function (m) {
    return m.reverse();
  };
  return rotate90Left(ret)
}
console.log(rotateMatrix([[-1,4,5],[2,3,4]]))