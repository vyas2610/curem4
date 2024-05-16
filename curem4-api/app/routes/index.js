const productcontroller = require('../controllers/productController/productcontroller')
const routes = (app) => {
    app.get("/products", productcontroller.index)
    app.post("/products", productcontroller.create)
    app.put("/products/:id", productcontroller.update)
    app.get("/products/:id", productcontroller.details)
    app.delete("/products/:id", productcontroller.destroy)
}



module.exports = routes;