 var prime = document.getElementById("prime"), result = ""; // Result is a string for (var i = 1; i <= 100; i++) { var invalid = false; for (var j = 2; j <= i; j++) { if (i % j === 0 && j !== i) { invalid = true; } } if (invalid === false) { result += i + " "; console.log(i); } } prime.innerHTML = result;