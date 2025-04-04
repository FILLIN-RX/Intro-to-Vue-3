

app.component('review-form',{





    /*html*/
    template:
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        
        
        </select>
        <label for="recommandation">would you recommend this product</label>
        <input id="recommandation" v-model="recommandation">
        <input class="button" type="submit" value="Submit">
    
    
    </form>`,
    data() {
        return {
            name:'',
            review:'',
            rating:null,
            recommandation:''
        }
    },
    methods:{
        onSubmit(){
            if (this.name===''||this.review===''||this.rating=== null ||this.recommandation==='') {
                alert("reviews must be full")
                return
                
            }
            let productReview={
                name:this.name,
                review:this.review,
                rating:this.rating,
                recommandation:this.recommandation
            };
            console.log("form submitted",productReview),
            this.$emit('review-submitted',productReview)

            this.name='',
            this.review='',
            this.rating=null,
            this.recommandation=''
        }

    }
})