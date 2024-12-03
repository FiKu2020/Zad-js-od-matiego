function generuj() {
  let a = document.getElementById("a").value;
  console.log(a);
  let r = document.querySelector("#r").value;
  let n = document.querySelector("n").value;

  let result = "ciag arytmetyczny zawiera wyrazy:"
  for(;n;n--){
    result += a + ","
    a += r
  }
  console.log(result);
  resultText.innerHTML = result
}
