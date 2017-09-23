var str = "aaacodebbb";

function countCode(str) {

	var numba = 0;

	for (var i = 0; i < str.length; i++) {

		if (str[i] === "c" && str[i + 1] === "o" && str[i + 3] === "e") {

			numba++;
		}

	}

	return numba;
}
console.log(countCode(str));
