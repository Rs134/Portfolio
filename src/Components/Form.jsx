import { useState } from "react"

const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    message: ""
}

export default function Form(){
    const [formData, setFormData] = useState(INITIAL_FORM_STATE)

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "1d0fbf48-04a3-4b08-8e25-6fce1f352daf");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
        if (data.success) {
          alert("Thank you for reaching out! I will get back to you shortly.");
          event.target.reset();
        } else {
          alert("Error");
        }
      };

    return (
        <div id="contact" className="form-container my-100">
            <h1 className="heading text-center">Let's <span className="sub-heading">Network</span></h1>
            <div className="form-outline mt-10 flex items-center justify-center">
                <form className="contact-form flex flex-col gap-6 align-center justify-center" onSubmit={onSubmit}>
                    <input 
                        className="form-input"
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input 
                        className="form-input"
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <textarea 
                        className="form-input h-45"
                        name="message"
                        placeholder="Message" 
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <div className="flex justify-center">
                        <button className="btn contact-btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}