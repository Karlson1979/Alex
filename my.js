const divs = document.getElementsByTagName("div");
[...divs].forEach((el, i) => {
  el.textContent = i + 1;
  i % 2 === 0 ? (el.style.background = "red") : (el.style.background = "green");
});

const main = document.querySelector("main");
btnMain = document.querySelector(".main-btn");
const h1 = document.querySelector("h1");
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "КНОПКА";
button.style.padding = "10px";
button.style.display = "block";
button.style.marginTop = "30px";
let counter = 0;
button.onclick = () => {
  counter = counter + 1;
  h1.textContent = counter;
  color();
};

const button2 = document.createElement("button");
document.body.appendChild(button2);
button2.innerHTML = "МИНУС";

button2.onclick = () => {
  counter = counter - 1;
  h1.textContent = counter;
  color();
};

btnMain.onclick = () => {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
};

const color = () => {
  document.body.style.background = `rgb(${counter * 10},${counter * 10},${
    counter * 10
  } )`;
};
const addSquare = document.querySelector("#newsquare");

let counter1=0
// let square
class Square {
  constructor(size, color, textContent) {
    this.size = size;
    this.color = color;
    this.element = document.createElement("div");
this.textContent=textContent;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.background = this.color;
    this.element.className = "square";
    this.element.textContent=textContent;

  }

  render(htmlElement) {
    htmlElement.appendChild(this.element);

  }
  rerender(htmlElement) {
    htmlElement.removeChild(this.element);

  }

  changeText(text){
    this.element.textContent=text
  }
}

addSquare.onclick = () => {
  const square = new Square(100, "black", counter1);
  square.render(document.body);
  square.changeText('hello')

  square.element.onclick=()=>{
    square.rerender(document.body)
    // counter1=0
  }

};

const addText = (text) => {
    const span = document.createElement("span");
    span.textContent = text;
    document.body.appendChild(span);
};
addText("rumba");

const addInput = () => {
    const input = document.createElement("input");
    document.body.appendChild(input);
};
addInput();

const addDiv = (background, width, height) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.style.background = background;
    div.style.width = width + "px";
    div.style.height = height + "px";
};
addDiv('red', 100, 100);

const addParagraf = (text, color,font)=> {
    const paragraf = document.createElement('p');
    paragraf.textContent = text;
    document.body.appendChild(paragraf);
    paragraf.style.color = color;
    
}

addParagraf('rhjnslkmckxmakmcslskamdckmckwdmssckmdkcmwkmcpwkmcpwkmcwkmcds;akmc;dskdmcwp', 'green');