// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

// Array 
let contacts = loadContacts();
displayAll();
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
  displayAll();
}

function addContact() {
<<<<<<< HEAD
  let contactI = +prompt("Enter New Contact Name: ");
  contacts.push(newContact(contactI));
  outputEl.innerHTML = `Task Added: ${contactI}`;
  displayAll();
=======
  let contactI = prompt("Enter New Contact Name: ");
  let contactEmail = prompt("Enter New Contact Email: ");
  let contactNumber = prompt("Enter New Contact Number: ");
  let contactCountry = prompt("Enter New Contact Country");
  contacts.push(newContact(contactI, contactEmail, contactNumber, contactCountry));

  outputEl.innerHTML = `Task Added: ${contactI}`;
  displayAll();
  saveContact();

>>>>>>> b296786113ba0c59d377cbbe23aef70e2dd3c777
}

function removeContact() {
  let index = +prompt("Enter contact # to remove: ");
  if (index >=0 && index < contacts.length){ 
    contacts.splice(index, 1);
    alert(`Contact # ${index} has been removed`);
    displayAll();
    saveContact();
  } else {
    alert("Invalid Contact #");
  }
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

//Helper Functions
<<<<<<< HEAD
function newContact(contactDescription, contactEmails,contactNumbers, contactCountries ){
=======
function newContact(contactInform){
>>>>>>> d60641bc0254e8840eb879405476ddde2b81cf43
  return {
<<<<<<< HEAD
    contactI: contactInform,
    completed: ''
  };
=======
    contactI: contactDescription,
    contactEmail: contactEmails, 
    contactNumber: contactNumbers, 
    contactCountry: contactCountries, 
    completed: ''
  };
}

function getContactHTMLStr(info,i){
  return `
  <div>
   <h2>${i}: ${info.contactI} </h2>
   <p>${info.contactEmail}</p>
   <p>${info.contactNumber} (${info.contactCountry})
  </div>
  `;
>>>>>>> b296786113ba0c59d377cbbe23aef70e2dd3c777
}

function displayAll(){
  let outputStr = '';
<<<<<<< HEAD
  for (let i=0; i< contacts.length;i++){
=======
  for (let i=0; i< contacts.length;i++ ){
>>>>>>> b296786113ba0c59d377cbbe23aef70e2dd3c777
     outputStr += getContactHTMLStr(contacts[i],i);
  }
  outputEl.innerHTML = outputStr;
} 

<<<<<<< HEAD
function getContactHTMLStr(info,i){
  return `
  <div>
   ${i}: ${info.contactI} 
  </div>
  `;
}

=======
function saveContact(){
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts(){
  let contactsStr = localStorage.getItem('contacts');
  return JSON.parse(contactsStr) ?? [];
}
>>>>>>> b296786113ba0c59d377cbbe23aef70e2dd3c777
