arr1 = [1, 2, 8, 9, 12, 46, 76, 82, 15, 29, 30]
var a=0

var result = {}

for(let i=1; i<10;i++ ){
    for(let j=0;j<arr1.length;j++){

        if(arr1[j]%i==0){
            if(i in result){
                result[i]+=1
            }
            else{
                result[i]=1
            }
        }
    }

}
console.log(result);







