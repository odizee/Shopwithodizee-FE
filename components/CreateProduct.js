import useForm from './../lib/useForm';
import styled, { keyframes } from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products';
import Router from 'next/router';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }
  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyle = styled.form`
    
        display: flex;
        /* justify-content: space-around; */
        flex-direction: column;
        align-items: center;
        background: #fff;
        margin: auto;
        border-radius: 10px;
        box-sizing: border-box;
        /* height: 50rem; */
        padding: 2rem;
        width: 45rem;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
        .btn {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
            width: 100%;
            
            button {
                width: 45%;
            }
        }

        fieldset {
            border: 0;
            padding: 0;
            
            &[disabled] {
                opacity: 0.5;
            }
            &::before {
                height: 10px;
                content: '';
                display: block;
                background-image: linear-gradient(
                    to right,
                    #ff3019 0%,
                    #e2b04a 50%,
                    #ff3019 100%
                );
            }
            &[aria-busy='true']::before {
            background-size: 50% auto;
            animation: ${loading} 0.5s linear infinite;

            }
        }
        
`; 

const Input = styled.div `
        display: flex;
        flex-direction: column;
        width: 40rem;
        margin: auto;
        .ic1 {
            margin-top: 40px;
        }
        
        .ic2 {
            margin-top: 30px;

        }
        .input-container {
            height: 50px;
            position: relative;
            width: 100%;
            
            .cut {
                background-color: #fff;
                border-radius: 10px;
                height: 20px;
                left: 20px;
                position: absolute;
                top: -20px;
                transform: translateY(0);
                transition: transform 200ms;
                width: 76px;
            }


            input, textarea {
                background-color: #e4e3df86;
                border-radius: 12px;
                border: 0;
                box-sizing: border-box;
                color: #003049;
                font-size: 1.8rem;
                height: 100%;
                outline: 0;
                padding: 4px 20px 0;
                width: 100%;
                box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
            }

            input:focus ~ .cut,
            input:not(:placeholder-shown) ~ .cut, textarea:focus ~ .cut, textarea:not(:placeholder-shown) ~ .cut {
                transform: translateY(8px);
            }

            input:not(:placeholder-shown) ~ .placeholder, textarea:not(:placeholder-shown) ~ .placeholder {
                color: #dc2f55;
            }

            input:focus ~ .placeholder, textarea:focus ~ .placeholder {
                color: #dc2f55;
            }

            .placeholder {
                color: #65657b;
                font-family: sans-serif;
                left: 20px;
                font-size: 1.8rem;
                line-height: 14px;
                pointer-events: none;
                position: absolute;
                transform-origin: 0 50%;
                transition: transform 200ms, color 200ms;
                top: 20px;
            }

            input:focus ~ .placeholder,
            input:not(:placeholder-shown) ~ .placeholder, textarea:focus ~ .placeholder, textarea:not(:placeholder-shown) ~ .placeholder {
                transform: translateY(-30px) translateX(10px) scale(0.75);
            }

        }
`;

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION (
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ) {
        createProduct (
            data: {
                name: $name
                description: $description
                price: $price
                status: "AVAILABLE"
                photo: {
                    create: {
                        image: $image, altText: $name
                    }
                }
            }
        ) {
            id
            price
            description
            name            
        }
    }
`;
export default function CreateProduct() {

    const { inputs, handleChange, clearForm, resetForm } = useForm({
        name: 'Nice',
        price: 2222,
        description: 'very nice shoe'
    });
    const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    })
    console.log(createProduct)
    return (
        <FormStyle onSubmit={async (e) => {
            e.preventDefault();
            const res = await createProduct();
            clearForm()
            Router.push({
                pathname: `/product/${res.data.createProduct.id}`
            })
        }}>
            <fieldset disabled={loading} aria-busy={loading}>

                <Input>
                    <div className="input-container ic1">
                        <input
                            type="file"
                            id="image"
                            required
                            name="image" 
                            onChange={handleChange} 
                            />   
                        <div className="cut"></div>
                        <label htmlFor="image" className="placeholder">image</label> 
                    </div>
                    <div className="input-container ic2">
                        <input
                            type="text"
                            id="name"
                            name="name" 
                            value={inputs.name} 
                            onChange={handleChange} 
                            placeholder=" "
                            />   
                        <div className="cut"></div>
                        <label htmlFor="name" className="placeholder">name</label> 
                    </div>
                    <div className="input-container ic2">
                        <input 
                        type="number"
                        id="price"
                        name="price" 
                        value={inputs.price} 
                        onChange={handleChange} 
                        placeholder=" " /> 
                        <div className="cut"></div>
                        <label htmlFor="name" className="placeholder">price</label>   
                    </div>
                    <div className="input-container ic2">
                        <textarea 
                        id="description"
                        name="description" 
                        value={inputs.description} 
                        onChange={handleChange} 
                        placeholder=" " /> 
                        <div className="cut"></div>
                        <label htmlFor="description" className="placeholder">description</label>   
                    </div>
                </Input> 
                <div className="btn">
                    <button type="submit">+ Add Product</button>
                </div>
            </fieldset>
        </FormStyle>
    )
}
