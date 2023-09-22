import { Form, redirect, useActionData } from "react-router-dom"

function Contact() {
    const data = useActionData();
    console.log(data);
  return (     
    <div className='menu-layout'>
        <span className='font-face'>
            <div className='menu-navigation'>
                <h2 className='menu-about-content'>Contact</h2>    
            </div> 
            <div className="contact">
                <Form className="contact-form" method='post' action='/contact'> 
                <div className="left">
                    <label>
                        <span>First Name </span><br></br>
                        <input type="text" name="firstname" /><br></br>
                    </label>
                    <label>
                        <span>Last Name </span><br></br>
                        <input type="text" name="lastname" /><br></br>
                    </label>              
                    <label>
                        <span>Email </span><br></br>
                        <input type='email' name='email' /><br></br>
                    </label>
                    <label>
                        <span>Contact Number </span><br></br>
                        <input type="number" name="contactnumber" />
                    </label>
                </div>  
                <div className="right">
                    <label>
                        <span>Subject </span><br></br>
                        <input type="text" name="subject" /><br></br>
                    </label>              
                    <label>
                        <span>Message </span><br></br>
                        <textarea name='message' />
                    </label>  
                    {data && data.error && <p>{data.error}</p>}
                </div> 
                <div className="submit">
                    <button className="submitbtn">
                        <span className='font-face'>Submit</span>
                    </button>
                </div>                                                                        
                </Form>
            </div>
        </span>
    </div>  
  )
}

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData();
    const submission = {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        email: data.get('email'),
        contactnumber: data.get('contactnumber'),
        subject: data.get('subject'),
        message: data.get('message'),
    };
    console.log(submission);

    if(!submission.message.length) {
        return {
            error: "Message should not be empty!",
        };
    }

    return redirect('/contact');
}