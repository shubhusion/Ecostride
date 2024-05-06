// admin.jsx
import React, { useState } from 'react';
import './admin.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './header.jsx';
import Footer from './footer';
import Addop from './addop';
import Company from './company';

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

    const handleAddProduct = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/product/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                    category: productCategory,
                    imageUrl: productImageURL,
                    categoryName: productCategory // assuming categoryName is the same as category for now
                })
            });
            if (response.ok) {
                console.log("Product added successfully")
                // You may want to update state or show a success message
            } else {
                // Handle error
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    

    const handleAddCategory = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/category/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: categoryName,
                    description: categoryDescription
                })
            });
            if (response.ok) {
                console.log("Category added successfully")
                // You may want to update state or show a success message
            } else {
                // Handle error
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };
    

    const handleDeleteCategory = async () => {
        try {
            const response = await fetch(`/api/categories/${categoryIdToDelete}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Category deleted successfully
                // You may want to update state or show a success message
            } else {
                // Handle error
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };
    

    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/product/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: productIdToUpdate,
                    name: updatedProductName,
                    description: updatedProductDescription,
                    price: updatedProductPrice,
                    category: updatedProductCategory,
                    imageUrl: updatedProductImageURL,
                    categoryName: updatedProductCategory // assuming categoryName is the same as category for now
                })
            });
            if (response.ok) {
                console.log("Product updated successfully");
                // You may want to update state or show a success message
            } else {
                // Handle error
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            console.error('Error updating product');
        }
    };
    

    const handleGetProductsByCategory = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/category/1`);
            if (response.ok) {
                const data = await response.json();
                // Handle received products data
            } else {
                // Handle error
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error getting products by category:', error);
        }
    };
    

    return (
        <>
        <Header />
        <Addop />
        <Company />
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
        </div>
        <Footer />
        </>
    );
};

export default Admin;
