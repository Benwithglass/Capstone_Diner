// document.getElementById("switchButton").onclick = function () {
//     document.getElementById("myBody").classList.toggle("dark");
// }

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark");
// }

// toggle Dark mode thì page tự động reload dẫn đến page tự chuyển lại thành light mode nên phải thử cách dưới này...

function darkMode () {
    var setTheme = document.body;
    
    setTheme.classList.toggle("dark");
    
    var theme;

    if(setTheme.classList.contains("dark")) {
        console.log("dark mode");
        theme = "DARK";
    }else {
        console.log("light mode");
        theme = "LIGHT";
    }

    // save to localStorage

    localStorage.setItem("pageTheme", JSON.stringify(theme));
    // nhớ convert sang JSON... 
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
console.log(getTheme);

if (getTheme === "DARK"){
    document.body.classList = "dark";
}