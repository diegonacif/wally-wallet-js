let fixedIncome = document.getElementById('fixed-money-value').innerText;
let variableIncome = document.getElementById('variable-money-value').innerText;
let totalIncome = document.getElementById('total-money-value');

let id = 1;
let arrayTransaction = []

function getData() {
  let transaction = {}

  transaction.id = id;
  transaction.date = document.getElementById('date').value
  transaction.title = document.getElementById('title-name').value
  transaction.money = document.getElementById('money').value
  transaction.type = document.getElementById('type').value

  return transaction;
}

function validateData(transaction) {
  let msg = '';

  if(transaction.title === '') {
    msg += '- Informe o nome do título \n';
    alert (msg);
    return false;
  } else if(transaction.money === '') {
    msg += '- Informe o valor \n';
    alert (msg);
    return false;
  } else if(transaction.date === '') {
    msg += '- Informe a data \n';
    alert (msg);
    return false;
  } else if(transaction.type === '') {
    msg += '- Selecione um tipo \n';
    alert (msg);
    return false;
  } else {
    return true;
  }
}

function save() {
  let transaction = getData();

  if(validateData(transaction)) {
    addTransaction(transaction);
  } else {
    return
  };

  cancel();
  tableShow();
}

function tableShow() {
  let tbody = document.getElementById('tbody');
  tbody.innerText = '';

  for(let i = 0; i < arrayTransaction.length; i++) {
    let tr = tbody.insertRow();

    let td_date = tr.insertCell();
    let td_title = tr.insertCell();
    let td_money = tr.insertCell();
    let td_actions = tr.insertCell();

    td_date.innerText = arrayTransaction[i].date;
    td_title.innerText = arrayTransaction[i].title;
    td_money.innerText = arrayTransaction[i].money;

    let imgDelete = document.createElement('img');
    imgDelete.src = './assets/trash.svg'
    imgDelete.setAttribute("onclick", `deleteTransaction(${arrayTransaction[i].id})`);
    let imgEdit = document.createElement('img');
    imgEdit.src = './assets/note-pencil.svg'

    td_actions.appendChild(imgEdit);
    td_actions.appendChild(imgDelete);

    console.log(arrayTransaction);
  }
}

function addTransaction(transaction) {
  arrayTransaction.push(transaction);
  id++;
}

function cancel() {
  document.getElementById('date').value = '';
  document.getElementById('title-name').value = '';
  document.getElementById('money').value = '';
  document.getElementById('type').value = '';
}

function deleteTransaction(id) {

  let tbody = document.getElementById('tbody');

  for(let i = 0; i < arrayTransaction.length; i++) {
    if(arrayTransaction[i].id === id) {
      arrayTransaction.splice(i, 1);
      tbody.deleteRow(i)
    }
  }

  console.log(arrayTransaction);
}
