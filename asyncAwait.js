// --------------->> ASYNC AWAIT <<----------------
let asyncAwaitFunc = (dataID) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Awsait Data ", dataID);
            resolve("success")
        }, 3000)
    })
}

// using IIFE = Immediately Invoked Function Expression. 
// You don't need to call the function. It is called automatically as you have to add "()" at the end of the function.
// But w this syntax, you can use this function only once. So use it accordingly.
(async function () {
    await asyncAwaitFunc(3);
    await asyncAwaitFunc(4);
})()


// w/o using IIFE
async function getAsyncData() {
    await asyncAwaitFunc(2);
    await asyncAwaitFunc(1);
}
getAsyncData()







// -------->> PROMISES -- to overcome CALLBACK HELL <<---------
// PROMISE CHAIN -------------------->>
function asyncPromise1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data 01");
            resolve("Success async 01")
        }, 5000);
    }) 
}

function asyncPromise2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data 02");
            resolve("success async 02")
        }, 5000);
    })
}

// let promise01 = asyncPromise1()

// promise01.then(result => {
//     console.log("get result", result);
//     let promise02 = asyncPromise2()
//     promise02.then(result => {
//         console.log(result);
        
//     })
// })


asyncPromise1().then(result => {
    return asyncPromise2().then(result => {
    }).then (result => {
        return asyncPromise1()
    }).then(result => {
        return asyncPromise2(result)
    }).then(result=> {
        console.log("get result", result);

    })
})


// Promise chain may look better than callback hell, 
// but Async Await looks clearer 
// and top programmers often use especially when you need to do one task after finishing its immediate previous task 
// like check password only after you find that username is correct while logging in




// // Promise = is an Object in JS. ----------->>
// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//     console.log("Promise");
//     resolve("Success!")
// })}

// let promise = getPromise()

// promise.then((res) => console.log("Promise resolved", res))

// promise.catch((err) => console.log("Catch this error", err))


// // const getPromiseData = (dataID, getNextData) => {
// //     return new Promise ((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("data", dataID);
// //             resolve("Promise done!")
// //             if (getNextData) {
// //                 getNextData()
// //             }
// //         }, 9000);
// //     })
// // }

// // let finalVal = getPromiseData(23); // before and after 9 sec, check finalVal 
// // // - Promise's state will be pending before 9 sec and after 9 sec, after returning the function

// // // console.log(finalVal);


// // In real world, we don't create Promise. We get Promise with fulfilled or rejected result from an API and 
// // then we do something with the result 
// // If the result is fulfilled, we use "promise.then(res => {})" - tell the next step.
// // If rejected, promise.catch(err => {}) - catch the error.






// // ----------->> CallBack Hell <<------------
// const getData = (dataID, getNextData) => {
//     setTimeout(() => {
//         console.log("data", dataID)
//         if (getNextData) { // if getNextData argument is passed
//            getNextData() // only then getNextData will be called
//         }
        
//     }, 2000);
// }

// getData(2, () => {
//     getData(1, () => {
//         getData(4) // getNextData isn't passed
//     })
// })



// // EVEN WORSE Practice. COMPLEX TO READ && UNDERSTAND ---------->>
// function sum(a, b) {
//     console.log(a + b);
// }

// function multiply(c, d) {
//     console.log(c*d);
    
// }

// function callBackHell(a, b, callbackFunc, callbackFunc2) {
//     callbackFunc(a, b);
//     callbackFunc2(a, b);
    
// }

// let storeSum = () => {
//     callBackHell(2, 9, sum, () => { // you'll find sum after 3 sec
//         setTimeout(() => {
//             multiply(2,5)
//         }, 2000); // you'll find multiply after 9 + 2 = after total 11 sec 
//     })
// }

// setTimeout((storeSum), 9000);