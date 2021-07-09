const toggle1 = () => {
    const nav1 = document.body.querySelector(".nav1");
    if (nav1.className == "nav1")
        nav1.className += " responsive";
    else nav1.className = "nav1";
};

const myFunction1 = (x) => {
    x.classList.toggle("change1");
};

const  toggle2 = () => {
    const nav2 = document.body.querySelector(".nav2");
    if (nav2.className == "nav2")
        nav2.className += " responsive";
    else nav2.className = "nav2";
};

const myFunction2 = (x) =>{
    x.classList.toggle("change2");
};

const  displayYear = () => {
    const year = new Date().getFullYear();
    document.body.querySelector("#year").innerText = year;
};

displayYear();