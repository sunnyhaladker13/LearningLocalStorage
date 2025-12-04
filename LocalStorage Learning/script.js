const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('emailAddress');
const home = document.getElementById('homeAddress');
const totalBudget = document.getElementById('totalBudget');

let formInput = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    homeAddress: '',
    totalBudget: '',
    ttl: '10000'
}

const autosave = () => {
    formInput.firstName = firstName.value;
    formInput.lastName = lastName.value;
    formInput.phoneNumber = phoneNumber.value;
    formInput.emailAddress = email.value;
    formInput.homeAddress = home.value;
    formInput.totalBudget = totalBudget.value;

    localStorage.setItem('userData', JSON.stringify(formInput));
}

firstName.addEventListener('input', autosave);
lastName.addEventListener('input', autosave);
phoneNumber.addEventListener('input', autosave);
email.addEventListener('input', autosave);
home.addEventListener('input', autosave);
totalBudget.addEventListener('input', autosave);

const savedData = localStorage.getItem('userData');
if (savedData) {
    formInput = JSON.parse(savedData);
    firstName.value = formInput.firstName;
    lastName.value = formInput.lastName;
    phoneNumber.value = formInput.phoneNumber;
    email.value = formInput.emailAddress;
    home.value = formInput.homeAddress;
    totalBudget.value = formInput.totalBudget;
}