const cols = document.querySelectorAll(".col");

const requestURL = "../src/data.json";

async function populate() {
    const request = new Request(requestURL);

    const response = await fetch(request);
    const data = await response.json();

    const createInfo = function (e) {
        const parentCol = e.target;

        const newTag = document.createElement("span");
        if (parentCol.className == "monday col") {
            newTag.innerHTML = `${data[0].amount}`;
        } else if (parentCol.className == "tuesday col") {
            newTag.innerHTML = `${data[1].amount}`;
        } else if (parentCol.className == "wednesday col") {
            newTag.innerHTML = `${data[2].amount}`;
        } else if (parentCol.className == "thursday col") {
            newTag.innerHTML = `${data[3].amount}`;
        } else if (parentCol.className == "friday col") {
            newTag.innerHTML = `${data[4].amount}`;
        } else if (parentCol.className == "saturday col") {
            newTag.innerHTML = `${data[5].amount}`;
        } else if (parentCol.className == "sunday col") {
            newTag.innerHTML = `${data[6].amount}`;
        }
        newTag.className = "col-description";

        parentCol.appendChild(newTag);
    };

    const removeInfo = function (e) {
        const tag = e.target.querySelector(".col-description");
        if (tag) {
            tag.remove();
        }
    };

    cols.forEach((col) => col.addEventListener("mouseover", createInfo));

    cols.forEach((col) => col.addEventListener("mouseleave", removeInfo));
}

populate();
