function workWArrays(){
    // alert("Clicked");
    let fruits = [];
    let fruits2 = new Array();
    let fruits3 = ['Apple', 'Berry', 'Cherry', 44];
    fruits3[3] = "Duran";
    fruits3.push( "Eggplant" );
    console.log("Fruit size = " + fruits3.length);
    console.log(fruits3);

    let appleCherry = fruits3[0] + fruits3[2];

    for( let i = 0; i < fruits3.length; i++){
        console.log(fruits3[i]);
    }
    console.log("---------------------------------");
    fruits3.forEach( (fruit, index) => {
        console.log( `index: ${index} value ${fruit}` );
    });

    // removing an element
    fruits3.shift(); // removes first
    fruits3.pop(); // removes last
    console.log(fruits3);


    let inx = fruits3.indexOf("Cherrys");
    console.log("index = " + inx);
}