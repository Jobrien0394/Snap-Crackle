// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let max = prompt ("What is the highest number you would like to go to?")
function snapCrackle(max) {
    
    let output = ""
    
    for (let count = 1; count <= max; count += 1) {
        
        let isOdd = count % 2 !== 0
        
        let isMultipleOf5 = count % 5 === 0
        
        if (isOdd === true && isMultipleOf5 === false) {
            output += "Snap, "
        
        } else if (isOdd === false && isMultipleOf5 === true) {
            output += "Crackle, "
        
        } else if (isOdd === true && isMultipleOf5 === true) {
            output += "SnapCrackle, "

        } else if (isOdd === false && isMultipleOf5 === false) {
           output += count + ", "
        }
    }
    return output;
}
document.write(snapCrackle(max))