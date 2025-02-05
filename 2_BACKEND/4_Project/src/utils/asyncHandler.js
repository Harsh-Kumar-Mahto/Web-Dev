// In this util file we will make a block of code that will be a reusable code for handling an async function using try-catch or promises(.then-.catch)
// In utils we write utility codes that are helpful to us again and again


// 1. Using try-catch

// const asyncHandler = () => {}
// const asyncHandler = (function) => () => {}
// const asyncHandler = (function) => async() => {}
    
// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// };

// 2. Using promises

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    } 
}

export {asyncHandler}