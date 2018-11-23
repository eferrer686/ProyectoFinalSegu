function encryptText(){
    password = document.getElementById('password').value;
    text = document.getElementById('encryptText').value;

    try{
        text = btoa(text);
        encrypt =  Aes.Ctr.encrypt(text, password, 256);

    }
    catch(err){
        alert("Not valid Base 64 text");
    }


    document.getElementById('encryptText').value = encrypt;
}
function decryptText(){
    password = document.getElementById('password').value;
    text = document.getElementById('decryptText').value;

    
    try{
        
        decrypt =  atob(Aes.Ctr.decrypt(text, password, 256));
    }
    catch(err){
        alert("Not valid Base 64 text");
    }

    document.getElementById('decryptText').value = decrypt;
}

function fileEncrypt(){
    password = document.getElementById('password').value;
    files = document.getElementById('fileEncrypt');

    encryptFile(files.files[0],password);

}

function fileDecrypt(){
    password = document.getElementById('password').value;
    files = document.getElementById('fileDecrypt');

    decryptFile(files.files[0],password);
}


var checked = false;
function changeInput(){
    
    if (checked) {
        checked = false;
        document.getElementById('password').type = "text";
        document.getElementById('viewPassword').value = "Hide Key";
    }
    else{
        checked = true;
        document.getElementById('password').type = "password";
        document.getElementById('viewPassword').value = "Show Key";
    }

}

