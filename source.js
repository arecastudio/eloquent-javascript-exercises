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


function exercise2(){
    console.log('Exercise Chapter 2. FizzBuzz');

    for(let i=1;i<=100;i++){
	if(i % 3==0){
	    console.log(i+' Fizz');
	    if(i%5==0){
		console.log(i+' FizzBuzz');
	    }
	}else if(i%5==0){
	    console.log(i+' Buzz');
	    if(i%3==0){
		console.log(i+' FizzBuzz');
	    }
	}
    }
}


function exercise3(){    
    let x=8;
    console.log('Exercise Chapter 2. Chessboard. Binding: '+x);
    let bar='# # # #';
    for(let i=0;i<x;i++){
	if(i%2==0){
	    console.log(' '+bar);
	}else{
	    console.log(bar);
	}
    }
}

function exercise4(){    
    let x=16;
    console.log('Exercise Chapter 2. Chessboard Two Dimension. Binding: '+x);
    let bar='';

    for(let z=0;z<x;z++){
	bar+='# ';
    }
    
    for(let i=0;i<x;i++){	
	if(i%2==0){
	    console.log(' '+bar);
	}else{
	    console.log(bar);
	}
    }
}
