// import functions

// grab DOM elements
const showButton = document.getElementById('animal-button');
const animal = document.getElementById('animal-div');
    // console.log(showButton, animal); works!
// set event listeners 
showButton.addEventListener('click', () => {
    //console.log('show button clicked');
    //remove hidden class and display animal
    animal.classList.remove('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
