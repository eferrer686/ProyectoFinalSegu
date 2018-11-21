function encryptText(){
    password = document.getElementById('password').value;
    text = document.getElementById('encryptText').value;

    encrypt =  Aes.Ctr.encrypt(text, password, 256);


    document.getElementById('encryptText').value = encrypt;
}
function decryptText(){
    password = document.getElementById('password').value;
    text = document.getElementById('decryptText').value;

    decrypt =  Aes.Ctr.decrypt(text, password, 256);

    console.log(decrypt);
    

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

