export const validateLogin = (data) => {
    const { login, password } = data
    
    const isEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!login && !password) {
        return 'All fields are required'
    }

    if (password.length < 6) {
        return 'Password must be at least 6 characters'
    }

    if (password.length > 50) {
        return 'Password must be less than 50 characters'
    }

    if (login.length < 6) {
        return 'Login must be at least 6 characters'
    }

    if (login.length > 50) {
        return 'Login must be less than 50 characters'
    }

    if (!isEmail.test(login)) {
        return 'Invalid email'
    }

    return 'validated'
}

export const validateRegister = (data) => {
    const { firstName, lastName, picturePath, email, password } = data

    const isEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!email && !password && !firstName && !lastName && !picturePath) {
        return 'All fields are required'
    }

    if (firstName.length < 3) {
        return 'First name must be at least 3 characters'
    }

    if (firstName.length > 50) {
        return 'First name must be less than 50 characters'
    }

    if (lastName.length < 3) {
        return 'Last name must be at least 3 characters'
    }

    if (lastName.length > 50) {
        return 'Last name must be less than 50 characters'
    }

    if (picturePath.name.length === 0) {
        return 'Profile picture is required'
    }

    if (!isEmail.test(email)) {
        return 'Invalid email'
    }

    if (email.length > 50) {
        return 'Email must be less than 50 characters'
    }

    if (password.length < 6) {
        return 'Password must be at least 6 characters'
    }

    if (password.length > 50) {
        return 'Password must be less than 50 characters'
    }

    return 'validated'
}