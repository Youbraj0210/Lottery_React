//number generator
let genNumber = (n)=>{
    let arr=[]
    for(let i=0 ; i<n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
};

let sum = (arr)=>{
    return arr.reduce((e,curr)=>(curr+e));
}

export {genNumber,sum}