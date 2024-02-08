window.addEventListener('load', function() {
    document.getElementById('01').checked = true;
    let first = Math.round(Math.random()*255)
    let snd =  Math.round(Math.random() *255)
    let third = Math.round(Math.random()*255)
    lastinp1.value = first
    lastinp2.value = snd
    lastinp3.value = third
    document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
});
const Default = document.getElementById("01")    
const green = document.getElementById("02")
const red = document.getElementById("03")
const blue = document.getElementById("04")





//    let inp = document.getElementById("input")
//    inp.addEventListener("keyup", (me)=>{
    //    console.log(me.target.value);
    //    document.getElementById("show").innerHTML = `<p>${me.target.value}</p>`
    //    })

         Default.addEventListener("click", (e)=>{
	    div.innerHTML = `Click on the button above for random colors.`
		if(e.target.checked === true){
        var btn1 = document.getElementById("change")
        btn1.addEventListener("click",(now)=>{
        let first = Math.round(Math.random()*255)
        let snd =  Math.round(Math.random() *255)
        let third = Math.round(Math.random()*255)
        lastinp1.value = first
        lastinp2.value = snd
        lastinp3.value = third
        document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
        })
		}
		})
		 
		 
		var btn0 = document.getElementById("change")
        btn0.addEventListener("click",(now)=>{
        let first = Math.round(Math.random()*255)
        let snd =  Math.round(Math.random() *255)
        let third = Math.round(Math.random()*255)
        lastinp1.value = first
        lastinp2.value = snd
        lastinp3.value = third
        document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
        })
		

       

green.addEventListener("click", (e)=>{
        console.log(e.target.checked);
        document.body.style.background = "green"
        div.innerHTML = `Try several set of <h5 id="g">Green</h5> colors by clicking the buttton above.`
        if(e.target.checked === true){
        var btn1 = document.getElementById("change")
        btn1.addEventListener("click",(now)=>{
        let first = Math.round(Math.random()*100)
        let snd =  Math.round(Math.random() * (255 - 80) + 80)
        let third = Math.round(Math.random()*100)
        lastinp1.value = first
        lastinp2.value = snd
        lastinp3.value = third
        document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
    })
        
    }
})



red.addEventListener("click", (e)=>{
        console.log(e.target.checked);
        div.innerHTML = `Try several set of <br/><h5 id="r">Red</h5> colors by clicking the button above.`

        document.body.style.background = "red"
        if(e.target.checked === true){
            var btn2 = document.getElementById("change")
            btn2.addEventListener("click",(now)=>{
                let first = Math.round(Math.random() * (255 - 80) + 80)
                let snd =   Math.round(Math.random()*50)
                let third = Math.round(Math.random()*50)
                lastinp1.value = first
                lastinp2.value = snd
                lastinp3.value = third
                document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
    })
        
    }
})



blue.addEventListener("click", (e)=>{
    div.innerHTML = `Try several set of <h5 id="b">Blue</h5> colors by clicking the button above.`
        console.log(e.target.checked);
        document.body.style.background = "blue"
        if(e.target.checked === true){
            var btn3 = document.getElementById("change") 
            btn3.addEventListener("click",(now)=>{
                let first = Math.round(Math.random() *100)
                let snd =  Math.round(Math.random()*100)
                let third = Math.round(Math.random() * (255 - 60) + 60)

                lastinp1.value = first
                lastinp2.value = snd
                lastinp3.value = third
                document.body.style.backgroundColor = `rgb(${lastinp1.value}, ${lastinp2.value}, ${lastinp3.value})`
    })
        
    }
})
const result = document.getElementById("lastinp1")
const result2 = document.getElementById("lastinp2")
const result3 = document.getElementById("lastinp3")
let one;
let two;
let three;

result.addEventListener("input", (event) => {
    one = event.target.valueAsNumber;
    show()
});

result2.addEventListener("input", (event) => {
    two = event.target.valueAsNumber;
    show()
});

result3.addEventListener("input", (event) => {
    three = event.target.valueAsNumber;
    show()
});

function show(){
    document.body.style.backgroundColor = `rgb(${one}, ${two}, ${three})`
}
