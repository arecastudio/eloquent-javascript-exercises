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

function exercise5(){
    console.log('Exercise Chapter 3 - Function. Minimum');
    min=(f,s)=>{
	f=parseInt(f);
	s=parseInt(s);
	let r=f;
	if(s<f){
	    r=s;
	}

	return r;
    }

    console.log(min(0,10));
    console.log(min(0,-10));
}


function exercise6(){
    console.log('Exercise Chapter 3. Function. IsEven');
    var r=false;
    isEven=(n)=>{
	n=parseInt(n);	
	
	if(n==1){
	    r=false;
	}else if(n==0){
	    r=true;
	}else{	    
	    isEven(n-2);
	    //console.log(`hasil: ${n}, status:${r}`);
	}
	return r;
    }

    console.log(isEven(50));
    console.log(isEven(75));
    //console.log(isEven(-1));
}

function exercise7(){
    console.log('Exercise Chapter 3. Function. Bean Counting');

    countBs=(s)=>{
	let l=s.length;
	let match='B';
	let c=0;
	for(let i=0;i<l;i++){
	    //console.log(s.substring(i,1));
	    if(s.substring(i,i+1)==match){		
		c++;
	    }
	}
	return c;
    }

    countChar=(s,c)=>{
	let l=s.length;
	let cnt=0;
	let current='';
	
	for(let i=0;i<l;i++){
	    current=s.substring(i,i+1);
	    //console.log(`${current}`);
	    if(current==c){
		cnt++;
	    }
	}

	return cnt;
    }

    console.log(countBs('BBC'));
    console.log(countChar('kakkerlak', 'k'));
    console.log(countChar('BBC', 'B'));
}
