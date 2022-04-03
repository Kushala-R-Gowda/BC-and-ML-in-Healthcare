console.log('hello world')

// connect to Moralis server

const serverUrl = "https://ixopx3uh6uj6.usemoralis.com:2053/server";
const appId = "wHEaW9IZvyUz17Vt3gOieprvq1x8fUGSizWP805I";
Moralis.start({ serverUrl, appId });


register = async () => {
    Moralis.authenticate();
    const user = new Moralis.User();
    user.set("username", document.getElementById('firstname').value);
    user.set("password", document.getElementById('password').value);
    user.set("email", document.getElementById('email').value);
    user.set("lastname", document.getElementById('lastname').value);
    user.set("paddress", document.getElementById('address').value);
    user.set("phonenumber", document.getElementById('phonenumber').value);
    user.set("adharnumber", document.getElementById('adharnumber').value);


    try {
        await user.signUp();
        window.location.href = 'content.html';
    } catch (error) {
        alert("Error: " + error.code + " " + error.message);
    }
}


document.querySelector('#btn-register').onclick = register;


