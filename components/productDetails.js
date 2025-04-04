app.component('product-details',{
    props:{
        details:{
            type:Array,
            required:true
        }
    },
    /*html*/
    template:
    `<p v-for="(detail ,index) in details" :key="index">{{detail}}</p>`
    
})