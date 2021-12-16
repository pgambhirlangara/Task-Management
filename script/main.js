class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

let userList = [];

function signup(event) {
    event.preventDefault(); // Don't refresh the browser when form is submitted
    let newUser = new User(signupname.value, signupemail.value, signuppassword.value);
    userList.push(newUser);
    localStorage.setItem('user', JSON.stringify(userList));
    alert('User succesfully logged in');
    window.location = 'index.html';
}


function login(event) {
    event.preventDefault();
    // email loginemail.value
    let userList = JSON.parse(localStorage.getItem('user'));
    console.log(userList);

    for (let user of userList) {
        // if this email exists in localstorage
        if (user.email === loginemail.value) {
            // then check password of that user 
            if (user.password === loginpassword.value) {
                // if both satisfy, then allow
                alert('User succesfully logged in');
            } else {
                // if password is wrong then also give erro
                alert('Password incorrect');
            }
            // login email doesnt exist, to give error
        } else {
            alert('User not found');
        }
    }
    




}