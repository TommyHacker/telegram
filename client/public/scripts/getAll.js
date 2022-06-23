const container = document.querySelector(".telegraphs-container");
const getAllTelegraphs = async () => {
  const results = await fetch("http://localhost:3000/telegraphs");
  const { data } = await results.json();

  data.map((d) => {
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h1");
    const name = document.createElement("p");
    const body = document.createElement("p");

    title.textContent = d.title;
    name.textContent = d.pseudonym;
    body.textContent = d.body;

    title.className = "card-title";
    name.className = "card-name";
    body.className = "card-body";

    card.append(title);
    card.append(name);
    card.append(body);

    container.append(card);
  });
};

getAllTelegraphs();
