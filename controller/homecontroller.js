//const db = require('./config/mongoose')
const TodoLists = require('../models/todo_list')

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
    console.log(req.body)   
   // dummytodo.push(req.body)
    
    TodoLists.create({
        desc:req.body.desc,
        category:req.body.category,
        dueDate:req.body.dateValue
    },function(err,newArr){
        if(err){
            console.log('Oops error occoured');
            return;
        }
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

