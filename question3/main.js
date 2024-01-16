class Connect4 {

    static arrayBidimensional;
    static player; 
    static finish;

    constructor(){
        Connect4.arrayBidimensional = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
            ];
        Connect4.player = 1; 
        Connect4.finish = false;
    }

    play(col){
        if(Connect4.finish) return "Game has finished!";
        let isAll = true;
        let p = null;
        
        for(let i = 5; i >= 0; i--){
            if(Connect4.arrayBidimensional[i][col] == 0){
                Connect4.arrayBidimensional[i][col] = Connect4.player;
                isAll = false;
                p = i;
                break;
            } 
        }
        
        if(isAll){
            return "Column full!";
        }
        
        let countF = 1;
        let countY = 1;
        let countD = 1;
        let countDD = 1;
        
        //validate gano horizontal
            for(let i = 1; i < 4; i++){
                    
                if((col - i) >= 0 && Connect4.arrayBidimensional[p][col - i] == Connect4.player){
                        countF += 1;
                }
                if((col + i) <= 6  && Connect4.arrayBidimensional[p][col + i] == Connect4.player){
                        countF += 1;
                }
            }
            
            for(let i = 1; i < 4; i++){
                    
                if((p - i) >= 0 && Connect4.arrayBidimensional[p -i][col] == Connect4.player){
                        countY += 1;
                }
                if((p + i) <= 5  && Connect4.arrayBidimensional[p + i][col] == Connect4.player){
                        countY += 1;
                }
            }
            
            for(let i = 1; i < 4; i++){
                    
                if((col - i) >= 0 && (p - i) >= 0 && Connect4.arrayBidimensional[p -i][col - i] == Connect4.player){
                        countD += 1;
                }
                if((col + i) <= 6  && (p + i) <= 5 && Connect4.arrayBidimensional[p + i][col + i] == Connect4.player){
                        countD += 1;
                }
            }
            
            for(let i = 1; i < 4; i++){
                    
                if((col + i) <= 6 && (p - i) >= 0 && Connect4.arrayBidimensional[p -i][col + i] == Connect4.player){
                        countDD += 1;
                }
                if((col - i) >= 0  && (p + i) <= 5 && Connect4.arrayBidimensional[p + i][col - i] == Connect4.player){
                        countDD += 1;
                }
            }
        
        if(countF == 4 || countY == 4 || countD == 4 || countDD == 4){
            Connect4.finish = true;
            return "Player " + Connect4.player + " wins!";
        }
        
        // if(countY == 4){
        //     return "jugador :" + Connect4.player + " gano y";
        // }
        
        // if(countD == 4){
        //     return "jugador :" + Connect4.player + " gano d";
        // }
        
        // if(countDD == 4){
        //     return "jugador :" + Connect4.player + " gano dD";
        // }


        Connect4.player = Connect4.player == 1 ? 2 : 1 ;
        return "Player " + Connect4.player + " has a turn"
    }
}

module.exports = {
    Connect4
};