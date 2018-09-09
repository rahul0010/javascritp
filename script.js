var form = document.forms.search;
var input = form.elements.searchInput;
input.value = 'Search Here'
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);
input.addEventListener('focus',function () { if (input.value === 'Search Here') { input.value = '' } }, false);
input.addEventListener('blur', function(){ if(input.value === '') {    input.value = 'Search Here';    } }, false); 
form.addEventListener('submit', search, false);
function search(event) {
    // alert('Form Submitted');
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
} 