import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { doCreateProduct } from "../../axios/api";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
    name: yup.string().required("Name is required"),
    brand: yup.string().required("Brand is required"),
    description: yup.string().max(100, "Description should be less than 100 character").required("Description is required"),
    price: yup.number().typeError("Price is required"),
    qty: yup.number().typeError("Qty is required"),
    category: yup.array().typeError("Select Category").min(1, "Atleast one category should be selected")
}).required();

const MultiCheckBox = () => {

    const category = [
        { name: "Electronic", checked: false },
        { name: "Stationary", checked: false },
        { name: "Toys", checked: false },
        { name: "Fashion", checked: false }
    ]

    const handleOnChange = (e, name) => {
        const index = category.findIndex(item => item.name === name);
        category[index].checked = !category[index].checked
    }

    return (
        <>
            {
                category.map(item => (
                    <Form.Check
                        key={item.name}
                        inline
                        label={item.name}
                        name="group1"
                        type='checkbox'
                        id="inline_chk_1"
                        onChange={(e) => handleOnChange(e, item.name)}
                    />
                ))
            }
        </>
    )
}


const AddProducts = () => {


    const category = [
        { name: "Electronic", checked: false },
        { name: "Stationary", checked: false },
        { name: "Toys", checked: false },
        { name: "Fashion", checked: false },
    ]

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const navigate = useNavigate();

    const handleFormSubmit = async (data) => {
        // console.log(data);
         const result = await doCreateProduct(data);
        // console.log(result);
         navigate('/product/list');
    }

    return (
        <>
            <h3>Add Product</h3>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" {...register('name')} />
                    <Form.Text className="text-danger">
                        {errors.name?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Select {...register('brand')}>
                        <option>Select Brand</option>
                        <option value="HRX">HRX</option>
                        <option value="Levis">Levis</option>
                        <option value="Lee Cooper">Lee Cooper</option>
                        <option value="Being Human">Being Human</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.brand?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" {...register('description')} />
                    <Form.Text className="text-danger">
                        {errors.description?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" {...register('price')} />
                    <Form.Text className="text-danger">
                        {errors.price?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type="number" placeholder="Enter Quantity" {...register('qty')} />
                    <Form.Text className="text-danger">
                        {errors.qty?.message}
                    </Form.Text>
                </Form.Group>
                {
                    category.map(item => (
                        <Form.Check
                            key={item.name}
                            inline
                            label={item.name}
                            name="group1"
                            value={item.name}
                            type='checkbox'
                            {...register('category')}
                        />
                    ))
                }
                <div>
                    <Form.Text className="text-danger">
                        {errors.category?.message}
                    </Form.Text>
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}


export default AddProducts;