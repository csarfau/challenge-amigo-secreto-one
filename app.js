let friends = [];

function adicionarAmigo() {
  let newFriend = document.getElementById("amigo").value;

  if (!newFriend) {
    return alert("Por favor, insira um nome.");
  } else {
    friends.push(newFriend);
    document.getElementById("amigo").value = "";
  }
}
