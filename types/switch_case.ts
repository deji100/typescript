let checkPeriod  = (month: string) => {
    let is_summer : boolean = false;

    switch(month) {
        case "Jan":
            console.log("it is not summer")
        case "Jun":
            console.log("it is summer.")
            is_summer = true
        default:
            is_summer = false
    }
}

checkPeriod("Jun")

export {}