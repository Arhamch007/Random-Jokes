

const joke=document.getElementById('joke');
const button=document.getElementById('btn');

const badjoke= async ()=>{

    try{
        const setheader={
            headers:{
            Accept:"application/json"}
        }
    const response=await fetch('https://icanhazdadjoke.com', setheader);
    const data=await response.json();
    joke.innerHTML=data.joke
    }catch(err){
        console.log(`${err}`);
    }

}

button.addEventListener('click',badjoke); 
badjoke();