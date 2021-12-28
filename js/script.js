const counters = document.querySelectorAll('.counter');
// The lower the slower

let counterBox = document.getElementById("counter-box");
counterBox.addEventListener("mouseenter", function(e){
    let speed = 0; 
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target').toLocaleString();
            const count = +counter.innerText.toLocaleString();
            if (target < 10){
                speed =100;
            } else if(target < 20){
                speed = 500;
            } else if(target < 100){
                speed = 100;
            } else{
                speed = 135;
            }
            // Lower inc to slow and higher to slow
            const inc = target / speed;
    
            // console.log(inc);
            // console.log(count);
    
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                if(target<10){
                    setTimeout(updateCount, 650);
                }else if(target < 25){
                    setTimeout(updateCount, 60);
                }else if(target <31){
                    setTimeout(updateCount, 55);
                }else if(target < 100){
                    console.log("im slow");
                    setTimeout(updateCount, 25);
                }else{
                    setTimeout(updateCount, 0.75);
                }
                
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
    
        updateCount();
    });
});

/*courses page*/


