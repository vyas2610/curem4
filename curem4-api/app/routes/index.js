const productcontroller = require('../controllers/productController/productcontroller')
const servicecontroller = require('../controllers/ServiceController/servicecontroller')
const routes = (app) => {
    app.get("/products", productcontroller.index)
    app.post("/products", productcontroller.create)
    app.put("/products/:id", productcontroller.update)
    app.get("/products/:id", productcontroller.details)
    app.delete("/products/:id", productcontroller.destroy)

    // Service Routes
    app.get("/services", servicecontroller.index)
    app.post("/services", servicecontroller.create)
    app.put("/services/:id", servicecontroller.update)
    app.get("/services/:id", servicecontroller.details)
    app.delete("/services/:id", servicecontroller.destroy)
}



module.exports = routes;