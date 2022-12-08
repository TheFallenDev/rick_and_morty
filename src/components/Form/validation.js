export default function validation(data){
    let errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /[0-9]/;
    if(data.username.length === 0) errors.username = 'El nombre de usuario no puede estar vacío';
    if(!regexEmail.test(data.username)) errors.username = 'El nombre de usuario tiene que ser un email';
    if(data.username.length > 35) errors.username = 'El nombre de usuario no puede tener mas de 35 caracteres';
    if(data.password.search(regexPassword) === -1) errors.password = 'La contraseña debe contener al menos un número';
    if(data.password.length < 6 || data.password.length > 10) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    return errors;
}