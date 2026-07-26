export class ApiError extends Error {
    constructor(statusCode,message){

        super(message)
        this.msg = message
        this.statusCode = statusCode
    }
}