// Add interactivity (like upvotes)
document.addEventListener("DOMContentLoaded", () => {
    const upvoteButtons = document.querySelectorAll(".upvote");

    upvoteButtons.forEach(button => {
        button.addEventListener("click", () => {
            let count = parseInt(button.innerText) || 0;
            count++;
            button.innerText = count + " Upvotes";
        });
    });
});
