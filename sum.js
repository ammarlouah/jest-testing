const theSum = (...nums)=>{
    return nums.reduce((pr,cr)=>pr+cr,0);
}

module.exports = theSum;