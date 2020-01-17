Vue.component('todo-item', {
    props: ['leg'],
    template: `
    <div class="input-group mb-3">
    <input v-model='leg.startingPoint' type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    `
});


var app = new Vue({
    el: '#app',
    data: {
        message: '',
        tripLegs:[
            {id: 1, startingPoint: "Christchurch", destination: "Dunedin", timeToGetThereInMin: 300, beginTravel: '0900', stayDurationAtDestInMin: 720}, //Till Midnight                                                                                     
            {id: 2, startingPoint: "Dunedin", destination: "Queenstown", timeToGetThereInMin: 180, beginTravel: '0900', stayDurationAtDestInMin: 720}, 
            {id: 3, startingPoint: "Queenstown", destination: "Christchurch", timeToGetThereInMin: 300, beginTravel: '0900', stayDurationAtDestInMin: 720}, 
        ]
    },
    methods: {
        addLeg: function(){
            this.tripLegs.push(this.tripLegs.length + 1);
            this.message = this.tripLegs[(this.tripLegs.length - 1)].startingPoint;
        }
    }
});


