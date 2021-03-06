import Macy from 'macy';
import $ from 'jquery'

var macyInstance1 = Macy({
    container: '.masonry-fashion',
    trueOrder: false,
    margin: 30,
    columns: 3,
    breakAt: {
        1199: {
            margin: 30
        },
        991: {
            margin: 25,
            columns: 2
        },
        767: {
            margin: 20
        },
        575: {
            margin: 15
        },
        479: {
            columns: 1
        },
        399: {
            margin: 15
        }
    }
});


$(window).on('load', function(){
    macyInstance1.reInit();
})