const inputs = Array.from(document.querySelectorAll('input'));
const btn = document.getElementById('btn');

function Pressed(){
  inputs.forEach((input)=>{
    if(input.value == ''){
      btn.classList.add='shadwo';

      alert('登録できません');
      
    }
    
  })

}


btn.addEventListener('click',Pressed);

