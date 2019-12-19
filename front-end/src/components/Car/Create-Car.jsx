import React, { useState } from "react";
import carService from '../../services/car-service';
import './Create.css';

const CreateCar = ({ history }) => {
    const [imageURL, setImageURL] = useState();
    const [imageFileName, setImageFileName] = useState();



    const handleSubmit = data => {
        data.ownerId = localStorage.getItem("userId");
        data.owner = localStorage.getItem("username");
        data.imageUrl = imageURL;
        data.likes = 0;

        carService.createCar(data).then(car => {
            history.push("/caroffers/findoffers");
        });
    };

    return (
        <div className='car-form'>
            <h2 className="title create">Create Your Car</h2>
            <form onSubmit className='create-form'>
                <div>
                <label htmlFor="make">Make</label>
                    <input
                        placeholder="Type car make..."
                        type="text"
                        name="make"
                    />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input
                        placeholder="Type car model..."
                        type="text"
                        name="model"
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        placeholder="Type car year..."
                        type="text"
                        name="year"
                    />
                </div>
                <div>
                    <label htmlFor="horsePower">Horsepower</label>
                    <input
                        placeholder="Type car horsepower..."
                        type="text"
                        name="horsePower"
                    />
                </div>
                <div>
                    <label htmlFor="mileage">Mileage</label>
                    <select
                        type="text"
                        name="mileage"

                    >
                        <option value="0" label="Select mileage" />
                        <option value="10000" label="Up to 10000" />
                        <option value="30000" label="Up to 30000" />
                        <option value="50000" label="Up to 50000" />
                        <option value="70000" label="Up to 70000" />
                        <option value="90000" label="Up to 90000" />
                        <option value="100000" label="Over 100000" />
                    </select>
                </div>
                <div>
                    <label htmlFor="engineCapacity">Engine Capacity</label>
                    <input
                        placeholder="Type car engine capacity..."
                        type="text"
                        name="engineCapacity"
                    />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"

                    >
                        <option value="" label="Select category" />
                        <option value="sedan" label="Sedan" />
                        <option value="suv" label="Suv" />
                        <option value="van" label="Van" />
                        <option value="coupe" label="Coupe" />
                        <option value="cabriolet" label="Cabriolet" />
                        <option value="hatchback" label="Hatchback" />
                    </select>
                </div>
                <div>
                    <label htmlFor="engine" className='engineBox'>Engine</label>
                    <select
                        name="engine"
                    >
                        <option value="" label="Select engine" />
                        <option value="electric" label="electric" />
                        <option value="diesel" label="diesel" />
                        <option value="gasoine" label="gasoline" />
                    </select>
                </div>
                <div>
                    <label htmlFor="euroStandard">Euro Standard</label>
                    <select
                        type="number"
                        name="euroStandard"

                    >
                        <option value="" label="No matter" />
                        <option value="1" label="Euro 1" />
                        <option value="2" label="Euro 2" />
                        <option value="3" label="Euro 3" />
                        <option value="4" label="Euro 4" />
                        <option value="5" label="Euro 5" />
                        <option value="6" label="Euro 6" />
                    </select>
                </div>
                <div >
                    <label htmlFor="price">Price</label>
                    <input
                        placeholder="$ 1000"
                        type="text"
                        name="price"

                    />
                </div>
                <div className="description">
                    <label htmlFor="price">Description</label>
                    <textarea
                        placeholder="Car problems and features..."
                        type="text"
                        name="description"

                    ></textarea>
                </div>
            </form>
        </div>
    );
};

export default CreateCar;