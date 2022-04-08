class Greeter{
    constructor(dateService){
        this.dateService = dateService
    }    
    greet(userName){
        if (this.dateService.getCurrentTime().getHours() < 12){
            return `Hi ${userName}, Good Morning!`
        } else {
            return `Hi ${userName}, Good Day!`
        }
    }
}

export default Greeter;