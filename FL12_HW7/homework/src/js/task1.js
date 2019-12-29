let email, password, check_password, pass_less_than5 = 5,
    pass_less_than6 = 6

email = prompt('Please, enter the email: ')
if (email === '' || email === 'Esc') {
    alert('Canceled')
} else if (email.length < pass_less_than5) {
    alert('I don\'t know any emails having name length less than 5 symbols')
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Please, enter your password: ')
    if (password === '' || password === 'Cancel') {
        alert('Canceled')
    }
    if (email === 'user@gmail.com' && password === 'UserPass') {
        alert('You are logged in')
    } else if (email === 'admin@gmail.com' && password === 'AdminPass') {
        alert('You are logged in')
    } else {
        alert('Wrong password')
    }
} else {
    alert('I don\'t know you ')
}

if (confirm('Do you want to change your password?')) {
    password = prompt('Please, enter your old password: ')
    if (password === '' || password === 'Cancel') {
        alert('Canceled')
    }
    if (email === 'user@gmail.com' && password === 'UserPass') {
        password = prompt('Please, enter your new password: ')
        if (password === '' || password === 'Cancel') {
            alert('Canceled')
        }
        if (password.length < pass_less_than6) {
            alert('It\'s too short password.Sorry ')
        }
    } else if (email === 'admin@gmail.com' && password === 'AdminPass') {
        password = prompt('Please, enter your new password: ')
        if (password === '' || password === 'Cancel') {
            alert('Canceled')
        }
        if (password.length < pass_less_than6) {
            alert('It\'s too short password.Sorry ')
        } else {
            check_password = prompt('Enter the new password again: ')
            if (check_password !== password) {
                alert('You wrote the wrong password.')
            } else {
                alert('You have successfully changed your password.')
            }
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert('You have failed the change')
}