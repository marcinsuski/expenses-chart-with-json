const cols = document.querySelectorAll(".col");

let array = [
    {
        day: "mon",
        amount: 17.45,
    },
    {
        day: "tue",
        amount: 34.91,
    },
    {
        day: "wed",
        amount: 52.36,
    },
    {
        day: "thu",
        amount: 31.07,
    },
    {
        day: "fri",
        amount: 23.39,
    },
    {
        day: "sat",
        amount: 43.28,
    },
    {
        day: "sun",
        amount: 25.48,
    },
];

const createInfo = function (e) {
    const parentCol = e.target;

    const newTag = document.createElement("span");
    if (parentCol.className == "monday col") {
        newTag.innerHTML = `${array[0].amount}`;
    } else if (parentCol.className == "tuesday col") {
        newTag.innerHTML = `${array[1].amount}`;
    } else if (parentCol.className == "wednesday col") {
        newTag.innerHTML = `${array[2].amount}`;
    } else if (parentCol.className == "thursday col") {
        newTag.innerHTML = `${array[3].amount}`;
    } else if (parentCol.className == "friday col") {
        newTag.innerHTML = `${array[4].amount}`;
    } else if (parentCol.className == "saturday col") {
        newTag.innerHTML = `${array[5].amount}`;
    } else if (parentCol.className == "sunday col") {
        newTag.innerHTML = `${array[6].amount}`;
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
