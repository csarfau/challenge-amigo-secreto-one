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
    li.innerHTML = friend;
    list.appendChild(li);
  });
}

function sortearAmigo() {
  if(friends.length === 1) {
    return alert("Por favor, adicione pelo menos 2 amigos antes de sortear.");	
  }
  let aleatorio = Math.floor(Math.random() * friends.length);
  let sorteado = friends[aleatorio];

  document.getElementById("resultado").innerHTML = `O amigo sorteado foi: ${sorteado}`;
}