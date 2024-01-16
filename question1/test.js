const { isValidWalk } = require("./main");


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['e','e','e','e','s','w','w','w','w']));