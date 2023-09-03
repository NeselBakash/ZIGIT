const validateEmail = (email) =>{
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return regex.test(email);
}

const validatePassword = (password) =>{
    const regex = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}/;
    return regex.test(password);
}

module.exports = { validateEmail,validatePassword };