

//for promisifying
const util = require('util');



//function that returns callback
//takes a parameter @test

function exampleFunction(test, callBack) {

    //this example function takes in only 3, if any other param not 3 is passed 
    //in through @test then it throws an error

    if (test == 3) {

        //return success with message "3 DETECTED !!!"
        //first param is error, sencond is success
        return callBack(null, "3 DETECTED !!!")

    } else {

        //return error with message "Only 3 Acceptable"
        //first param is error, sencond is success
        return callBack(new Error("Only 3 Acceptable"), null)

    }

}





//Call exampleFunction() with callback
function callbackTest() {

    //call //put 3 as parameter
    exampleFunction(3, function (error, result) {

        if (error) {//if error

            console.log(error)

        } else {//if successful

            console.log(result)

        }
    })

}


//Call exampleFunction() in Async
function asyncTest() {

    //async function
    (async function () {

        //call 
        var prom_test = util.promisify(exampleFunction);

        //put 3 as parameter //catch error if it returns error
        let result = await prom_test(3).catch((e) => console.log(e))

        console.log(result)

    })();

}