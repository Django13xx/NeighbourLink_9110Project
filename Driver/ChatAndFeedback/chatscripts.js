document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.querySelectorAll('.chat-item');

    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('.name').textContent;
            
            // Navigate to chatbox.html with a query parameter
            window.location.href = `chatbox.html?user=${encodeURIComponent(name)}`;
        });
    });
});

function openChatBox() {
    window.location.href = 'feedback.html';
}
