function solve(input){
    let cpuNeededCount = Number(input[0]);

    let employeesCount = Number(input[1]);

    let workingDays = Number(input[2]);


    let workingHoursForOneCpu = 3;

    let employeeWorkHoursPerDay = 8;
    let oneCPU = 110.10;
    let hoursTotal = employeeWorkHoursPerDay * employeesCount * workingDays;

    let doneCpu = Math.floor(hoursTotal / workingHoursForOneCpu);

    let moneyNeeded = 0;
    let notDone = 0;
    if(doneCpu < cpuNeededCount){
        notDone = cpuNeededCount - doneCpu;
        moneyNeeded = notDone * oneCPU;
        console.log(`Losses: -> ${moneyNeeded.toFixed(2)} BGN`);
    }
    else{
        notDone = doneCpu - cpuNeededCount;
        moneyNeeded = notDone * oneCPU;
        console.log(`Profit: -> ${moneyNeeded.toFixed(2)} BGN`);
    }
}