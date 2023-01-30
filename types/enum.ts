let checkPeriod  = (month: Months) => {
    let is_summer : boolean = false;

    switch(month) {
        case Months.Apr:
            console.log("it is not summer")
        case Months.Jun:
            console.log("it is summer.")
            is_summer = true
        default:
            is_summer = false
            console.log("Completed.")
    }
}

enum Months {
    Jan, 
    Feb,
    Match,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sept,
    Oct,
    Nov,
    Dec
}

checkPeriod(Months.Jun)
console.log()
