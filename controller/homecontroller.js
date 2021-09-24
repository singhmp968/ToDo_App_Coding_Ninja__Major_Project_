//
//const db = require('./config/mongoose')
const TodoLists = require('../models/todo_list')
const swal = require('sweetalert')
dummytodo = [
    {
    uId:'1',
    desc:'getveggi',
    category:'personal',
    dueDate:'12/12/2021'
    },
    {
    uId:'2',
    desc:'getveggi',
    category:'personal',
    dueDate:'12/12/2021'
    }
    


]
// var contactList = [
//     {
//         name:'Rahul',
//         phone:'74125963'
//     },
//     {
//         name:'tonk start',
//         phone:'45632178'
//     },
//     {
//         name:'coding Ninjas',
//         phone:'74125896'
//     }
// ]


module.exports.home = function(req,res){
    // fetching using mongoose
    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        
        return res.render('homePage',{
            title:"Home",
            todoList:todo
           
        })
    })
    
    
    //return res.end('<h1>@home page</h1>')
    // return res.render('homePage',{
    //     title:"Home",
    //     todoList:dummytodo
    //     //todoList:contactList
    // })

}

// module.exports.getTodoValues = function(req,res){
//     console
// }

module.exports.createTodo = function(req,res){
let months = ['jan','feb','mar','Apr','May','june','july','aug','sept','oct','nov','dec']
    console.log('sdasas',req.body)   
   // dummytodo.push(req.body)
    dueDate =req.body.dateValue.split('-');
    console.log('--->',dueDate)   
    newdate = '';
    let monapp = '';
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+' '+monapp+' '+dueDate[0]
   
    TodoLists.create({
        desc:req.body.desc,
        category:req.body.category,
        dueDate: newdate
    },function(err,newArr){
        if(err){
            console.log('Oops error occoured');
            return;
        }
        swal("Hello world!");

        console.log('data is being added',newArr)
        return res.redirect('/')
    })
   
   
    }
module.exports.deleteTodo = function(req,res){
    console.log(req.query.id)
    sp = req.query.id;
    newsp = sp.split(',');
    console.log('==>',newsp)
    
    for(let i=0;i<newsp.length;i++){
        TodoLists.findByIdAndDelete(newsp[i],function(err){
            if(err){
                console.log('err')
                return;
            }
        })
    }
return res.redirect('/')
    // TodoLists.findByIdAndDelete({
    //     _id:{
    //         id:req.query.id
    //     }
    // },function(err,deleteTodo){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log('data is beign deleted')
    //     return res.redirect('/')

    // })
    // //TodoLists.findByIdAndDelete()

//     sp = req.query.id;
//     newsp = sp.split(',');
//     console.log('sp=>',newsp)
//     for(let j=0;j<sp.length;j++){
//     for(let i=0;i<dummytodo.length;i++){
//         if(sp[j]==dummytodo[i].uId){
//             //console.log('@@',j)
//             dummytodo.splice(i,1)
//         }
//     }
// }

//     let j=0;
//     let idarr = []
//     for(let l=0;l<req.query.id.length;l++){
//         console.log(req.query.id)
//         if(req.query.id.charAt(l)!= ','){
//             idarr[l] = req.query.id;
//         }

//     }
// console.log('arr',idarr)


    // for(let i=0;i<dummytodo.length;i++){
    //     if(dummytodo[i].uId == req.query.id ){
    //          console.log(dummytodo[i])
    //             dummytodo.splice(i,1)

    //         }
        
    
    // let todoIndex =dummytodo.findIndex(todo => todo.uId === i) // findIndex is a Js function and findIndex iterate over each item and find the requeide value if it is matching then it will return Index value else it will return -1
    //     console.log(contactIndex)
    //     if(contactIndex!=-1){
    // contactList.splice(contactIndex,1)
    // }
    
}

module.exports.EditPage = function(req,res){
    console.log('aaa',req.query)
    TodoLists.findById(req.query.id,function(err,todoLists){
        if(err){ console.log('hi man!! it an error'); return}
    
        console.log('toli',todoLists)
        return res.render('editPage',{
        title:'Edit Page',
        todolist:todoLists
        })
    })
    
    // return res.render('editPage',{
    //     title:'Edit Page'
    // })
}

module.exports.editDetails = function(req,res){
    console.log('==>>',req.query.id)
    console.log('asd',req.body)
    TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:req.body.dueDate}} ,function(err,todoData){
        if(err){console.log('erroe while updating'); return}
        return res.redirect('/')
    })
}

