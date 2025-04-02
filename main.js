const app = Vue.createApp({
    data() {
        return{
            product:"Socks",
            brand:"Vue mastery",
            description:"the best sock ever seen",
            selectedVariant:0,
    
            url:"https://chatgpt.com/c/67ed0170-5dac-800f-8b41-f17b8e3fbbb9",
            Inventory:100,
            details:["50% cotton" ,"30% wool", "20% polyester"],
            varients:[ 
                { id:2234, color:"green" ,image:"assets/images/socks_green.jpg",quantity:50,toSell:true},
                {id:2235, color:"blue",image:"assets/images/socks_blue.jpg",quantity:0,toSell:false}
            ],
            cart:0,
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
          }
        
    }
})