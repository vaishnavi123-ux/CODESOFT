function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  document.getElementById(screenId).classList.add('active');

  const headerTitle = document.getElementById('header-title');

  if (screenId === 'welcome') {
    headerTitle.innerHTML = "Sign up here <span style='font-size:20px;'>&#128071;</span>";
  } else if (screenId === 'signup') {
    headerTitle.innerHTML = "Create Account";
  } else if (screenId === 'login') {
    headerTitle.innerHTML = "Welcome Back!";
  }
}

function signupUser() {
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const checkbox = document.getElementById('signupPolicy');

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  if (!checkbox.checked) {
    alert("Please agree to the privacy policy");
    return;
  }

  alert("🎉 Successfully signed in our app!");
  showScreen('login');
}
function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  alert("🎉 Successfully logged in our app!");
  showScreen('welcome'); 
}
