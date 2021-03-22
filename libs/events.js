let eventlist = {};

let events = {
    on(event, run){
        if(!event || !run) return;
        if(typeof event !== "string") return;
        if(typeof run !== "function") return;
        
        if(!eventlist[event]) eventlist[event] = [];
        eventlist[event].push(run);
    },
    run: events.on,
    
    remove(event, run){
        if(!event || !run) return;
        if(typeof event !== "string") return;
        if(typeof run !== "function") return;
        
        if(!eventlist[event]) return;
        eventlist[event] = eventlist[event].filter(e => e !== run);
    },
    
    clear(event){
        if(!event){
            eventlist = {};
        }else{
            eventlist[event] = [];
        }
    },
    
    fire(event){
        eventlist[event].forEach(e => e());
    }
};

module.exports = events;
