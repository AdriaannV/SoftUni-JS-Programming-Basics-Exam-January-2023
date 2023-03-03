function solve(input){
    let index = 0;

    let age = Number(input[index]);

    let adult = 0;
    let kid = 0;

    let toys = 0;
    let sweaters = 0;

    let toyPrice = 5;
    let sweaterPrice = 15;

    while(input[index] !== "Christmas"){
        
        if(Number(input[index]) <= 16){
            kid++;
            toys++;
            
        }
        else if(Number(input[index]) > 16){
            adult++;
            sweaters++;
        }
        index++;
        
    }
    

    let totalSweatersPrice = sweaters * sweaterPrice;
    

    let totalToysPrice = toys * toyPrice;
    
    console.log(`Number of adults: ${adult}`);
    console.log(`Number of kids: ${kid}`);
    console.log(`Money for toys: ${totalToysPrice}`);
    console.log(`Money for sweaters: ${totalSweatersPrice}`);

}