import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Footer from "../../common/Footer/footer";
import { Row, Col, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormContainer from './FormContainer';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from 'semantic-ui-react';

export default function EventForm() {

    const navigate = useNavigate()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { username, email, userId } = useContext(UserContext);
    const [selectedFile, setSelectedFile] = useState(null);

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
        console.log("validation called")
        const { title, event_date, description, ticket_price, location, event_category, file_selected } = form
        const newErrors = {}

        if(!event_date || event_date === '') newErrors.event_date = "Please enter date"
        if(!description || description.length < 10) newErrors.description = "Description should be more than 10 characters"
        if(!title || title === '') newErrors.title = "Please enter title"
        if(!ticket_price || ticket_price === '') newErrors.ticket_price = "Please enter price"
        if(!location || location === '') newErrors.location = "Please enter location"
        if(!event_category || event_category === '') newErrors.event_category = "Please enter category"

        return newErrors
    }

    const send = (form) => {
        const url = `${process.env.REACT_APP_BASE_URL}createEvent`;
        form['hosted_by'] = userId;
        form['event_id'] = uuidv4();
        console.log(url, form);
        const formData = new FormData();
        formData.append('image', selectedFile);
        for (const key in form) {
            if (Object.hasOwnProperty.call(form, key)) {
                formData.append(key, form[key]);
            }
        }
        try {
            Axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submission called")

        const formErrors = validateForm()
        if(Object.keys(formErrors).length > 0){
            console.log("Errors in the form")
            console.log(formErrors)
            setErrors(formErrors)
        }
        else{
            console.log("Form Submitted")
            send(form)
            navigate('/eventconfirmation')
        }
    }

    function handleDateChange(value) {
        if (value && moment(value, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
            setField('event_date', value.format('YYYY-MM-DD HH:mm:ss'))
        } else {
            setField('event_date', '')
        }
      }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        if (!!selectedFile) {
            setField("file_selected", "Please select a file");
        }
        else{
            setField("file_selected", null);
        }
    };

  return (
    <>
        <FormContainer>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <h1>Please add the event details in the form</h1>
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="eventForm.title">
                            <Form.Label className='fw-bold fs-5'>Event Title <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control type="text" placeholder="Event title"
                            value={form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid={!!errors.title}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.title}
                            </Form.Control.Feedback>                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="eventForm.description">
                            <Form.Label className='fw-bold fs-5'>Description <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control as="textarea" rows={6} 
                            value={form.description}
                            onChange={(e) => setField('description', e.target.value)}
                            isInvalid={!!errors.description}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.description}
                            </Form.Control.Feedback>  
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="eventForm.eventAddress">
                            <Form.Label className='fw-bold fs-5'>Event Location <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control as="textarea" rows={2}
                            value={form.location}
                            onChange={(e) => setField('location', e.target.value)}
                            isInvalid={!!errors.location}/>

                            <Form.Control.Feedback type='invalid'>
                                {errors.location}
                            </Form.Control.Feedback>  
                        </Form.Group>

                        <Form.Group as={Col} md="4" className="mb-3" controlId="eventForm.event_date">
                            <Form.Label className='fw-bold fs-5'>Event Time <span style={{color: "red"}}>*</span></Form.Label>
                                <Datetime
                                    onChange={handleDateChange}
                                    inputProps={{ placeholder: 'Select date and time' }}
                                    isInvalid={!!errors.event_date}
                                    minDate={new Date()}
                                    value={form.event_date}
                                />
                            <p style={{color: "red"}}>{errors.event_date}</p>
                        </Form.Group>

                        <InputGroup as={Col} md="3" className="mb-3" controlId="eventForm.ticket_price">
                            <InputGroup.Text>Event Price in $ <span style={{color: "red"}}>*</span></InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)"
                            value={form.ticket_price}
                            onChange={(e) => setField('ticket_price', e.target.value)}
                            isInvalid={!!errors.ticket_price}/>
                            <InputGroup.Text>.00</InputGroup.Text>

                            <Form.Control.Feedback type='invalid'>
                                {errors.ticket_price}
                            </Form.Control.Feedback>
                        </InputGroup>
                        
                        <Form.Group controlId="eventForm.event_category">
                            <Form.Label className='fw-bold fs-5'>Event category <span style={{color: "red"}}>*</span></Form.Label>

                            <Form.Select placeholder='Select Event category'
                            value={form.event_category}
                            onChange={(e) => setField('event_category', e.target.value)}
                            isInvalid={!!errors.event_category}>
                                <option>Select category</option>
                                <option value="music">Music</option>
                                <option value="health">Health</option>
                                <option value="business">Business</option>
                                <option value="hobbies">Hobbies</option>
                                <option value="sports">Sports</option>
                                <option value="food">Food</option>
                            </Form.Select>

                            <Form.Control.Feedback type='invalid'>
                                {errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label className='fw-bold fs-5'>Select an event banner: <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control type="file" accept="image/png, image/jpg, image/jpeg" onChange={handleFileChange}/>
                        </Form.Group>
                        {form.file_selected && <div className="text-danger">{form.file_selected}</div>}

                        <p><Checkbox checked></Checkbox> By Clicking Continue, you are agreeing the terms and conditions</p>

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