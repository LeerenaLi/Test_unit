let objects = [
    { login: 'Maks', emali: 'maks@maks.com', company: 'METHED' },
    { login: 'Methed', emali: 'info@methed.ru', company: 'METHED' },
    { login: 'Humidor', emali: 'tomato@pomodoro.com', company: 'cucumber' }
]

const filter = (arr, keys, val) => {
    let result = [];

    arr.forEach(item => {
        for (const [key, value] of Object.entries(item)) {
            if (key === keys && value === val) {
                result.push(item);
                console.log('result: ', result);
            }
        }
    });

    return result;
};


filter(objects, 'emali', 'info@methed.ru'); 
filter(objects, 'company', 'METHED'); 
filter(objects, 'login', 'Maks'); 

export default filter;