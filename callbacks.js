function progressBar(start,progress,end,step){ //added step as a callback function 
    step = typeof step !== 'undefined' ? step : 1;//ternary function. If step is undefined, you choose the value to set it to
    //var   comparison                    true   false
    if(step==1){ 
        start();//onStart function
    }
    setTimeout(function(){//onProgress function
        if(step==100){ //if progressBar has reached the end at 100 count
            progress(step); //onProgress function will console.log(100%)
            end();//then onEnd function says 'complete'
            return; //get out of function altogether
        } else if(step%10===0){ //if in progress and a remainder of 0, 
            progress(step); //progress step will occur (i%)
        }
        step++; //count keeps going up to 100 is complete to exit function
        progressBar(start,progress,end,step); //progress bar is invoked
    }, 1000); //timeOut function: (1/10th of a second)  **1000 = 1 second**
}
var onStart = function(){
    console.log('started upload');
};
var onProgress = function(i){
    console.log(i+'%',Date());    
};
var onEnd = function(){
    console.log('complete');
};
progressBar(onStart,onProgress,onEnd);//this is what links onStart with start
									  //onProgress with progress
									  //onEnd with end
									  //and you can throw in a number
									  //from 1-100 after onEnd to start
									  //anywhere along the 'onProgress step'
									  //i.e.
						//progressBar(onStart,onProgress,onEnd,43);
						//results in:
						//50%
						//60%
						//70%
						//80%
						//90%
						//100%
						//complete
									  //or just leave the number out
									  //& the console.log prints all
									  //progress from 10% & up			  


 
