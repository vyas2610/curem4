const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const index = async (req, res) => {
  try {
    let response = await prisma.products.findMany();
    res.send(response);
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};
const create = async (req, res) => {
  try {
    let data = req.body;
    let image = req.files; //name as file
    let fileArr = image.file;
    let fileName = "/images/products/" + fileArr.name;
    let fdata = __dirname + "/../../../public" + fileName;
    if (image) {
      fileArr.mv(fdata);
    }
    data.price = parseFloat(data.price);
    data.rating = parseInt(data.rating);
    await prisma.products.create({
      data: { ...data, image: fileName },
    });
    res.send({
      msg: "Data Added..!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    let data = req.body;
    data.price = parseFloat(data.price);
    data.rating = parseInt(data.rating);

    await prisma.products.update({
      where: {
        id: parseInt(req.params.id),
      },
      data,
    });
    res.send({
      msg: "Date updated...!",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};
const details = async (req, res) => {
  try {
    let details = await prisma.products.findFirst({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send(details);
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

const destroy = async (req, res) => {
  console.log("params", req.params);
  try {
    await prisma.products.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send({
      msg: "Data Deleted Success...!",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};
module.exports = { index, create, update, details, destroy };
