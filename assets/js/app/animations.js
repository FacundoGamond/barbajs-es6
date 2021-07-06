
class WaypointsNavigation {
    constructor(container) {
        this.container = container;
    }

    init() {
        setTimeout(()=>{
            const modules = this.container.querySelectorAll('.module');
            modules.forEach((module, i) => {
                if(i!=0){
                    module.waypoint = new Waypoint({
                        element: module,
                        handler: function (direction) {
                            anime({
                                targets: module,
                                opacity: [0, 1],
                                translateY: [100, 0],
                                easing: 'easeOutQuad',
                                delay: anime.stagger(100)
                            });
                            this.destroy();
                        },
                        offset: "90%"
                    });
                }
    
            });
        },100)
    }
}

export default WaypointsNavigation;