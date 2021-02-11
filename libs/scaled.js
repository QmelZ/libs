// https://github.com/Anuken/Arc/blob/master/arc-core/src/arc/math/Scaled.java
// this one still is missing 2 features and its kinda messy

let Scaled = {
    fin: function(){
        return (Time.time % 1);
    },
    fout: function(margin){
        if(typeof(margin) === undefined){
            return 1 - this.fin();
        }else{
            let f = this.fin();
            if(f >= 1 - margin){
                return 1 - (f - (1 - margin)) / margin;
            }else{
                return 1;
            }
        }
    },
    finpow: function(){
        Interp ? return Interp.pow3Out.apply(this.fin()) : 0;
    },
    fslope: function(){
        return (0.5 - Math.abs(this.fin() - 0.5)) * 2;
    }
}

module.exports = Scaled;
