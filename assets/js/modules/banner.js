class Banner{
    constructor(module){
        this.text = module.innerText;
    }

    init(){
        console.log(this.text);
    }
}

export default Banner;