
export const fetchAPI = function(date) {
    let result = [];

    for(let i = 12; i <= 22; i++) {
        let random = Math.random();
        if(random < 0.5) {
            result.push(i + ':00');
        }
    }
    console.log(result);
    return result;
};
export const submitAPI = function(formData) {
    return true;
};

