import Cover from "./cover.jpg";

function home(parent) {
    let container = document.createElement("div");
    container.classList.add("c-info");

    let img = document.createElement("img");
    img.classList.add("c-info__img");
    img.src = Cover;
    img.setAttribute("alt", "Wine glasses on a table in a restaurant");

    let headline = document.createElement("h1");
    headline.classList.add("c-info__headline");
    headline.innerHTML = "Our Restaurant";

    let para = document.createElement("p");
    para.classList.add("c-info__text");
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt labore dignissimos voluptatum sapiente reiciendis delectus vel explicabo, rerum ipsam iste laudantium aut cum asperiores a et aperiam repellat nulla unde accusantium soluta inventore assumenda voluptates omnis. Vel dolorem sit alias? Recusandae, enim nihil officia velit beatae animi facere voluptatem!";

    let children = [img, headline, para];
    children.map(child => container.appendChild(child));

    parent.appendChild(container);
}

export { home };