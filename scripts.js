// Pop-up Show and Close Logic
const popup = document.getElementById('popup');
const popUpButton = document.getElementById('popUpButton');
const closeButton = document.getElementsByClassName('close-btn')[0];

popUpButton.onclick = function() {
    popup.style.display = 'flex';
}

closeButton.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Celebration on Button Click
document.getElementById("happyButton").addEventListener("click", function() {
    let celebration = document.getElementById("celebration");
    celebration.innerHTML = "🎉🎉🎉";
    celebration.style.display = "block";
    setTimeout(function() {
        celebration.style.display = "none";
    }, 3000);
});
