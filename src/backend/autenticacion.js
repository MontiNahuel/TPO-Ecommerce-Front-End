function iniciarSesion(username, password) {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorMessage => {
                    throw new Error(errorMessage); // Throw a custom error with the message
                });
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            resolve(data);
        })
        .catch(err => {
            console.error(err); // Log the error for better debugging
            reject(err); // Reject the promise with the error
        });
    });
}

export { iniciarSesion };
