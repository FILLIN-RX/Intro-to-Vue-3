app.component('product-display',{
  props:{
    premium:{
        type:Boolean,
        required:true
    }
  },

    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!--image goes here-->
        <img :class="{ 'out-of-stock-img': !Instock }" :src="image">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="Instock">In stock</p>
        <p v-else>Out of stock</p>
        <p v-if="toSell">On sale</p>
        <p v-else>not on sale</p>
        <p>{{sale}}</p>
        <p>shipping:{{shopping}}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>

          <div
           v-for="(variant,index) in varients"
           :key="variant.id"
            @mouseover="updateVariant(index)"
             class="color-circle" 
             :style="{backgroundColor:variant.color}">
            </div>
        </ul>
        
        <button :class="{disabledButton: !Instock}" class="button" @click="addToCart" :disabled="!Instock">add to card</button>

      </div>
    </div>
  </div>`,
  data() {
    return{
        product:"Socks",
        brand:"Vue mastery",
        description:"the best sock ever seen",
        selectedVariant:0,

        url:"https://chatgpt.com/c/67ed0170-5dac-800f-8b41-f17b8e3fbbb9",
        Inventory:100,
        
        varients:[ 
            { id:2234, color:"green" ,image:"../assets/images/socks_green.jpg",quantity:50,toSell:true},
            {id:2235, color:"blue",image:"../assets/images/socks_blue.jpg",quantity:0,toSell:false}
        ],
        onSale:true
        
        

    }
    
    
},
methods:{
    addToCart(){
        this.cart +=1
    },
    removeToCart(){
        if (this.cart>=1) {
            this.cart -=1
            
        }
        

    },
    updateImage(variantImage){
        this.image=variantImage
    },
    updateVariant(index){
        this.selectedVariant=index
        console.log(index)
    },
    
},
computed:{
    title(){
        return this.brand + ' ' + this.product
    },
    image() {
        return this.varients[this.selectedVariant].image
      },
      Instock() {
        return this.varients[this.selectedVariant].quantity 
      },
      toSell(){
        return this.varients[this.selectedVariant].toSell
      },
      sale(){
        if (this.onSale) {
            return this.brand + " " + this.product + " is on sale"
        }
        return ""
      },shopping(){
        if (this.premium) {
          return "free shipping"
          
        }
        return 2.99
      }

    
}

})

    