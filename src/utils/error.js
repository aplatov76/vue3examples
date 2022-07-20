const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь не найден',
    INVALID_PASSPORT: 'Неправильный пароль'
}

export function error(code){
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknow error'
}