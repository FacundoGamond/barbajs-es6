class Hero {
    constructor(module) {
        this.title=module.innerText;
    }

    init() {
        console.log(this.title);
    }
}

export default Hero;