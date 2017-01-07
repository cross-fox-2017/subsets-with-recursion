let choose_team = (n, k) => {
  while (n>=k){
    if(k === n || k === 0){
      return 1
    }
    else {
       return choose_team(n-1,k-1) + choose_team(n-1,k)
    }
  }
}

console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(24, 4));
