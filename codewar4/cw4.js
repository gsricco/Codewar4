

function fff(num) {
 num = String(num);
 arrayNum = num.split('');
 console.log(arrayNum);
 newArrayNum = arrayNum.map((arr)=>arr*arr)
 console.log(newArrayNum);
 newNum = Number(newArrayNum.join(''));
 console.log(newNum);
return newNum
}

id1.innerHTML = fff(3212);