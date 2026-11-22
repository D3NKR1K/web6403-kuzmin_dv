class User {
    constructor(login, password, agreement) {
        this.login = login;
        this.password = password;
        this.agreement = agreement;
    }

    print() {
        console.log(
            "Данные пользователя:\n" +
            `  Логин: ${this.login}\n` +
            `  Пароль: ${this.password}\n` +
            `  Согласие на обработку данных: ${this.agreement ? "да" : "нет"}`
        );
    }
}

const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = new User(
        form.login.value,
        form.password.value,
        form.agreement.checked
    );

    user.print();
});