//poly means many 
// morpy means forms 
// ism means method

// name of the fn is same but getting different output  
// same method doing diffrent things



class animal{
    sound(){
        console.log("animal make a diffrent sounds")
    }
}

class dog{
    sound(){
        console.log("dog make a barking sounds")
    }
}


class cat{
    sound(){
        console.log("cat make a mewm sounds")
    }
}

let animal1= new animal()
animal1.sound()

let dog1= new dog()
dog1.sound()

let cat1= new cat()
animal1.sound()