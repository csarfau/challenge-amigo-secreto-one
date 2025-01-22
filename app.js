let friends = [];

function adicionarAmigo() {
  let newFriend = document.getElementById("amigo").value;

  if (!newFriend) {
    return alert("Por favor, insira um nome.");
  } else {
    friends.push(newFriend);
    document.getElementById("amigo").value = "";
    listaAmigos();
  }
}

function listaAmigos() {
  let list = document.getElementById("listaAmigos");

  list.innerHTML = "";

  friends.forEach((friend) => {
    let li = document.createElement("li");
    li.textContent = friend;
    list.appendChild(li);
  });
}