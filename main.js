// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

// Array 
let contacts = [];

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  console.log('Display Contacts');
}

function addContact() {
  let contactI = +prompt("Enter New Contact Name: ");
  contacts.push(newContact(contactI));
  outputEl.innerHTML = `Task Added: ${contactI}`;
  displayAll();
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

//Helper Functions
function newContact(contactInform){
  return {
    contactI: contactInform,
    completed: ''
  };
}

function displayAll(){
  let outputStr = '';
  for (let i=0; i< contacts.length;i++){
     outputStr += getContactHTMLStr(contacts[i],i);
  }
  outputEl.innerHTML = outputStr;
} 

function getContactHTMLStr(info,i){
  return `
  <div>
   ${i}: ${info.contactI} 
  </div>
  `;
}

