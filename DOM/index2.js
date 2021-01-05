const createLi = (name) => {
  const li = document.createElement('li');
  const arr = name.split('');
  arr.forEach(letter => {
    const span = document.createElement('span');
    span.innerHTML = letter;
    if (name.toLowerCase().split(letter.toLowerCase()).length > 2) {
      span.style.color = 'red';
    }
    li.appendChild(span);
  });
  return li;
}

const list = document.createElement("ol");
let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "alan", "Kostyl",];

arr.forEach((item, index) => {
  const li = createLi(item);
  li.classList.add(index % 2 === 0 ? "even" : "odd");
  list.appendChild(li);
});

document.body.appendChild(list);