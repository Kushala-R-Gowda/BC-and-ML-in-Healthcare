const serverUrl = "https://ixopx3uh6uj6.usemoralis.com:2053/server";
const appId = "wHEaW9IZvyUz17Vt3gOieprvq1x8fUGSizWP805I";
Moralis.start({ serverUrl, appId });


login = async()=>{
    console.log('kushala');
    Moralis.authenticate();
    const user = await Moralis.User.logIn(document.getElementById('firstname').value, document.getElementById('password').value, { usePost: true });
    console.log('Successfull Login');
    window.location.href = 'content.html';
}

//document.querySelector('#btn-register').onclick = register;
document.querySelector('#btn-login').onclick = login;
