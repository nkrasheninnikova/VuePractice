let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        onSale: 'sale',
        selectedVariant: 0,
        altText: "A pair of socks",
        inStock: false,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'lime',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0

            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        decreaseCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product + ' ' + this.onSale;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }

})

