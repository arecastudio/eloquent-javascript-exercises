console.log('Eloquent Javascript Exercises');

function exercise1(){
    console.log('Exercise Chapter 2. Looping a triangle');
    res='';
    for(let i=0;i<=7;i++){
	while(res.length<i){
	    res+='#';
	}
	if(res!='')console.log(res);
    }
    
}
