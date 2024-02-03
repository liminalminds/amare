const onClick = () => {
	let state = document.getElementById("state");
	let value = parseInt(state.innerText);
	value++;
	state.innerText = value.toString();
	console.log("Click");
}
