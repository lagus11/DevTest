
const isValidWalk = (walk) => {
    let myCoords = [0,0];
    
    walk.forEach(w => {
        switch(w){
            case 'n':
                myCoords[0] += 1;
                break;
            case 's':
                myCoords[0] -= 1;
                break;
            case 'w':
                myCoords[1] -= 1;
                break;
            case 'e':
                myCoords[1] += 1;
                break;
        }
    });
    
    let sumCoords = Math.abs(myCoords[0]) + Math.abs(myCoords[1]); 
    return sumCoords + walk.length == 10 ? true : false;
}


module.exports = {
    isValidWalk
};