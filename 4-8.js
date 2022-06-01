function totalTime(n,arr){
    var sum=0;
    let count=0;
    if(n==0){
        console.log("No till is empty");
    }else if(n==1){
        for(i=0;i<arr.length;i++){
            sum=(1*sum)+(1*arr[i]);
        }
        console.log(`array sum : ${sum}`);
    }else{
        count=arr[0];
        for(i=0;i<arr.length;i++){
        if(count>arr[i+1]){
            count=count-arr[i+1];
            sum=sum+arr[i+1];
        }else{
            petit=count;
            count=arr[i+1];
            count=count-petit;
            sum=sum+petit;
        }
    }

    }
    totaltime=sum;
    console.log(totaltime);
}
numbers=[9,8,3,2,16,8,10];
totalTime(2,numbers);