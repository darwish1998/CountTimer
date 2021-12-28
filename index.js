class CountTimer{
    constructor(durationInput,startButton,pauseButton){
        this.durationInput = durationInput;
        this.startButton   = startButton;
        this.pauseButton   = pauseButton;

        this.startButton.addEventListener('click',this.start);
    }

start = () => {
   
};
}
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

 const countTimer = new CountTimer(durationInput,startButton,pauseButton);

 // countTimer.start();

// Explanation
// console.log(this);

// const printThis = () => {
//     console.log(this);
// }

// const ahmed = function () {
//         console.log(this);    
// };

// ahmed();

// const colors = {
//     printColor(){
//         console.log(this)

//     }

// };

// const randomObjct = {
//     c:4
// }

// randomObjct.printColor = colors.printColor;
// randomObjct.printColor();

// const umuAhmed = function () {
//     console.log(this);
// }
// umuAhmed();