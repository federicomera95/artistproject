const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const find = (key) => {
    const string = localStorage.getItem(key) || '{}';
    return JSON.parse(string);
};

const remove = (key) => {
    localStorage.removeItem(key);
};

export { save, find, remove };
