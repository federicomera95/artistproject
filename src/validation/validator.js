const PATTERN = {
    username: {
        func: (value) => /^[a-zA-Z]{3,15}$/.test(value),
        error: 'Il seguente campo può contenere solo lettere con un minimo di 3 e un massimo di 15'
    },
    number: {
        func: (value) => /^[0-9]{2,2}$/.test(value),
        error: 'Il seguente campo accetta solo numeri'
    },
    email: {
        func: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value),
        error: 'Formato email non valido.'
    },
    password: {
        func: (value) =>
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(value),
        error: 'La password deve contenere almeno: una lettera maiuscola, una minuscola, un numero, un simbolo (@$!%*?&), minimo 8 e massimo 20 caratteri.'
    },
    image: {
        type: 'file',
        func: [
            ({ type }) => ['image/jpg', 'image/jpeg', 'image/png'].includes(type),
            ({ size }) => size < 2000000
        ],
        error: ["L'estensione del file è errata", 'La dimensione del file è superiore ai 2MB']
    },
    video: {
        type: 'file',
        func: [({ type }) => ['video/mp4'].includes(type), ({ size }) => size < 20000000],
        error: ["L'estensione del file è errata", 'La dimensione del file è superiore ai 20MB']
    },
    audio: {
        type: 'file',
        func: [
            ({ type }) => ['audio/mpeg', 'audio/mp3'].includes(type),
            ({ size }) => size < 10000000
        ],
        error: ["L'estensione del file è errata", 'La dimensione del file è superiore ai 10MB']
    }
};

export const setValidator = (required = false, pattern) => {
    const obj = { required: required };
    if (pattern) {
        obj.validator = PATTERN[pattern];
    }
    return obj;
};
