function menu(parent) {
    let container = document.createElement("div");
    container.classList.add("c-info");

    let headline = document.createElement("h1");
    headline.classList.add("c-info__headline");
    headline.innerHTML = "Our Menu";

    container.appendChild(headline);

    for(let i = 0; i < 4; i++) {
        let card = document.createElement("div");
        card.classList.add("c-card");

        let title = document.createElement("h2");
        title.classList.add("c-card__title");
        title.innerHTML = `Item No.${i}`;
        
        let para = document.createElement("p");
        para.classList.add("c-card__text");
        para.innerHTML = `${i} Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt labore dignissimos voluptatum sa voluptates omnis. Vel dolorem sit alias? Recusandae, enim nihil officia velit beatae animi facere voluptatem!`;

        card.appendChild(title);
        card.appendChild(para);
        container.appendChild(card);
    }

    parent.appendChild(container);
}

export { menu };