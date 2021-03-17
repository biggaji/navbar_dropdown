"use strict";

// dropdown toggle control
let dropdown_toggler, dropdown_container;

dropdown_toggler = document.querySelector("#profile_img");
dropdown_container = document.getElementById("drop_content");

dropdown_toggler.addEventListener('click', function () {
    dropdown_container.classList.toggle("show_dropdown");
});

window.addEventListener('click', function (e) {
    // check if the profile_img  is been click or not
    if (!e.target.matches("#profile_img")) {
        // then remove the dropdown 

        let drop_container = document.querySelector('.drop_content');

        if (drop_container.classList.contains("show_dropdown")) {
            drop_container.classList.remove("show_dropdown");
        }
    }
});