const inputfield = document.getElementById("inputfield");
const submitfield = document.getElementById("submitfield");
const inhindi = document.getElementById("inhindi");
const inenglish = document.getElementById("inenglish");
const baseUrl = "https://drab-puce-goldfish-gown.cyclic.app/chat";

submitfield.addEventListener("click", (e) => {
    e.preventDefault()
	const ask = { question: inputfield.value };
	console.log(ask);
	fetch(`${baseUrl}`, {
		method: "POST",
		headers: {
			"content-type": "Application/JSON",
		},
		body: JSON.stringify(ask),
	})
		.then((res) => res.json())
		.then((result) => {
            console.log(result);
			let start = result.resp.indexOf("[");
			let end = result.resp.indexOf("]");

			const data = result.resp.slice(start, end + 1);

			console.log(result.resp);
			console.log(data);

			const hindi = JSON.parse(data)[0];
			const english = JSON.parse(data)[1];

			inhindi.textContent = null;
			inhindi.textContent = hindi;

			inenglish.textContent = null;
			inenglish.textContent = english;
		});
});