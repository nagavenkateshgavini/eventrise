import React, { useState } from 'react';
import Header from "../../common/header/header";
import Form from 'react-bootstrap/Form';
import Footer from "../../common/Footer/footer";
import { Row, Col, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormContainer from './FormContainer';


export default function EventForm() {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if(!!errors[field]){
            setErrors({
                ...errors,
                [field]: null
            })
        }
    }

    const validateForm = () => {
        const {title, date, description, price, location, categorie } = form
        const newErrors = {}

        if(!date || date === '') newErrors.date = "Please enter date"
        else if(description.length < 10) newErrors.description = "Description should be more than 10 characters"

        if(!title || title === '') newErrors.title = "Please enter title"
        if(!price || price === '') newErrors.price = "Please enter price"
        if(!location || location === '') newErrors.location = "Please enter location"
        if(!categorie || categorie === '') newErrors.categorie = "Please enter categorie"

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }
        else{
            console.log("Form Submitted")
            console.log(form)
        }
    }

  return (
    <>
        <Header />
        <FormContainer>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <h1>Please add the event details in the form</h1>
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="eventForm.title">
                            <Form.Label className='fw-bold fs-5'>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="Event title"
                            value={form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid={!!errors.title}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="eventForm.description">
                            <Form.Label className='fw-bold fs-5'>Description</Form.Label>
                            <Form.Control as="textarea" rows={6} 
                            value={form.description}
                            onChange={(e) => setField('description', e.target.value)}
                            isInvalid={!!errors.description}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.description}
                            </Form.Control.Feedback>  
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="eventForm.eventAddress">
                            <Form.Label className='fw-bold fs-5'>Event Location</Form.Label>
                            <Form.Control as="textarea" rows={2}
                            value={form.location}
                            onChange={(e) => setField('location', e.target.value)}
                            isInvalid={!!errors.location}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.location}
                            </Form.Control.Feedback>  
                        </Form.Group>

                        <Form.Group as={Col} md="4" className="mb-3" controlId="eventForm.eventDate">
                            <Form.Label className='fw-bold fs-5'>Event Date</Form.Label>
                            <Form.Control type="date" placeholder='Enter Event Date'
                            value={form.date}
                            onChange={(e) => setField('date', e.target.value)}
                            isInvalid={!!errors.date}/>
                        
                            <Form.Control.Feedback type='invalid'>
                                {errors.date}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <br />

                        <InputGroup as={Col} md="3" className="mb-3" controlId="eventForm.eventPrice">
                            <InputGroup.Text>Price in $</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)"
                            value={form.price}
                            onChange={(e) => setField('price', e.target.value)}
                            isInvalid={!!errors.price}/>
                            <InputGroup.Text>.00</InputGroup.Text>

                            <Form.Control.Feedback type='invalid'>
                                {errors.price}
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                        <Form.Group controlId="eventForm.categorie">
                            <Form.Label className='fw-bold fs-5'>Event Categorie</Form.Label>

                            <Form.Select placeholder='Select Event Categorie'
                            value={form.categorie}
                            onChange={(e) => setField('categorie', e.target.value)}
                            isInvalid={!!errors.categorie}>

                                <option>Select Categorie</option>
                                <option value="music_concert">Music Concert type</option>
                                <option value="dance">Dancing event</option>
                            </Form.Select>

                            <Form.Control.Feedback type='invalid'>
                                {errors.categorie}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <br/>
                        <Form.Group controlId="submit">
                            <Button type="submit" onClick={handleSubmit} className='my-2' variant='primary'>
                                Continue
                            </Button>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>  
        </FormContainer>
        <Footer></Footer>
    </> 
  )
}
