let btn = document.getElementById('btn'); // استخدم الهوية الصحيحة للزر
let main = document.querySelector('.main');

btn.onclick = function(){
    main.classList.add('move');

}
