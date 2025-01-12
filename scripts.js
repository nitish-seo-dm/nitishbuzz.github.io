// Dynamic Upvote System
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const upvoteButton = document.createElement('button');
        upvoteButton.textContent = 'Upvote';
        upvoteButton.style.marginTop = '1rem';
        upvoteButton.addEventListener('click', () => {
            alert('You upvoted this!');
        });
        card.appendChild(upvoteButton);
    });
});
