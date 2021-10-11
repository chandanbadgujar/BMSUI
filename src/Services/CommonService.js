

const CommonService = () => {
    const registerUser = () => {
        return fetch(
            'url',
            {
                method: 'POST',
                body: JSON.stringify({
                    // send the object to save
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(x => alert(x));
    };

    return {
        registerUser
    };
}

//const CommonService = Service();

export default CommonService;

