
const RegisterReducer = (state=[], action) => {
    switch(action.type){
        case 'REGISTER_USER': return state;
        default: return state;
    }
};

export default RegisterReducer;