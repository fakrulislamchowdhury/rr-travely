import React from 'react';
import './AddTour.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://whispering-coast-93144.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully.');
                    reset();
                }
            })
    };

    return (
        <div className='add-tour'>
            <h2>Please Add a Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 30 })} placeholder='Title' />
                <input {...register("rating")} placeholder='Rating' />
                <input type="number" {...register("price")} placeholder='$00/Per Person' />
                <input {...register("img")} placeholder='Image url' />
                <textarea {...register("detail")} placeholder='Detail' />
                <input type="submit" />
            </form>
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
            < br />
        </div>
    );
};

export default AddTour;