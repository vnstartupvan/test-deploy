/* 
- Check current template
- Return the current template with string type
 */
export const isCurrentTemplate = () => {
    const location = window.location
    switch (location.pathname.replace('/', '')) {
        case 'collection':
            return 'collection';
        case 'search':
            return 'search';
        case '':
            return 'home'
        case 'product':
            return 'product';
        default:
            return 'home';
    }
}

/*
Key: key of data on local storage
Set State: set state of useState
*/
export const initData = (key, setState) => {
    let data = JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : [];
    setState(data);
}

export const UpdateLocalData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const handleToggle = (state, setState) => {
    if(state) {
        setState(false);
    }else {
        setState(true);
    }
}