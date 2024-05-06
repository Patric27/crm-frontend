import React from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import  PropTypes  from 'prop-types';




export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDataErro, frmDt}) => {
	console.log(frmDt);
    return (
		<div className="p-5 mb-4 bg-light border rounded-4 ">
		<div className="container-fluid py-5" >
		<h1 className="text-info text-center">Add New Ticket</h1>
		<hr />
		<Form autoComplete="off" onSubmit={handleOnSubmit} >
							<Form.Group as={Row} className='mb-2'>
								<Form.Label column={3}>Subject</Form.Label>
								<Col sm={9}>
								<Form.Control
									name="subject"
									value={frmDt.subject}
									//minLength="3"
									maxLength="100"
									onChange={handleOnChange}
									placeholder="Subject"
									required
								/>
								<Form.Text className="text-danger">
									{frmDataErro.subject && "Subject is required!"}
								</Form.Text>
								</Col>
								
							</Form.Group>
							<Form.Group as={Row} className='mb-2'>
								<Form.Label column={3}>Issue Found</Form.Label>
								<Col sm={9}>
								<Form.Control
									type="date"
									name="issueDate"
									value={frmDt.issueDate}
									onChange={handleOnChange}
									required
								/>
								</Col>
								
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									as="textarea"
									name="detail"
									rows="5"
									value={frmDt.detail}
									onChange={handleOnChange}
									required
								/>
							</Form.Group>
						
							<Button className="w-100 btn btn-lg btn-info" type="submit">Login</Button>
						</Form>
		</div>
		</div>
	);
};

AddTicketForm.prototypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
	frmDataErro: PropTypes.object.isRequired,
}; 