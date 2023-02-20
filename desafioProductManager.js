class ProductManager {
    constructor() {
        this.products = []
        this.idCounter = 1
    }

    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        const product = this.products.find(elem => elem.id === id)
        if (!product) {
            console.error("Not found")
            return
        }
        return product
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        //validación de los items
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("El producto no puede ser agregado porque faltan datos");
            return
        }
        //validar code no repetido
        if (this.products.find(elem => elem.code === code)) {
            console.error("El producto no puede ser agregado porque el code ya existe");
            return
        }
        const id = this.idCounter
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        })
        this.idCounter++
    }
}

const productManager = new ProductManager()
productManager.addProduct('Fender Telecaster', 'Guitarra Fender Telecaster 1972', "U$D" + " " + 950, 'http://www.centralmusica.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/u/guitarra-fender-telecaster.jpg', '101010', 12)
// console.log(ticketManager.getEvents())
productManager.addProduct('Fender Stratocaster', 'Guitarra Fender Stratocaster', "U$D" + " " + 849, 'https://f.fcdn.app/imgs/b0a5a9/www.palaciodelamusica.com.uy/pmusuy/d070/webp/catalogo/0144502500-0144502500_1/2000-2000/guitarra-electrica-fender-player-strat-mn-sunburst-guitarra-electrica-fender-player-strat-mn-sunburst.jpg', '101011', 10)
productManager.addProduct('Gibson Les Paul', 'Guitarra Gibson Les Paul Classic', "U$D" + " " + 899, 'https://f.fcdn.app/imgs/465904/www.palaciodelamusica.com.uy/pmusuy/2f95/webp/catalogo/LPCS00TRNH1-LPCS00TRNH1_1/2000-2000/guitarra-electrica-gibson-les-paul-classic-translucent-cherry-guitarra-electrica-gibson-les-paul-classic-translucent-cherry.jpg', '101010', 8)
console.log(productManager.getProducts())
productManager.addProduct('Fender Jazz Bass', 'Bajo eléctrico Fender Jazz con Funda', "U$D" + " " + 1029, 'https://bairesrocks.vteximg.com.br/arquivos/ids/203445/849080-MLA40983030446_032020-F.jpg?v=637313065068270000', 5)
console.log(productManager.getProducts())
