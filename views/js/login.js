const myUser = {
  user: "admin",
  senha: "root"
};

const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", submitForm);

function submitForm(e) {
  let usuario = {
    user: getInputValue("login"),
    senha: getInputValue("senha")
  };

  console.log("usuario");
  console.log(usuario);

  e.preventDefault();
  login(usuario);
  form.reset();
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function login(usuario) {
  if (myUser.user === usuario.user && myUser.senha === usuario.senha) {
    redirect();
  } else {
    alert("Usuário ou senha incorreto.");
  }
}

function redirect() {
  window.location.href = "Menu.html";
}
