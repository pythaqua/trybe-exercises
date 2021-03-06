/* 

EXERCÍCIO:
 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
    Assuma que o valor de n será sempre ímpar: 

n = 7

   *
  * *
 *   *
*******

*/

const space = ' ';
const star = '*';
const pyramidBase = 17; // Always an odd value
var line; // Sets the line to be writen

for (let row = 1; row <= pyramidBase; row += 2) {
    let indentSize = (pyramidBase - row) / 2;
    let leftIndent = space.repeat(indentSize); // Sets the indent string
    // Calculating size of the inner void
    let voidSize = row - 2;
    // Checking whether it's the base of the pyramid
    // or its top (in which voidSize will be < 0)
    if ((row == pyramidBase) || voidSize < 0) {
        line = leftIndent + star.repeat(row);
    } 
    // If not so, writes inner void in line
    else {
        let innerVoid = space.repeat(voidSize);
        line = leftIndent + star + innerVoid + star;
    }
    console.log(line);
}
