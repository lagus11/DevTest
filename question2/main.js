const findOutlier = (integers) => {
    
    const type = isInteger(integers);
   
    return integers.find(i => {
       if(type == 'e'){
           return i%2 == 1;
       } else {
           return i%2 == 0; 
       }
    });
}

const isInteger = (integers) => {
    let valTypeNum = [0,0];
    for(let i = 0; i < 3; i++){
        if(integers[i] % 2 == 0){
            valTypeNum[0] += 1;
        } else {
            valTypeNum[1] += 1;
        }
    }

    return valTypeNum[0] > valTypeNum[1] ? 'e' : 'i';
}

module.exports = {
    findOutlier
};

