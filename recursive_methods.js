// kombinasi adalah susunan dari unsur-unsur yang ditentukan dan tidak memperharikan urutannya
// misalkan kita ingin mengambil 3 kelereng dengan berbagai warna pada sebuah tempat yang berisi warna merah,
// putih, kuning, hijau, biru, ungu, hitam. kira-kira berapa kombinasi warna kelerang yang akan kita dapat?
// hal ini dapat ditentukan dengan kombinasi, yaitu C(6,3)=6!/3!(6-3)!
//pada javascript, kita dapat membuat program kombinasi sebagai berikut...

function faktor_range(a,b) { //faktorial dari 'a' hingga 'b'
  let x = b;
  while (x < a) {
    x++;
    b*=x;
  }
  return b;
}

let choose_team = (n,k) => {
  if (n==k) {
    return 1;
  }
  else {
    if (k < n-k) {
      k = n-k
      // console.log('k kurang 'k);
    }
    else {
      k = k
      // console.log('sama dg '+k);
    }
    return faktor_range(n,k+1)/faktor_range(n-k,1);
  }
}

console.log(faktor_range(4,1));//24
console.log(faktor_range(4,2));//24
console.log(faktor_range(4,3));//12
console.log(faktor_range(4,4));//1
console.log(choose_team(6,6));//1
console.log(choose_team(6,2));//15
console.log(choose_team(6,3));//20
console.log(choose_team(24,4));//10626
