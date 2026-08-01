const titles = [
    "Full-Stack Developer",
    "Backend Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = titles[titleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1500);

            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            titleIndex++;

            if(titleIndex===titles.length)
                titleIndex=0;
        }

    }

    setTimeout(type,deleting?60:120);

}

type();
