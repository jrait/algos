//Write an algorithm to efficiently run 2 elevators over 10 floors

class Elevator{
    constructor(){
        this.inner_request = []
        this.outer_request = []
        this.current_floor = 0
    }

    outer_button_press(num){
        if(this.outer_request.length>1){
            for(let i in this.outer_request){
                if(this.outer_request[i]>num || this.outer_request[i+1]==undefined){
                    this.outer_request = this.outer_request.slice(0,i).concat(num).concat(this.outer_request.slice(i))
                    return this.outer_request
                }
            }
        }
        else if(this.outer_request.length ==1){
            if(num<this.outer_request[0]){
                this.outer_request = [num,this.outer_request[0]]
            }
            else{
                this.outer_request.push(num)
            }
        }

        else{
        this.outer_request.push(num)
    }
    }

    inner_button_press(num){
        if(this.inner_request.length>1){
            for(let i in this.inner_request){
                if(this.inner_request[i]>num || !this.inner_request[i+1]){
                    this.inner_request = this.inner_request.slice(0,i).concat(num).concat(this.inner_request.slice(i))
                    return this.inner_request
                }
            }
        }
        else if(this.inner_request.length ==1){
            if(num<this.inner_request[0]){
                this.inner_request = [num,this.inner_request[0]]
            }
            else{
                this.inner_request.push(num)
            }
        }
        else{
        this.inner_request.push(num)}
    }

    arrival(num){
        for(let i = 0;i<this.inner_request.length;i++){
            if(this.inner_request[i] ==num){
                this.inner_request.splice(i,1)
            }
        }
        for(let i = 0;i<this.outer_request.length;i++){
            if(this.outer_request[i] ==num){
                this.outer_request.splice(i,1)
            }
        }
    }
}

var wonkavator = new Elevator()

wonkavator.inner_button_press(3)
wonkavator.inner_button_press(6)
wonkavator.inner_button_press(5)
wonkavator.inner_button_press(2)

console.log(wonkavator.inner_request)
