class Drumkit {
    constructor(){
        this.pads = document.querySelectorAll(".pad");
        this.playButton = document.querySelector(".play");
        this.currentKick = './sounds/kick-basic.wav';
        this.currentSnare = './sounds/snare-classic.wav';
        this.currentHihat = './sounds/hihat-classic.wav';
        this.currentBass = './sounds/bass-deep.wav';
        this.currentBreath = './sounds/breath1.wav';
        this.currentClap = './sounds/clap-behind.wav';
        this.currentHey = './sounds/hey1.wav';
        this.currentHo = './sounds/ho1.wav';
        this.currentOh = './sounds/oh1.wav';
        this.currentWhat = './sounds/what.wav';

        this.kickAudio = document.querySelector(".kick-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.snareAudio = document.querySelector(".snare-sound");
        this.bassAudio = document.querySelector(".bass-sound");
        this.breathAudio = document.querySelector(".breath-sound");
        this.clapAudio = document.querySelector(".clap-sound");
        this.heyAudio = document.querySelector(".hey-sound");
        this.hoAudio = document.querySelector(".ho-sound");
        this.ohAudio = document.querySelector(".oh-sound");
        this.whatAudio = document.querySelector(".what-sound");

        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select");
        this.muteBtns = document.querySelectorAll(".mute");
        this.tempoSlider = document.querySelector(".tempo-slider");
    }
    activePad(){
        // console.log(this);
        this.classList.toggle("active");
    }
    repeat(){
        let step = this.index % 12;
        // console.log(`step ${step} and index ${this.index}`);
        const activeBars = document.querySelectorAll(`.b${step}`);
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if(bar.classList.contains('active')){
                if(bar.classList.contains("kick-pad")){
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains("snare-pad")){
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains("hihat-pad")){
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
                if(bar.classList.contains("breath-pad")){
                    this.breathAudio.currentTime = 0;
                    this.breathAudio.play();
                }
                if(bar.classList.contains("bass-pad")){
                    this.bassAudio.currentTime = 0;
                    this.bassAudio.play();
                }
                if(bar.classList.contains("clap-pad")){
                    this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                }
                if(bar.classList.contains("hey-pad")){
                    this.heyAudio.currentTime = 0;
                    this.heyAudio.play();
                }
                if(bar.classList.contains("ho-pad")){
                    this.hoAudio.currentTime = 0;
                    this.hoAudio.play();
                }
                if(bar.classList.contains("oh-pad")){
                    this.ohAudio.currentTime = 0;
                    this.ohAudio.play();
                }
                if(bar.classList.contains("what-pad")){
                    this.whatAudio.currentTime = 0;
                    this.whatAudio.play();
                }
            }
        })
        // console.log(step);
        this.index++;
    }
    start(){
        const interval = (60/this.bpm) * 1000;
        if(this.isPlaying){
            clearInterval(this.isPlaying);
            this.isPlaying = null;
            
        } else {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval);
        }
    }
    updateBtn(){
        if (!this.isPlaying){
            this.playButton.innerText = "Stop";
            this.playButton.classList.add("active");
        }else {
            this.playButton.innerText = "Play";
            this.playButton.classList.remove("active");
        }
    }
    changeSound(e){
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch (selectionName) {
            case "kick-select":
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src = selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = selectionValue;
                break;
            case "bass-select":
                this.bassAudio.src = selectionValue;
                break;
            case "breath-select":
                this.breathAudio.src = selectionValue;
                break;
            case "clap-select":
                this.clapAudio.src = selectionValue;
                break;
            case "hey-select":
                this.heyAudio.src = selectionValue;
                break;
            case "ho-select":
                this.hoAudio.src = selectionValue;
                break;
            case "oh-select":
                this.ohAudio.src = selectionValue;
                break;
            case "what-select":
                this.whatAudio.src = selectionValue;
                break;
        }
    }
    mute(e){
        // console.log(e);
        const muteIndex = e.target.getAttribute("data-track");
        e.target.classList.toggle("active");
        if (e.target.classList.contains("active")){
            switch (muteIndex){
                case "0":
                    this.kickAudio.volume = 0;
                    break;
                case "1":
                    this.snareAudio.volume = 0;
                    break;
                case "2":
                    this.hihatAudio.volume = 0;
                    break;
                case "3":
                    this.bassAudio.volume = 0;
                    break;
                case "4":
                    this.breathAudio.volume = 0;
                    break;
                case "5":
                    this.clapAudio.volume = 0;
                    break;
                case "6":
                    this.heyAudio.volume = 0;
                    break;
                case "7":
                    this.hoAudio.volume = 0;
                    break;
                case "8":
                    this.ohAudio.volume = 0;
                    break;
                case "9":
                    this.whatAudio.volume = 0;
                    break;
            }
        } else {
            switch (muteIndex) {
                case "0":
                    this.kickAudio.volume = 1;
                    break;
                case "1":
                    this.snareAudio.volume = 1;
                    break;
                case "2":
                    this.hihatAudio.volume = 1;
                    break;
                case "3":
                    this.bassAudio.volume = 1;
                    break;
                case "4":
                    this.breathAudio.volume = 1;
                    break;
                case "5":
                    this.clapAudio.volume = 1;
                    break;
                case "6":
                    this.heyAudio.volume = 1;
                    break;
                case "7":
                    this.hoAudio.volume = 1;
                    break;
                case "8":
                    this.ohAudio.volume = 1;
                    break;
                case "9":
                    this.whatAudio.volume = 1;
                    break;
            }
        }
    }
    changeTempo(e){
        const tempoText = document.querySelector('.tempo-nr');
        tempoText.innerText = e.target.value;
    }
    updateTempo(e) {
        this.bpm = e.target.value;
        clearInterval(this.isPlaying);
        this.isPlaying = null;
        const playButton = document.querySelector(".play");
        if (playButton.classList.contains("active")){
            this.start();
        }
    }
}


const drumkit = new Drumkit();

drumkit.pads.forEach(pad => {
    pad.addEventListener("click", drumkit.activePad);
    pad.addEventListener("animationend", function(){
        this.style.animation = "";
    })
});

drumkit.playButton.addEventListener('click', () => {
    drumkit.updateBtn();
    drumkit.start();
    
});


drumkit.selects.forEach( select => {
    select.addEventListener('change', function(e){
        drumkit.changeSound(e)
    });
});

drumkit.muteBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        drumkit.mute(e);
    });
});

drumkit.tempoSlider.addEventListener('input', function(e){
    drumkit.changeTempo(e);
});
drumkit.tempoSlider.addEventListener('change', function(e){
    drumkit.updateTempo(e);
});