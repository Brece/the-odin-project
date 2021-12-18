function contact(parent) {
    let container = document.createElement("div");
    container.classList.add("c-info");

    let headline = document.createElement("h1");
    headline.classList.add("c-info__headline");
    headline.innerHTML = "Contact Us";

    container.appendChild(headline);

    let contact = document.createElement("div");
    contact.classList.add("c-info__contact");

    let para = document.createElement("p");
    para.innerHTML = `Phone: xxx, Address: yyy`
    contact.appendChild(para);

    let children = [headline, contact];
    children.map(child => container.appendChild(child));
    
    parent.appendChild(container);
}

export { contact };