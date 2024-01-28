import React, { useState } from 'react';

interface Product {
    Title: string;
    Name: string;
    Description: string;
    URL: string;
    Link: string;
    ID: number;
    Cost: number;
    Price: number;
    Category: string;
    Keywords: string;
} 

const ProductRegistration: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        Title: '',
        Name: '',
        Description: '',
        URL: '',
        Link: '',
        ID: 0,
        Cost: 0,
        Price: 0.00,
        Category: '',
        Keywords: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add Logc here to handle product rgistration (i.e. API Call)
        console.log(`Product Submitted: `, product);
    };

    return (
        <div>
            <h2>Product Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name of product, used for title of page:
                    <input 
                        type = 'text'
                        name = 'Title'
                        value = {product.Title} 
                        onChange = {handleChange}
                        required 
                    />
                </label>
                <br />
                <label>Name
                    <input 
                        type='text'
                        name='Name'
                        value={product.Name}
                        onChange={handleChange}
                    />
                </label>
                <label>Description
                    <input 
                        type='text'
                        name='Description'
                        value={product.Description}
                        onChange={handleChange}
                    />
                </label>
                <label>URL
                    <input 
                        type='text'
                        name='URL'
                        value={product.URL}
                        onChange={handleChange}
                    />
                </label>
                <label>Link
                    <input
                        type='text'
                        name='Link'
                        value={product.Link}
                        onChange={handleChange}
                    />
                </label>
                <label>ID
                    <input
                        type='text'
                        name='ID'
                        value={product.ID}
                        onChange={handleChange}
                    />
                </label>
                <label>Cost
                    <input
                        type='number'
                        name='Cost'
                        value={product.Cost}
                        onChange={handleChange}
                    />
                </label>
                <label>Price
                    <input
                        type='number'
                        name='Price'
                        value={product.Price}
                        onChange={handleChange}
                    />
                </label>
                <label>Category
                    <input
                        type='option'
                        name='Category'
                        value={product.Category}
                        onChange={handleChange}
                    />
                </label>
                <label>Keywords
                    <input
                        type='text'
                        name='Keywords'
                        value={product.Keywords}
                        onChange={handleChange}
                        />
                </label>
            </form>
        </div>
    );
};

export default ProductRegistration;