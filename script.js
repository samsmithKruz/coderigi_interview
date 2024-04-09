document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();
    let link = document.querySelector("input[name='link']").value.trim(),
        errorTxt = document.querySelector(".error");
    if (link == "" || link.length < 1) {
        console.log(errorTxt.classList);
        errorTxt.textContent = "Link cannot be empty!";
        errorTxt.classList.add("show");
    } else {
        console.log(link);
        fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: link })
        })
            .then(e => e.json())
            .then(e => {
                console.log(e);
            }).catch(e => {
                console.log(e)
            });
        errorTxt.classList.remove("show");
    }
})