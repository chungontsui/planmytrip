Vue.component('todo-item', {
    props: ['leg'],
    template: `
    <form class="form-inline">
    <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" class="form-control" v-model="leg.startingPoint" id="startingPoint" value="email@example.com">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="text" class="form-control" v-model="leg.destination" id="destination" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
    </form>
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


