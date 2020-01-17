Vue.component('todo-item', {
    props: ['id'],
    template: '<li>{{id}}</li>'
});



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      tripLegs:[
          {id: 1, startingPoint: "Christchurch", destination: "Dunedin", timeToGetThereInMin: 300, beginTravel: '0900', stayDurationAtDestInMin:}, //Till Midnight                                                                                     
          {id: 2, startingPoint: "Dunedin", destination: "Queenstown", timeToGetThereInMin: 180, beginTravel: 'MORNING'}, 
          {id: 3, startingPoint: "Queenstown", destination: "Christchurch", timeToGetThereInMin: 300, beginTravel: 'MORNING'}, 
      2, 
      3]
    },
    methods: {
        addLeg: function(){
            this.tripLegs.push(this.tripLegs.length + 1);
        }
    }
});


