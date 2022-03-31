const btn = document.getElementById('btn');
const content = document.getElementById('content');

btn.addEventListener('click', getData);

function getData(){
    url = 'file.json'
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        content.innerHTML = JSON.stringify(data.employee1.salary);
        console.log(data);
    })
}

getData();