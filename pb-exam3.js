function solve(input){
    let month = input[0];
    let hoursSpent = Number(input[1]);
    let countPeople = Number(input[2]);
    let timeOfDay = input[3];

    let pricePerPerson = 0;
    let discount = 0;

    if(month === "march" || month === "april" || month === "may"){
        if(timeOfDay === "day"){
            pricePerPerson = 10.50;
            
        }
        else if(timeOfDay === "night"){
            pricePerPerson = 8.40;
        }
    }
    else if(month === "june" || month === "july" || month === "august"){
        if(timeOfDay === "day"){
            pricePerPerson = 12.60;
        }
        else if(timeOfDay === "night"){
            pricePerPerson = 10.20;
        }
    }
    
    if(countPeople >= 4){
        discount = 10/100;
        pricePerPerson = pricePerPerson - (pricePerPerson * discount);
        
    }
    if(hoursSpent>= 5){
        discount = 50/100;
        pricePerPerson = pricePerPerson - (pricePerPerson * discount);
    }
    let totalPrice = pricePerPerson * countPeople * hoursSpent;
    console.log(`Price per person for one hour: ${(pricePerPerson).toFixed(2)}`);
    console.log(`Total cost of the visit: ${(totalPrice).toFixed(2)}`);


}