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
  let contact = +prompt("Enter New Contact Name: ");
  contacts.push(newContact(contact));
  outputEl.innerHTML = `Task Added: ${contact}`;

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
function newContact(contactDescription){
  return {
    contact: contactDescription,
    completed: ''
  }
}

function getContactHTMLStr(contact,i){
  return `
  <div class = "${contact.completed}" >
   ${i}: ${contact}
  </div>
  `;
}

function displayAll(){
  let outputStr = '';
  for (let i=0; i< tasks.length;i++ ){
     outputStr += getContactHTMLStr(contact[i],i);
  }
  outputEl.innerHTML = outputStr;
} 
