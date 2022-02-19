/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/
//figure out how to count the number of 3s
//loop thru the numbers? it is a number, so we can't loop thru it
//change the number to a string? can we loop thru a string? 
//loop, with conditional, if 3 is included then we add to the count.
function countThrees(n) {
count = 0
string = n.toString()

for(i = 0; i < string.length; i++){
    if(string[i] === "3"){
        count ++
    }
}
return count
}

module.exports = countThrees
