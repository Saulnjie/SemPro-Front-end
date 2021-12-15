import { strapiAccessToken } from './admin.js';

(function () {
	if (strapiAccessToken('user')) {
		document.querySelector('.menu').innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">
			<img src="./images/lamborghini-logo-1000x1100.png" width="50px" />
		</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="dashboard.html">Go to dashboard</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="addCar.html">Add a car</a>
					</li>
					<li class="nav-item">
						<button class="logout">Logout</button>
					</li>
				</ul>
			</div>
		</nav>`;
	} else {
		document.querySelector('.menu').innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="/">
			<img src="./images/lamborghini-logo-1000x1100.png" width="50px" />
		</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="index.html">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="login.html">Login</a>	
					</li>
				</ul>
			</div>
		</nav>
		`;
	}

	const logout = document.querySelector('.logout');
	if (logout !== null) {
		logout.onclick = function () {
			localStorage.clear();
			window.location.href = './index.html';
		};
	}
})();
