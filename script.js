const workspace = document.querySelector('.workspace');
const container = [];
const stars = new Array(13);
let counter = 1;

for (let i = 0; i < stars.length; i++) {
    stars[i] = '';
}

for (let i = 0; i < 16; i++) {
    container[i] = stars;
}

for (let item of container) {
    if (counter > 7) {
        counter = 1;
    }
    const starContainer = setStarContainer();
    if (typeof item === 'object') {
        let i = 0;
        while (i < item.length) {
            const element = setStar(item[i]);
            const isAddActiveVar = isAddActive(i, item);
            if (isAddActiveVar) {
                element.classList.add('active');
            }
            starContainer.append(element);
            i++;
        }
        counter++;
    }
}

function setStar(value) {
    const element = document.createElement('div');
    element.classList.add('star');
    element.innerHTML = value;
    return element;
}

function setStarContainer() {
    const element = document.createElement('div');
    element.classList.add('star-container');
    workspace.append(element);
    return element;
}

function isAddActive(index, element) {
    switch (counter) {
        case 1:
            return index === Math.floor(element.length / 2);
        case 2:
            return index >= Math.floor(element.length / 2) - 1 && index <= Math.floor(element.length / 2) + 1;
        case 3:
            return index >= Math.floor(element.length / 2) - 2 && index <= Math.floor(element.length / 2) + 2;
        case 4:
            return index >= Math.floor(element.length / 2) - 3 && index <= Math.floor(element.length / 2) + 3;
        case 5:
            return index >= Math.floor(element.length / 2) - 4 && index <= Math.floor(element.length / 2) + 4;
        case 6:
            return index >= Math.floor(element.length / 2) - 5 && index <= Math.floor(element.length / 2) + 5;
        case 7:
            return index >= Math.floor(element.length / 2) - 6 && index <= Math.floor(element.length / 2) + 6;
    }
}

