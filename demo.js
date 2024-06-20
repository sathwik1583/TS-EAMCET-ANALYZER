let data;
let branch=[];
let colIndex=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
let caste="9";
let place=[];
let type=[];
let affiliated=[];
let range=100000;
function showLoadingIndicator() {
    document.getElementById('loadingIndicator').style.display = 'block';
}
function hideLoadingIndicator() {
    document.getElementById('loadingIndicator').style.display = 'none';
}
function fetchdata(){
    showLoadingIndicator();
    fetch("TSEAMCET2022FINALPHASE.json")
    .then(result=>result.json())
        .then(info=>{
            data=info;
            hideLoadingIndicator();
            Rank();
        });
}
function Rank(){
    let rank=document.getElementById("rank").value;
    let table=document.getElementById("table");
            if (table.querySelector("thead")) {
                table.querySelector("thead").remove();
                table.querySelector("tbody").remove();
            }
            let thead=document.createElement("thead");
            let tbody=document.createElement("tbody");
            let tr=document.createElement("tr");
            for(let i=1;i<996;i++){
                for(let j=i+1;j<996;j++){
                    if(data[i][caste]>=data[j][caste])
                    {
                        let t=data[i];
                        data[i]=data[j];
                        data[j]=t;
                    }
                }
            }
            for(let j=0;j<=28;j++){
                let th=document.createElement("th");
                th.textContent=data[0][colIndex[j]];
                tr.appendChild(th);
            }
            thead.appendChild(tr);
            for(let i=1;i<996;i++){
                let tr=document.createElement("tr");
                if(rank<=data[i][caste] &&(branch.length===0||branch.includes(data[i][7]))&&(place.length===0||place.includes(data[i][3]))&&(type.length===0||type.includes(data[i][5]))&&(affiliated.length === 0 || affiliated.includes(data[i][28]))){
                    for(let j=0;j<=28;j++){
                        let td=document.createElement("td");
                        td.textContent=data[i][colIndex[j]];
                        tr.appendChild(td);
                    }
                    tbody.appendChild(tr);
                }
            }
            table.appendChild(thead);
            table.appendChild(tbody);     
}
function demo(cast){
    console.log(cast);
    caste=cast;
    if(caste=="29"){
    colIndex=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    caste="9";
    }
    else{
    colIndex=[0,1,2,3,4,5,6,7,8,caste,27,28];
    }
    for(let i=1;i<996;i++){
        for(let j=i+1;j<996;j++){
            if(data[i][caste]>=data[j][caste])
            {
                let t=data[i];
                data[i]=data[j];
                data[j]=t;
            }
        }
    }
   
}
function demo1(val){
    const checkbox=document.getElementById(val);
   if(checkbox.checked){
    branch.push(val);
   }
   else{
    const index = branch.indexOf(val);
    if(index!==-1){
        branch.splice(index,1);
    }
   }
}
function demo2(val){
    const checkbox=document.getElementById(val);
   if(checkbox.checked){
    place.push(val);
   }
   else{
    const index = place.indexOf(val);
    if(index!==-1){
        place.splice(index,1);
    }
   }
}
function demo3(val){
   const checkbox=document.getElementById(val);
   if(checkbox.checked){
    type.push(val);
   }
   else{
    const index = type.indexOf(val);
    if(index!==-1){
        type.splice(index,1);
    }
   }
}
function demo4(id) {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
        affiliated.push(id);
    } else {
        const index = affiliated.indexOf(id);
        if (index !== -1) {
            affiliated.splice(index, 1); 
        }
    }
}

