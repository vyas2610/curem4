const productcontroller = require('../controllers/productController/productcontroller')
const servicecontroller = require('../controllers/ServiceController/servicecontroller')
const newscontroller = require('../controllers/NewsController/NewsController')
const contactController = require('../controllers/ContactController/ContactController')
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

    //News Routes
    app.get("/news", newscontroller.index)
    app.post("/news", newscontroller.create)
    app.put("/news/:id", newscontroller.update)
    app.get("/news/:id", newscontroller.details)
    app.delete("/news/:id", newscontroller.destroy)

    //contact Routes
    app.get("/contact", contactController.index)
    app.post("/contact", contactController.create)
    app.put("/contact/:id", contactController.update)
    app.get("/contact/:id", contactController.details)
    app.delete("/contact/:id", contactController.destroy)
}



module.exports = routes;