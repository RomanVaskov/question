export function getAuthForm() {
    return `<form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label" >
                <input type="email" id="email" required minlength="10" maxlength="255">
                <label for="email"> Email </label> 
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required minlength="6" maxlength="255">
                <label for="password"> Пароль </label>  
            </div>
            <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">
                Войти 
            </button>
        </form>`;
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyB-OFHOZI669t_5A8xiiSacCT-Zr7taoic';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => data.idToken)
}