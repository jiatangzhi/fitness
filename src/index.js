function changeTheme() {
  let body = document.querySelector("body");

  //body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

function subscribe() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  if (name.length > 0 && email.length > 0) {
    alert(
      "Thank you " +
        name +
        "! We'll contact you by email with more information."
    );
  } else {
    alert("Sorry, try again.");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let subscribeButton = document.querySelector(".subscribe-button");
subscribeButton.addEventListener("click", subscribe);
