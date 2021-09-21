// section from making cross line on checked
function checkedOrNot(){
    let cb = document.querySelectorAll('.delechack');
    let descdisp = document.querySelectorAll('.dispdsc');
    let ddsp = document.querySelectorAll('.dueDate');
    
    
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        console.log(dueDate)
        if(cb[i].checked == true){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
           document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            
        }else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}

// seleceting on dsplay{}

document.getElementById('deleteButton').addEventListener('click',function(){
    
    let checedvaluew = document.querySelectorAll('.delechack:checked')
        console.log(checedvaluew)
    let arrcheck = [] 
    for(let i of checedvaluew){
        let gg=''
       gg= i.getAttribute('uid')    
        console.log(gg)
        arrcheck.push(gg);
       
    }
    if(arrcheck.length==null){
        console.log('hi');
        return;
    }
    // making delete request fro script file using Ajax
console.log('///=>',arrcheck)
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        success: function(response){
            alert('Delete');
            window.location = '/';
        },
        error: function(err){
            console.log(err);
        }

    });


})