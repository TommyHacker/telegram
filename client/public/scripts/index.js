const postForm = document.querySelector("#post-form");

postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // get values from form inputs;
  let title = e.target.title.value;
  let pseudonym = e.target.pseudonym.value;
  let body = e.target.body.value;
  //   post form to express backend
  fetch("http://localhost:3000/telegraphs", {
    method: "POST",
    body: JSON.stringify({ title, pseudonym, body }),
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // reset input values
  e.target.title.value = "";
  e.target.pseudonym.value = "";
  e.target.body.value = "";
});
