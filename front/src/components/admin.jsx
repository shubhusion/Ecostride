// admin.jsx
import React, { useState } from 'react';
import './admin.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Admin = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImageURL, setProductImageURL] = useState('');
    const [productInStock, setProductInStock] = useState(false);

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const [categoryIdToDelete, setCategoryIdToDelete] = useState('');

    const [productIdToUpdate, setProductIdToUpdate] = useState('');
    const [updatedProductName, setUpdatedProductName] = useState('');
    const [updatedProductDescription, setUpdatedProductDescription] = useState('');
    const [updatedProductPrice, setUpdatedProductPrice] = useState('');
    const [updatedProductCategory, setUpdatedProductCategory] = useState('');
    const [updatedProductImageURL, setUpdatedProductImageURL] = useState('');
    const [updatedProductInStock, setUpdatedProductInStock] = useState(false);

    const [categoryIdToGetProducts, setCategoryIdToGetProducts] = useState('');

    const handleAddProduct = () => {
        // Add product logic
    };

    const handleAddCategory = () => {
        // Add category logic
    };

    const handleDeleteCategory = () => {
        // Delete category logic
    };

    const handleUpdateProduct = () => {
        // Update product logic
    };

    const handleGetProductsByCategory = () => {
        // Get products by category logic
    };

    return (
        <div className="admin-container">
            <div className="crud-column">
                <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <input type="text" placeholder="Product Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                <input type="number" placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                <input type="text" placeholder="Product Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
                <input type="text" placeholder="Product Image URL" value={productImageURL} onChange={(e) => setProductImageURL(e.target.value)} />
                <label htmlFor="instock">In Stock: </label>
                <input type="checkbox" id="instock" checked={productInStock} onChange={(e) => setProductInStock(e.target.checked)} />
                <button onClick={handleAddProduct}><i className="fas fa-plus"></i> Add Product</button>
            </div>
            <div className="crud-column">
                <input type="text" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                <input type="text" placeholder="Category Description" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)} />
                <button onClick={handleAddCategory}><i className="fas fa-plus"></i> Add Category</button>
            </div>
            <div className="crud-column">
                <input type="number" placeholder="Category ID to Delete" value={categoryIdToDelete} onChange={(e) => setCategoryIdToDelete(e.target.value)} />
                <button onClick={handleDeleteCategory}><i className="fas fa-trash"></i> Delete Category</button>
            </div>
            <div className="crud-column">
                <input type="number" placeholder="Product ID to Update" value={productIdToUpdate} onChange={(e) => setProductIdToUpdate(e.target.value)} />
                <input type="text" placeholder="Updated Product Name" value={updatedProductName} onChange={(e) => setUpdatedProductName(e.target.value)} />
                <input type="text" placeholder="Updated Product Description" value={updatedProductDescription} onChange={(e) => setUpdatedProductDescription(e.target.value)} />
                <input type="number" placeholder="Updated Product Price" value={updatedProductPrice} onChange={(e) => setUpdatedProductPrice(e.target.value)} />
                <input type="text" placeholder="Updated Product Category" value={updatedProductCategory} onChange={(e) => setUpdatedProductCategory(e.target.value)} />
                <input type="text" placeholder="Updated Product Image URL" value={updatedProductImageURL} onChange={(e) => setUpdatedProductImageURL(e.target.value)} />
                <label htmlFor="updatedinstock">Updated In Stock: </label>
                <input type="checkbox" id="updatedinstock" checked={updatedProductInStock} onChange={(e) => setUpdatedProductInStock(e.target.checked)} />
                <button onClick={handleUpdateProduct}><i className="fas fa-plus"></i> Update Product</button>
            </div>
            <div className="crud-column">
                <input type="number" placeholder="Category ID to Get Products" value={categoryIdToGetProducts} onChange={(e) => setCategoryIdToGetProducts(e.target.value)} />
                <button onClick={handleGetProductsByCategory}><i className="fas fa-plus"></i> Get Products</button>
            </div>
        </div>
    );
};

export default Admin;
