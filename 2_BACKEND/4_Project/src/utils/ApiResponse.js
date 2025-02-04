// Here we don't use any predefined class as for request and response we are not using node js instead we use express
// So we need to make full fledged class

class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}