import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
import Image from 'next/image';

const initialState = {
    email: '',
    photo: '',
    message: '',
}

const FormSubmit = () => {
    const { addToast } = useToasts();
    const [{ email, file, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
      }

    const subscribe = async (e) => {
        e.preventDefault() // prevents page reload
        alert(`${email} ${file} ${message}`)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.EMAIL_SERICE_ID, process.env.EMAIL_TEMPLATE_SUBMIT_FORM, e.target, process.env.EMAIL_USER_ID)
        .then((result) => {
            console.log(result.text);
            addToast("A member of our team will review and process your submition sortly. Thanks you!", { appearance: "success" })
        }, (error) => {
            console.log(error.text);
            addToast("Oopps! Something went wrong.", { appearance: "error" });
        });
        e.target.reset()
        setState({ ...initialState})
      }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className='max-w-md w-full space-y-8'>
                <div>
                    <Image className="mx-auto h-12 w-auto" src="/vercel.ico" alt="Workflow" width={50} height={50}/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Tell us our story!
                    </h2>
                </div>
            
                <form className='mt-8 space-y-6'
                    encType='multipart/form-data' 
                    onSubmit={handleSubmit}
                >
                    <div className='rounded-md shadow-sm -space-y-px'>
                        <div>
                            <label htmlFor='email' className='sr-only'>Email address</label>
                            <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                id='email'
                                name='email' 
                                type='email' 
                                aria-label='email address' 
                                placeholder='Enter your email address' 
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='file' className='sr-only'>Upload your image</label>
                            <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                id='file'
                                name='file' 
                                type='file' 
                                aria-label='file' 
                                placeholder='Upload your image' 
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='sr-only'>Tell us our story!</label>
                            <textarea className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                id='message'
                                name='message' 
                                type='message' 
                                aria-label='message'
                                rows="7" 
                                placeholder='Tell us our story!' 
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormSubmit;