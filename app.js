Vue.component('todo-item', {
    props: ['leg'],
    template: "<form><input type='text' v-model='leg.startingPoint'/></form>"
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


