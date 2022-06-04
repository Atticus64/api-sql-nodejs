
export const queries = {
    getAllProducts: 'SELECT * FROM PRODUCTS',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductId: 'SELECT * FROM Products Where Id = @Id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
}


