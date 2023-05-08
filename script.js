let plauPause = document.getElementById("play-pause");
let resetBtn = document.getElementById("reset");

let HOURS = document.getElementById("hrs");
let MINUTE = document.getElementById("min");
let SECONDS = document.getElementById("sec");
let MILLISEC = document.getElementById("millisec");

let MILSEC_TIME = 00;
let SEC_TIME = 00;
let MIN_TIME = 00;
let HRS_TIME = 00;
let timer;

//For PlayPause Button.
plauPause.addEventListener('click', function runTime() {

    //For Play Button
    if (plauPause.className === "play") {
        plauPause.classList.toggle("pause");
        plauPause.classList.remove("play");
        
        timer = setInterval(() => {
            MILLISEC.innerText = MILSEC_TIME;
            if (MILLISEC.innerHTML <= 9) {
                MILLISEC.innerHTML = "0" + MILSEC_TIME;
            }
            MILSEC_TIME++;

            if (MILLISEC.innerText === "99") {
                MILLISEC.innerHTML = "00";
                MILSEC_TIME = 0;
                SECONDS.innerText = SEC_TIME;

                if (SECONDS.innerHTML <= 9) {
                    SECONDS.innerHTML = "0" + SEC_TIME;
                }
                SEC_TIME++;


                if (SECONDS.innerHTML === "59") {
                    SECONDS.innerHTML = "00";
                    MILSEC_TIME = 0;
                    SEC_TIME = 0;
                    MIN_TIME++;
                    MINUTE.innerText = MIN_TIME;
                    if (MINUTE.innerHTML <= 9) {
                        MINUTE.innerHTML = "0" + MIN_TIME;
                    }


                    if (MINUTE.innerHTML === "60") {
                        MINUTE.innerHTML = "00";
                        MILSEC_TIME = 0;
                        SEC_TIME = 0;
                        MIN_TIME = 0;
                        HRS_TIME++;
                        HOURS.innerHTML = HRS_TIME;
                        if (HOURS.innerHTML <= 9) {
                            HOURS.innerHTML = "0" + HRS_TIME;
                        }


                    }
                }

            }

        }, 10);
    }

    //For Pause Button.
    else if (plauPause.className === "pause") {
        plauPause.classList.toggle("play");
        plauPause.classList.remove("pause");        
        clearInterval(timer);
    }
});

//For Reset Button. 
resetBtn.addEventListener('click', function resetTime() {
    HOURS.innerText = "00";
    MILLISEC.innerText = "00";
    MINUTE.innerText = "00";
    SECONDS.innerText = "00";

    MILSEC_TIME = 00;
    SEC_TIME = 00;
    MIN_TIME = 00;
    HRS_TIME = 00;

    clearInterval(timer);

    if (plauPause.className = "play") {
        plauPause.classList.toString('pause')
    }
    
});