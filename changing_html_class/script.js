// Dark mode (professional use: toggle a class on body)
const darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Active menu (professional use: remove active from all, add to clicked)
const menuLinks = document.querySelectorAll("#sidebar .menu");

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // remove active from all
        menuLinks.forEach((l) => l.classList.remove("active"));

        // add active to clicked one
        link.classList.add("active");
    });
});

// className usage (professional use: reset ALL classes quickly)
// Example: document.body.className = "dark";  // overwrites everything


// Toggel it means jo lagi h ushe hata do nhi lagi h to laga do ex= is mode of light 

//box.classList.add("active");
//box.classList.remove("a");
//box.classList.toggle("dark");
//console.log(box.classList.contains("active")); // true/false

//box.classList.replace("x", "z");