import database from '../models'

class ProductService {
  static async all() {
    try {
      return await database.Product.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.Product.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const ProductToUpdate = await database.Product.findOne({
        where: { id: Number(id) }
      })
      if (ProductToUpdate) {
        await database.Product.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await database.Product.findOne({
        where: { id: Number(id) }
      })
      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const ProductToDelete = await database.Product.findOne({ where: { id: Number(id) } })

      if (ProductToDelete) {
        const deleteProduct = await database.Product.destroy({
          where: { id: Number(id) }
        })
        return deleteProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }
}
export default ProductService