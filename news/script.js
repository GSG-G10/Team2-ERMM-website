let toggle1 = () => {
    const nav1 = document.body.querySelector(".nav1");
    if (nav1.className == "nav1")
        nav1.className += " responsive";
    else nav1.className = "nav1";
}

function myFunction1(x) {
    x.classList.toggle("change1");
}

let toggle2 = () => {
    const nav2 = document.body.querySelector(".nav2");
    if (nav2.className == "nav2")
        nav2.className += " responsive";
    else nav2.className = "nav2";
}

function myFunction2(x) {
    x.classList.toggle("change2");
}