console.log("hello");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const loginBox = document.getElementById("login-box");
const signUpBox = document.getElementById("sign-up-box");

const loginBtn = document.getElementById("login-submit");

const login = async () => {
  let enteredEmail = document.getElementById("login-email").value;
  let enteredPassword = document.getElementById("login-pass").value;
  try {
    const res = await fetch("https://meetingwingman.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    document.getElementById("login-email").value = data.token;
    //   console.log(data);
    //   authCtx.login(data.token);
  } catch (e) {
    document.getElementById("login-email").value = e;
  }
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

tab1.addEventListener("click", (e) => {
  if (!tab1.classList.contains("active")) tab1.classList.add("active");
  if (tab2.classList.contains("active")) tab2.classList.remove("active");

  if (!signUpBox.classList.contains("hide")) signUpBox.classList.add("hide");
  if (loginBox.classList.contains("hide")) loginBox.classList.remove("hide");
});

tab2.addEventListener("click", (e) => {
  if (!tab2.classList.contains("active")) tab2.classList.add("active");
  if (tab1.classList.contains("active")) tab1.classList.remove("active");

  if (!loginBox.classList.contains("hide")) loginBox.classList.add("hide");
  if (signUpBox.classList.contains("hide")) signUpBox.classList.remove("hide");
});
