import { useState } from "react";

export function ContactForm(){

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:'',
        country:'',
        subscribe:false
    })
    const[errors,setErrors]=useState({});
    const [submitted,setSubmitted]=useState(false);

    //handle input chnage

    const handleChange=((e)=>{
        console.log(e.target);
        const {name,value,type,checked}=e.target;

        setFormData({
            ...formData,
            [name]:type ==='checkbox' ? checked : value
        })

          if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
        
    })

    const validate=(()=>{
        const newError={};

        //Name validation
        if (!formData.name.trim()) {
      newError.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newError.name = 'Name must be at least 2 characters';
    }

    //email validation
    if(!formData.email.trim()){
        newError.email='Email is required';
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
        newError.email='Email is Invalid';
    }

    //message validation
    if (!formData.message.trim()) {
      newError.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newError.message = 'Message must be at least 10 characters';
    }

    // Country validation
    if (!formData.country) {
      newError.country = 'Please select a country';
    }

    return newError;
    })

    const handleSubmit=((e)=>{

        e.preventDefault();//Stops page reload

        const validationErrors=validate();

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }

        console.log('Forms submitted',formData);
        setSubmitted(true);

          // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: '',
        country: '',
        subscribe: false
      });
      setSubmitted(false);
    }, 3000);
        

    })

     // Success message
  if (submitted) {
    return (
      <div style={{ 
        padding: '40px',
        backgroundColor: '#e8f5e9',
        border: '2px solid #4CAF50',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#2e7d32', margin: '0 0 15px 0' }}>
          ✅ Success!
        </h2>
        <p style={{ fontSize: '18px', margin: '0 0 10px 0' }}>
          Thank you, <strong>{formData.name}</strong>!
        </p>
        <p style={{ color: '#666' }}>
          We'll contact you at <strong>{formData.email}</strong>
        </p>
      </div>
    );
  }
  

  return(
    <>
         <div style={{ 
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h2 style={{ marginTop: 0 }}>📧 Contact Form</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Fill out the form below with validation
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: errors.name ? '2px solid #f44336' : '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
          />
          {errors.name && (
            <p style={{ 
              color: '#f44336', 
              fontSize: '14px', 
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: errors.email ? '2px solid #f44336' : '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
          {errors.email && (
            <p style={{ 
              color: '#f44336', 
              fontSize: '14px', 
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Country Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: errors.country ? '2px solid #f44336' : '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none'
            }}
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
          {errors.country && (
            <p style={{ 
              color: '#f44336', 
              fontSize: '14px', 
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.country}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500'
          }}>
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message (at least 10 characters)"
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: errors.message ? '2px solid #f44336' : '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
          {errors.message && (
            <p style={{ 
              color: '#f44336', 
              fontSize: '14px', 
              marginTop: '5px',
              marginBottom: 0
            }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ 
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              style={{ 
                marginRight: '10px',
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span>Subscribe to newsletter</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '18px',
            fontWeight: '600',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
        >
          Submit Form
        </button>
      </form>

      {/* Debug Info */}
      <details style={{ marginTop: '30px' }}>
        <summary style={{ cursor: 'pointer', fontWeight: '500' }}>
          🔍 Debug: Form Data
        </summary>
        <pre style={{ 
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '4px',
          overflow: 'auto',
          fontSize: '14px'
        }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </details>
    </div>
    </>
  )
}