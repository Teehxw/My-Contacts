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
  let contactEmail = prompt("Enter New Contact Email: ");
  let contactNumber = prompt("Enter New Contact Number: ");
  let contactCountry = prompt("Enter New Contact Country");
  contacts.push(newContact(contactI, contactEmail, contactNumber, contactCountry));

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

function displayByName(event) {
  let nameSearch = prompt("Enter a Name to find Contact: ");
  let divStr = "";
  for (let i =0; i < contacts.length; i++){
      if(contacts[i].contactI.includes(nameSearch)) {
        divStr += contacts[i];
      }
  }   
  outputEl.innerHTML = divStr;  
}

function displayByCountry() {
  console.log('Display by Country');
}

//Helper Functions
function newContact(contactDescription, contactEmails, contactNumbers, contactCountries){
  return {
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
