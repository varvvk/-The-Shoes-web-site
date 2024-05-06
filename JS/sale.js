let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
      arr[i++] = elem_arr.textContent;
    }
    return arr;
  }

  let saleBlocks = [], images = [], titles = [], originalPrices = [], salePrices = [];

  let parser = (xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const saleBlocksData = xmlDoc.getElementsByTagName('sale_block');
    const imagesData = xmlDoc.getElementsByTagName('img');
    const titlesData = xmlDoc.getElementsByTagName('title');
    const originalPricesData = xmlDoc.getElementsByTagName('original_price');
    const salePricesData = xmlDoc.getElementsByTagName('sale_price');

    table(saleBlocksData, saleBlocks);
    table(imagesData, images);
    table(titlesData, titles);
    table(originalPricesData, originalPrices);
    table(salePricesData, salePrices);

    for (let i = 0; i < saleBlocks.length; i++) {
      document.querySelector('.gallery').insertAdjacentHTML("beforeend",
        `<div class="item">
            <div class="sale_block">${saleBlocks[i]}</div>
            <img src="${images[i]}" alt="">
            <a href="#" class="slider_img_txt_a">
                <div class="img_txt">
                    <p>${titles[i]}</p>  
                    <p>$${salePrices[i]}   <span class="price">$${originalPrices[i]}</span>   
                        <span class="sale">Sale</span>
                    </p>
                </div>
            </a>
        </div>`
      );
    }
  })

  async function parseXML() {
    let a = await fetch('../xml/products.xml');
    let xmlString = await a.text();
    parser(xmlString);
  }
parseXML();

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}