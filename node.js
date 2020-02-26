function a(startnumber, endnumber, stepnumber) {
    
    sum = 0;
    
    for (; startnumber > endnumber;) {
        
        sum += startnumber;
        startnumber -= stepnumber;
        //console.log(sum);
    }
    return sum;
}
console.log(a(1000, 100, 48));



function a1(startnumber1, endnumber1, stepnumber1) {
    
    sum1 = 0;
    
    while( startnumber1 > endnumber1) {
        
        sum1 += startnumber1;
        startnumber1 -= stepnumber1;
        //console.log(sum);
    }
    return sum1;
}
console.log(a1(1000, 100, 48));