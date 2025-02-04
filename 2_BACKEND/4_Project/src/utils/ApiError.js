// In this we will create an api error handling block of code, there itself is an error class in node js that provides predefined errors and messages
// But we want to customize it with our own error and messages

class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",   //This is a default message which is not much preferred, but if message parameter is empty, this will be shown
        errors = [],
        stack = ""
    )
    {
        super(message)         //When we want to overwrite something we have to use super
        this.statusCode = statusCode  //update the statusCode
        this.data = null       //to remove any type of data yet stored
        this.message = message //overwrite the message
        this.success = false   //since error is occured
        this.errors = errors   //overwrite the response

        // Little bit extra
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}