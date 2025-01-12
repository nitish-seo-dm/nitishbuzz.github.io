document.querySelectorAll('.upvote').forEach((btn) => {
    btn.addEventListener('click', function() {
        alert('You have upvoted this post!');
    });
});

document.querySelectorAll('.downvote').forEach((btn) => {
    btn.addEventListener('click', function() {
        alert('You have downvoted this post!');
    });
});

function loadMorePosts() {
    let newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
        <h3>New Trending Post</h3>
        <p>This post was dynamically loaded. Content can be added here.</p>
    `;
    document.querySelector('.post-list').appendChild(newPost);
}

document.querySelector('.load-more').addEventListener('click', loadMorePosts);
