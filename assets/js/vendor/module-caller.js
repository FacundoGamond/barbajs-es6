const moduleCaller = (modules, container)=>{
    //JSON
    modules.forEach(module => {
        const modulesDom = container.querySelectorAll(module.domModule);
        //EACH of json
        modulesDom.forEach(singleModule=>{
            const classInstance = new module.classModule(singleModule);
            classInstance.init();
        })
    });
}

export default moduleCaller;