//=======================================Создается таблица + заполняется данными с сервера=================================
const fields = ['name', 'company', 'email', 'phone', 'balance', 'registered'];

const tableConfig = [
    {
        header: 'Имя',
        key: 'name',
    },

    {
        header: 'Компания',
        key: 'company',
    },

    {
        header: 'Email',
        key: 'email',
    },

    {
        header: 'Телефон',
        key: 'phone',
    },

    {
        header: 'Баланс',
        key: 'balance',
    },
    {
        header: 'Дата регистрации',
        key: 'registered',
    }
];

const getTHead = () => {
    const tHead = document.createElement('thead');
    tHead.classList = 'table__head';
    tableConfig.forEach((cell) => {
        const cellHead = document.createElement('th');
        cellHead.classList = 'table__th'
        cellHead.innerHTML = cell.header;
        tHead.append(cellHead);
    })
    return tHead;
}
const createTable = (data) => {
    const table = document.createElement('table');
    const tHead = getTHead();
    table.append(tHead);
    const tBody = document.createElement('tbody');
    tBody.classList = 'table__body';
    if (data) {
        data.forEach(item => {
            const tr = document.createElement('tr');

            tableConfig.forEach((cell) => {
                const td = document.createElement('td');
                td.innerHTML = item[cell.key];
                tr.append(td);
            });

            tBody.append(tr);
        })
    }
    table.append(tBody);
    document.body.append(table);
    let trLength = document.querySelectorAll('tr').length;
    console.log(trLength);
    for (let i = 0; i < trLength; i++) {
    document.querySelectorAll('tr')[i].classList.add('del');
    };

    // let delTr = document.querySelectorAll('.del');

    // for(let del of delTr) {
    //   del.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    //   
    //   del.firstChild.onclick = () => del.remove();
    // }
};

const getTable = () => {
    const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
    fetch(url)
        .then(response => response.json())
        .then(response => createTable(response))
        .catch(error => createTable());
}

getTable();






