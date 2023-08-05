import * as firebase from "firebase/app"
// Initialize Firebase
let config = {
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
};
firebase.initializeApp(config)

let datas = [];
const adddata = (ev) => {
    ev.preventDefault();
    let data = {
        name: document.getElementById('input1').value,
        phone: document.getElementById('input2').value,
        email: document.getElementById('input3').value,
        date: document.getElementById('input4').value
    }
    datas.push(data);
    localStorage.setItem('Profile Data', JSON.stringify(datas));
    let data1 = {
        name: document.getElementById('input1').value,
        phone: document.getElementById('input2').value,
        email: document.getElementById('input3').value,
        date: document.getElementById('input4').value,
        Image: fileItem
    }
    var blob = new Blob(JSON.stringify(data1), {type: "application/json"})
}