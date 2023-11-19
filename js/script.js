let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != "") {
    // Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        ui.showAlert("User not Found", "alert alert-danger");
        if (data.message == "Not Found") {
          //show Alert
        } else {
          //show profile
          ui.showProfile(data);
        }
      });
  } else {
    //clear Profile
    ui.clearProfile();
  }
});
