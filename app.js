//Enter your code here..
window.addEventListener("load", async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const btn = document.getElementById("btnGet");

  const handleClick = async (e) => {
    e.preventDefault();
    data = await fetchData();
    if (data == 0) return;

    const DIV = document.getElementById("message");

    data.forEach((user) => {
      DIV.innerHTML += `<div class="player">
    <div class="strength">Name : ${user.name}</div>
    <div>Email   : ${user.email}</div>
    <div>Phone   : ${user.phone}</div>
    <div>Website : ${user.website}</div>
    <div>Company : ${user.company.name}</div>
    <div>City    : ${user.address.city}</div>
    <div>`;
    });
  };

  const fetchData = async () => {
    try {
      let res = await fetch(URL);
      res = await res.json();
      return res;
    } catch (err) {
      console.log("Error found", err);
      return 0;
    }
  };

  var data = [];

  btn.addEventListener("click", handleClick);
});
