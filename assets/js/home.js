const buttons = document.getElementById('buttons');
const deleteForm = document.getElementById('deleteForm');
const addForm = document.getElementById('addForm');
const submitBtn1 = document.getElementById('submitBtn1');
const submitBtn2 = document.getElementById('submitBtn2');

buttons.addEventListener('click', function(e){
    let button = e.target; 

    if(button == submitBtn1){
        addForm.submit();
    }
    else if(button == submitBtn2){
        deleteForm.submit();
    }
    
  });