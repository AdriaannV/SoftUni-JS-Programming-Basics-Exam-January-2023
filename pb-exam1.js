function solve(input){
    let averageSpeed = Number(input[0]);
    let neededLitersOfFuelPer100Km = Number(input[1]);

    let distance = 384400;
    let spentTimeOnMoon = 3;
    
    let totalDistance = distance * 2;
    let time = Math.ceil(totalDistance / averageSpeed);

    let totalTime = time + spentTimeOnMoon;
    let neededFuel = (neededLitersOfFuelPer100Km * totalDistance) / 100;
    console.log(totalTime);
    console.log(neededFuel);
}
