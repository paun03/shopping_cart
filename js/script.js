let item1 = {
    name: "Shoe 1",
    image: "images/shoe1.png",
    price: 120
};

let item2 = {
    name: "Shoe 2",
    image: "images/shoe2.png",
    price: 200
};

let item3 = {
    name: "Shoe 3",
    image: "images/shoe3.png",
    price: 180,
};

let item4 = {
    name: "Shoe 4",
    image: "images/shoe4.png",
    price: 140
};

let item5 = {
    name: "Shoe 5",
    image: "images/shoe5.png",
    price: 220
};

let item6 = {
    name: "Shoe 6",
    image: "images/shoe6.png",
    price: 420,
};

let allItems = [item1, item2, item3, item4, item5, item6];

// SELECTORS

let sectionItems = document.querySelector("#sectionItems");

// FUNCTIONS

let fillOutSectionItems = (arrayOfItems) => {
    for (let i = 0; i < arrayOfItems.length; i++) {
        let div = document.createElement("div");
        div.classList.add("divItem");
        let img = document.createElement("img");
        img.src = arrayOfItems[i].image;
        let h3 = document.createElement("h3");
        h3.innerHTML = arrayOfItems[i].name;
        let h6 = document.createElement("h6");
        h6.innerHTML = arrayOfItems[i].price;
        let button = document.createElement("button");
        button.setAttribute("id", `${i + 1}`); 
        button.innerHTML = "Add To Cart";
        div.append(img, h3, h6, button);
        sectionItems.append(div);
    }
};

// FUNCTION ACTIVATOR

fillOutSectionItems(allItems);