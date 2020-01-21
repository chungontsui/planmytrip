Vue.component('todo-item', {
    props: ['leg'],
    template: `
    <li><form class="form-inline">
    <div class="form-group mb-2">
    In&nbsp;
    <select class='form-control' v-model='leg.whenToTravel' v-on:change="$emit('data-change')" v-if="leg.id !== 1">
    <option value='0'>Same day</option>
    <option value='1'>Next day</option> 
    <option value='2'>1 day</option>
    <option value='3'>2 days</option>
    <option value='4'>3 days</option>
    <option value='5'>4 days</option>
    <option value='6'>5 days</option>
    </select>
    &nbsp;
    </div>
    <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" class="form-control" v-model="leg.startingPoint" id="startingPoint" value="email@example.com">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <input type="text" class="form-control" v-model="leg.destination" id="destination" placeholder="Password">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <input type="number" class="form-control" v-model="leg.timeToGetThereInMin" id="timeToGetThereInMin" placeholder="">
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <select class="form-control" v-model='leg.beginTravel' v-on:change="$emit('data-change')">
    <option value='1'>01:00</option>
    <option value='2'>02:00</option>
    <option value='3'>03:00</option>
    <option value='4'>04:00</option>
    <option value='5'>05:00</option>
    <option value='6'>06:00</option>
    <option value='7'>07:00</option>
    <option value='8'>08:00</option>
    <option value='9'>09:00</option>
    <option value='10'>10:00</option>
    <option value='11'>11:00</option>
    <option value='12'>12:00</option>
    <option value='13'>13:00</option>
    <option value='14'>14:00</option>
    <option value='15'>15:00</option>
    <option value='16'>16:00</option>
    <option value='17'>17:00</option>
    <option value='18'>18:00</option>
    <option value='19'>19:00</option>
    <option value='20'>20:00</option>
    <option value='21'>21:00</option>
    <option value='22'>22:00</option>
    <option value='23'>23:00</option>
    <option value='24'>24:00</option>
    </select>
    </div>
    <button><i class="fas fa-camera"></i></button>
    </form></li>
    `
    // ,
    // methods:{
    //     calculateStayDuration: function(value){

    //     }
    // }
});


var app = new Vue({
    el: '#app',
    data: {
        message: '',
        tripLegs:[
            {id: 1, startingPoint: "Christchurch", destination: "Dunedin", timeToGetThereInMin: 300, beginTravel: 9, stayDurationAtDestInMin: 720}, //Till Midnight                                                                                     
            {id: 2, whenToTravel:1, startingPoint: "Dunedin", destination: "Queenstown", timeToGetThereInMin: 180, beginTravel: 9, stayDurationAtDestInMin: 720}, 
            {id: 3, whenToTravel:1, startingPoint: "Queenstown", destination: "Christchurch", timeToGetThereInMin: 300, beginTravel: 9, stayDurationAtDestInMin: 0}, 
        ],
        tripTotalMin:0
    },
    methods: {
        addLeg: function(){
            this.tripLegs.push(this.tripLegs.length + 1);
            this.message = this.tripLegs[(this.tripLegs.length - 1)].startingPoint;
        },
        calculateTotalTime: function(){
            let _totalMin = 0;
            //let _stayDuration = 
            // this.tripLegs.forEach(leg=>{
            //     _totalMin = _totalMin + (leg.beginTravel * 60) + leg.timeToGetThereInMin + leg.stayDurationAtDestInMin;
            // });
            let _stayDuration = 0;
            for(var i = 0; i < this.tripLegs.length; i++){
                _stayDuration = 0;
                //if(this.tripLegs[i].whenToTravel && this.tripLegs[i].whenToTravel !== undefined){
                    if(i > 0){
                        var lastLeg = this.tripLegs[(i - 1)];
                        console.log(this.tripLegs[i].whenToTravel);
                        _stayDuration = ((this.tripLegs[i].whenToTravel * 1440) + (this.tripLegs[i].beginTravel * 60)) - ((lastLeg.beginTravel * 60) + lastLeg.timeToGetThereInMin);

                        console.log('between leg ' + lastLeg.id + ' and leg ' + this.tripLegs[i].id + ', duration:' + _stayDuration);
                    }

                    

                    //_stayDuration = (this.tripLegs[i].beginTravel * 60) - (((lastLeg.beginTravel * 60) + lastLeg.timeToGetThereInMin) - (this.tripLegs[i].whenToTravel * 1440))
            
                                    //}

                // if(i < (this.tripLegs.length -1)){
                //     //get the next leg's whenToTravel to work out the present legs duration of stay
                //     _stayDuration = this.triplegs[(i + 1)].whenToTravel * 1440
                // }

                _totalMin = _totalMin + this.tripLegs[i].timeToGetThereInMin + _stayDuration;
                if(i > 0){
                    _totalMin += (this.tripLegs[i].beginTravel * 60);
                }
            }
            console.log("_totalMin: " + _totalMin);
            this.tripTotalMin = Math.ceil(_totalMin/(1440));
        }
    }
});


