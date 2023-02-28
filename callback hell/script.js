const h1 = document.createElement("h1");
const para = document.createElement("h2");
h1.innerText = "Count Down Starts...";
para.innerText = "Count--";
para.classList.add("heading")
document.body.append(h1, para);

let count = 10;
setTimeout(function(){
    para.innerText = count;
    count--;
    setTimeout(function(){
        para.innerText = count;
        count--;
        setTimeout(function(){
            para.innerText = count;
            count--;setTimeout(function(){
                para.innerText = count;
                count--;
                setTimeout(function(){
                    para.innerText = count;
                    count--;
                    setTimeout(function(){
                        para.innerText = count;
                        count--;
                        setTimeout(function(){
                            para.innerText = count;
                            count--;
                            setTimeout(function(){
                                para.innerText = count;
                                count--;
                                setTimeout(function(){
                                    para.innerText = count;
                                    count--;
                                    setTimeout(function(){
                                        para.innerText = count;
                                        count--;
                                        setTimeout(function(){
                                            para.innerText = count;
                                            count--;    
                                        para.innerText = "Happy Independence Day!"
                                      }, 1000);
                                    }, 1000);                                    
                                }, 1000);                                
                            }, 1000);                            
                        }, 1000);                        
                    }, 1000);                    
                }, 1000);                
            }, 1000);            
        }, 1000);
    }, 1000);
}, 1000);




