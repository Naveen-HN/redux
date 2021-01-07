const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'ISLOGGED':
            return !state;
        default:
            return state;
    }
}

export default isLogged;