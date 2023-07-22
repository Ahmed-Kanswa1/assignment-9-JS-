var name1= document.getElementById('I1');
var url= document.getElementById('I2');
var inputs=[]

if(localStorage.getItem('inputsValue')!=null){
    inputs=JSON.parse(localStorage.getItem('inputsValue'));
    display();
}



function getValue(){
    var objectList={
        name:name1.value,
        url:url.value,
    }
    if(check(name1.value)==true&&check2(url.value)==true){
        inputs.push(objectList)

    console.log(objectList);
    console.log(inputs);
    localStorage.setItem('inputsValue',JSON.stringify(inputs))
    display()
    clear()
    removeRightWrong()
        
    }else alert('Enter Valid Data')
    
   
   
}
function display(){
    saveData=``;
    for(var i=0;i<inputs.length;i++){
        saveData+=`      <tr>
        <td>${i+1}</td>
        <td>${inputs[i].name}</td>
        <td><a href="${inputs[i].url}" target=_blank class="btn btn-success"><i class="fa-solid fa-eye pe-2 "></i>Visit</a></td>
        <td><button onclick="deleteUrl(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById('show').innerHTML=saveData
}
function clear(){
    name1.value=""
    url.value=""
}
function deleteUrl(index){
  
    inputs.splice(index,1);
    localStorage.setItem('inputsValue',JSON.stringify(inputs))
    display();
}


function check(str){
    var regex=/^[a-zA-z0-9]{3,}/
     return regex.test(str);

}
function check2(str){
    var regex2=/^(https:\/\/|)www\.[a-zA-z0-9]{2,}/
     return regex2.test(str);

}
function getInput(inp){
    if(check(inp)==true){
        console.log('good');
        // name1.style.cssText=`
        // box-shadow: 0 0 2px 2px rgb(101, 255, 132) !important;
        // `
        name1.classList.add('right')
        name1.classList.remove('wrong')

    }else if(check(inp)==false){
        name1.classList.add('wrong')
        name1.classList.remove('right')
    }

}
function getInput2(inp2){
    if(check2(inp2)==true){
        console.log('good');
        // name1.style.cssText=`
        // box-shadow: 0 0 2px 2px rgb(101, 255, 132) !important;
        // `
        url.classList.add('right')
        url.classList.remove('wrong')

    }else if(check2(inp2)==false){
        url.classList.add('wrong')
        url.classList.remove('right')
    }

}
function removeRightWrong(){
    name1.classList.remove('right')
    name1.classList.remove('wrong')
    url.classList.remove('right')
    url.classList.remove('wrong')
}