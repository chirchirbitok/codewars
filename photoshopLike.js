
function magicWand(image, target){
    
    for(let i=0;i<image.length;i++){   
        
        for(let j=0;j<image.length;j++){

            if(image[i][j]==target){
                return true;
            }else{
                return false;
            }


        }
        //console.log( image[i])
    }
   // return image;

}
    
var matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
var target = 4;
console.log(magicWand(matrix, target));