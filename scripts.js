/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
}

.container {
    width: 90%;
    margin: 0 auto;
}

header {
    background-color: #ff7e5f;
    padding: 20px;
    text-align: center;
}

header nav ul {
    display: flex;
    justify-content: center;
}

header nav ul li {
    margin: 0 15px;
}

.hero {
    background-color: #f1f1f1;
    padding: 60px 0;
    text-align: center;
}

.hero h2 {
    font-size: 3em;
    margin-bottom: 20px;
}

.categories {
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
}

.categories li {
    list-style: none;
    background-color: #ff7e5f;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    header nav ul {
        flex-direction: column;
    }

    .categories {
        flex-direction: column;
    }
}
