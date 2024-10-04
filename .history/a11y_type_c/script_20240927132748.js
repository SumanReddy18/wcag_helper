document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('myModal').classList.remove('hidden');
    document.getElementById('insideModalButton').focus(); // Set focus to button inside modal
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').classList.add('hidden');
    document.getElementById('openModal').focus(); // Return focus to the open button
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
        document.getElementById('openModal').focus(); // Return focus to the open button
    }
});