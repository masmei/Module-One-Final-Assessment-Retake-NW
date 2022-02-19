/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/
//return an array with anything but string that ends with "!"
//loop thru array and check if the last char of the string is "!"
//if above is false then push string into empty array.
function removeStringsEndingInBang(arr) {

result = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i].charAt(arr[i].length-1) != "!"){
        result.push(arr[i])
    }
}
return result
}

module.exports = removeStringsEndingInBang
