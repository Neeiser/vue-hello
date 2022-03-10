const arr = ['pippo', 'PLUTO', 'Paperino'];
const arrCaseLower= [];
const arrCaseFirstUpper= [];

arr.forEach((arrArgument) => {
    arrCaseLower.push(arrArgument.toLocaleLowerCase());
    return arrCaseLower
});

arrCaseLower.forEach((arrArgument) => {
    arrCaseFirstUpper.push(arrArgument.charAt(0).toUpperCase() + arrArgument.substring(1))
    return arrCaseFirstUpper
});

const root = new Vue({
    el: '#root',
    data:{
        displaying:'center',
        messageH1: 'Snack 1',
        messageStart: '',
        messageResult: arrCaseFirstUpper,
    },
})

