const app = Vue.createApp({
    data() {
        return{
            product:"Socks",
            description:"the best sock ever seen",
            image:"assets/images/socks_green.jpg",
            url:"https://chatgpt.com/c/67ed0170-5dac-800f-8b41-f17b8e3fbbb9",
            Inventory:100,
            onSale:false,
            details:["50% cotton" ,"30% wool", "20% polyester"],
            varients:[ 
                { id:2234, color:"green" ,image:"assets/images/socks_green.jpg"},
                {id:2235, color:"blue",image:"assets/images/socks_blue.jpg"}
            ],
            cart:0

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
        }
        
    }
})