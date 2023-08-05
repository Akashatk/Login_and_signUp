let datas = [];
const seedata = () => {
    datas=localStorage.getItem('Profile Data');
    const data=JSON.parse(datas)
    const em=document.getElementById("emma").value;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(em==element.email){
            console.log("Hi")
            document.getElementById("name").innerHTML=element.name;
            document.getElementById("phone").innerHTML=element.phone;
            document.getElementById("dob").innerHTML=element.date;
            return
        }
    }  
    alert("No such Data found")  
}
const del = ()=>{
    datas=localStorage.getItem('Profile Data');
    let dataa=JSON.parse(datas)
    const emm=document.getElementById("emma").value;
    let dats=[]
    let a=0
    for (let i = 0; i < dataa.length; i++) {
        const element = dataa[i];
        if(emm==element.email){
            alert("Data has been deleted")
            a=1;
        }else{
            dats.append(element)
        }
    }
    localStorage.setItem('Profile Data', JSON.stringify(dats));
    if(a==0){
        alert("No such Data found")
    }
}
const edit = ()=>{
    datas=localStorage.getItem('Profile Data');
    let dataa=JSON.parse(datas)
    const emms=document.getElementById("emma").value;
    let dats=[]
    let a=0
    for (let i = 0; i < dataa.length; i++) {
        const element = dataa[i];
        if(emms==element.email){
            var attribute=document.getElementById(edit1).value
            var datax=document.getElementById(edit2).value
            element.attribute=datax
        }
        dats.append(datas[i])
    }
    localStorage.setItem('Profile Data', JSON.stringify(dats));
    alert("Data Edited")
    
}
