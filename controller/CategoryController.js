const CategoryModel = require("../model/CategoryModel");

async function getCategories(req, res) {
  try {
    const result = await CategoryModel.find();
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
}

async function insertCategory(req, res) {
  try {
    const { name, description } = req.body;
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(404).send({ error: "Category Exist" });
    }

    const category = new CategoryModel({
      name,
      description,
    });
    const result = await category.save();
    return res.status(201).send({ msg: "Category added successfully" });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
}

async function updateCategory(req, res) {
  try {
    const { name, description, category_id } = req.body;

    const updated_Category = await CategoryModel.findByIdAndUpdate(
      category_id,
      { name, description },
      { new: true }
    );

    if (!updated_Category) {
      return res.status(404).send({ error: "Category not found" });
    }

    return res
      .status(200)
      .send({ msg: "Category updated successfully", updated_Category });
  } catch (error) {
    console.error("Update Category Error:", error);
    return res.status(500).send({ error: "Server error" });
  }
}

async function deleteCategory(req, res) {
  try {
    const category_id = req.params;
    const result = await CategoryModel.findByIdAndDelete(category_id);
    if (!deleteCategory) {
      return res.status(404).send({ error: "Category not found" });
    }
    return res
      .status(200)
      .send({ msg: "Category deleted successfully", deleteCategory });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
}

module.exports = {
  getCategories,
  insertCategory,
  updateCategory,
  deleteCategory,
};
