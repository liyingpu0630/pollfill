/*
实现：判断给定的两个值是不是完全相等。注意两点：+0 和-0需要返回false，NAN和NAN需要返回true
1、如果两个值相等，需要判断是否等0 ，不等直接返回，等0 需要取倒数判断是否相等；
2、如果不相等，需要判断两个值都是NAN的情况；
*/
if(!Object.is) {
    Object.is = function (val1, val2) {
        if(val1 === val2) {
            return val1 !== 0 || 1/val2 === 1/val2;
        } else {
            return val1 !== val1 && val2 !== val2;
        }
    }
}