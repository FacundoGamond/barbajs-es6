//Module Caller
import moduleCaller from './vendor/module-caller';

//Usefull Scripts
import WaypointsNavigation from './app/animations';

//Import your modules
import Hero from './modules/hero';
import Banner from './modules/banner';
import Slider from './modules/slider';


//JSON modules for dynamic play
const modules = [{
    domModule: '.m-hero',
    classModule: Hero
},
{
    domModule: '.m-banner',
    classModule: Banner
},
{
    domModule: '.m-slider',
    classModule: Slider
}];

//Barba JS Script
barba.init({
    views: [{
        namespace: 'page',
        beforeEnter({ next }) {
            moduleCaller(modules, next.container);
        },
        afterEnter({ next }) {
            const animations = new WaypointsNavigation(next.container.closest('body'));
            animations.init();        
        }
    }]
});

