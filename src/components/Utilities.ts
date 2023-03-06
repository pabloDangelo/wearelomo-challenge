export const saveLocalData = (key: string, value: any) => {

    let formatedValue = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, formatedValue);
}

export const getLocalData = (key: string) => {

    let data = localStorage.getItem(key);
    
    if(data)
        return JSON.parse(data);
    else    
        return data;
}

