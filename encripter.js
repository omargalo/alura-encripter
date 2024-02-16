// Funcion para encriptar
function encryptText(text) {
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[aeiou]/g, matched => replacements[matched]);
}

// Funcion para desencriptar
function decryptText(text) {
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/(enter|imes|ai|ober|ufat)/g, matched => replacements[matched]);
}

// Anclar eventos a los botones
document.getElementById('encriptar').addEventListener('click', function() {
    const sourceText = document.getElementById('source').value;
    document.getElementById('destination').value = encryptText(sourceText);
    document.getElementById('copy').disabled = false;
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const encryptedText = document.getElementById('source').value;
    document.getElementById('destination').value = decryptText(encryptedText);
    document.getElementById('copy').disabled = false;
});

// Copiar al portapapeles
document.getElementById('copy').addEventListener('click', function() {
    const copyText = document.getElementById('destination');
    copyText.select();
    document.execCommand('copy');
});