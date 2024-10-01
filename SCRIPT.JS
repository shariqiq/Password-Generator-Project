const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById('passwordDisplay');

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";

generateBtn.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let chars = lowerChars;
    if (includeUppercase) chars += upperChars;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordDisplay.textContent = password;
});
