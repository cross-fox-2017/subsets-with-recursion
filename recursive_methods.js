var nilai1,nilai2,nilai3;

let choose_team = (n, k) => {
    var tampung = n - k
    var tmp = n;
    while (n-- > 2) {
        tmp *= n;
    }
    var tmp2 = k;
    while (k-- > 2) {
        tmp2 *= k;
    }
    var tmp3 = tampung
    while (tampung-- > 2) {
        tmp3 *= tampung;
    }
    return tmp / (tmp3 * tmp2)
}

console.log(choose_team(6, 2)); //15
console.log(choose_team(6, 3)); //20
console.log(choose_team(24, 4)); //10626
console.log(choose_team(10, 5)); //252
