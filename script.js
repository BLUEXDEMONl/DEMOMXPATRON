document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password === 'blue') {
        window.location.href = './freetools.html';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        errorMessage.classList.remove('hidden');
    }
});
