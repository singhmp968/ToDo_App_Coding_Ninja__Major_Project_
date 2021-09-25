let designcl = ['work','Personal','Claeaning','Otheres']
$(document).ready(function(){

    let categorys = document.getElementsByClassName('catesec');
        for(let i=0;i<categorys.length;i++){
            let Cateval=categorys[i].innerHTML.trim();
            console.log(Cateval)
            if(categorys[i].innerHTML.trim()=='Work'){
               categorys[i].classList.add(designcl[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(designcl[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Claeaning'){
                categorys[i].classList.add(designcl[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Otheres'){
                categorys[i].classList.add(designcl[3])
                categorys[i].classList.add('commonClass')
            }
        }
});

// section from making cross line on checked
function checkedOrNot(){
    let cb = document.querySelectorAll('.delechack');
    let descdisp = document.querySelectorAll('.dispdsc');
    let ddsp = document.querySelectorAll('.dueDate');
    console.log('sdadsa',ddsp)
    
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
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                  //window.location = '/';
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
           // window.location = '/';
        },
        error: function(err){
            console.log(err);
        }

    });


})