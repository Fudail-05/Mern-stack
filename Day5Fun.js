const button = document.getElementById("button");
const funContent = document.getElementById("funContent");
const fun = document.getElementById("fun");

button.onclick = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            button.textContent = "Next Joke";
            funContent.textContent = response.data.setup;
            fun.textContent = "";
            setTimeout(function () {
                fun.textContent = response.data.punchline;
            }, 2000);
        })
        .catch(function (error) {
            console.error("Error fetching the joke:", error);
            funContent.textContent = "Oops! Couldn't load a joke right now.";
            fun.textContent = "";
        });
};