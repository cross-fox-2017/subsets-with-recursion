let choose_team = (n, k, result=1) => {
  //write your code here
  let h = n - k
  if (k == 0){
    k = 1
  }
  if (n > h){
    result *= n
    result /= k
    return choose_team(n-1, k-1, result)
  }
  return result
}

console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(24, 4));
