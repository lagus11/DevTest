const { Connect4 } = require("./main");

let game;
    game = new Connect4();
    console.log(game.play(0))
    console.log(game.play(0) + "\n")
    
    game = new Connect4();
    console.log(game.play(0))
    console.log(game.play(1))
    console.log(game.play(0))
    console.log(game.play(1))
    console.log(game.play(0))
    console.log(game.play(1))
    console.log(game.play(0) + "\n")
    
    game = new Connect4();
    console.log(game.play(4))
    console.log(game.play(4))
    console.log(game.play(4))
    console.log(game.play(4))
    console.log(game.play(4))
    console.log(game.play(4))
    console.log(game.play(4) + "\n")
    
    game = new Connect4();
    console.log(game.play(1))
    console.log(game.play(1))
    console.log(game.play(2))
    console.log(game.play(2))
    console.log(game.play(3))
    console.log(game.play(3))
    console.log(game.play(4))
    console.log(game.play(4) + "\n")