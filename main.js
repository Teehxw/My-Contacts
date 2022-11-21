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

  let contactI = prompt("Enter New Contact Name: ");
  contacts.push(newContact(contactI));
  contactI = prompt("Enter New Contact Email: ");
  contacts.push(newContact(contactI));
  contactI = prompt("Enter New Contact Phone #: ");
  contacts.push(newContact(contactI));
  contactI = prompt("Enter New Contact Country: ");
  contacts.push(newContact(contactI));

  outputEl.innerHTML = `Task Added: ${contactI}`;
  displayAll();
  saveContact();

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
  let nameSearch = prompt("Enter a Name to find Contact: ");
  let divStr = "";
  for (let i =0; i < contacts.length; i++){
      if(contacts[i].includes(nameSearch)) {
        divStr += contacts[i]
      }
  }   
  outputEl.innerHTML = divStr;  
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

function getContactHTMLStr(info,i){
  return `
  <div>
   ${i}: ${info.contactI}
  </div>
  `;
}

function displayAll(){
  let outputStr = '';
  for (let i=0; i< contacts.length;i++){
     outputStr += getContactHTMLStr(contacts[i],i);
  }
  outputEl.innerHTML = outputStr;
} 

function saveContact(){
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts(){
  let contactsStr = localStorage.getItem('contacts');
  return JSON.parse(contactsStr) ?? [];
}
