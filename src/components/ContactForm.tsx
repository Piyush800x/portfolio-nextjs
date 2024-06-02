'use client';
import { Poppins } from "next/font/google";
import { useState, FormEvent } from "react";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

interface FormData {
    name: string,
    email: string,
    subject: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: ''
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>('Submit');

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('api/contact', {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();
            console.log(data.message)
            setButtonText(data.message)
        }
        catch (error) {
            setButtonText('Internal Server Error!');
            console.error(error);
        }
        finally {
            setTimeout(() => {
                setButtonText("Submit")
                setIsLoading(false);
            }, 2000)
        }

        // console.log(formData)
        setIsLoading(false);
    }


    return (
        <div className={`${poppins.className} relative h-full w-screen overflow-hidden bg-black text-white`}>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center pt-10 items-center">
                    <h1 className="font-semibold md:text-7xl text-5xl mb-6 tracking-wide">Contact Me</h1>
                    <div className='w-52 h-px bg-white items-center mt-4'></div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="md:w-1/3 w-full h-full">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full md:px-0 px-6">
                                    <label className="cursor-none block text-md font-medium text-white">Name</label>
                                    <input name="name" onChange={handleChange} value={formData.name} type="name" required className="cursor-none border-b border-white mt-1 block w-full py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="John Doe" />
                                </div>
                                <div className="w-full mt-5 md:px-0 px-6">
                                    <label className="cursor-none block text-md font-medium text-white ">Email</label>
                                    <input name="email" value={formData.email} onChange={handleChange} type="email" required className="cursor-none border-b border-white mt-1 block w-full  py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="example@example.com" />
                                </div>
                                <div className="w-full mt-5 md:px-0 px-6">
                                    <label className="cursor-none block text-md font-medium text-white pb-5">Contact subject</label>
                                    <textarea name="subject" value={formData.subject} onChange={handleChange} required className="resize-y cursor-none mt-1 block w-full py-2 px-2 bg-black border border-white shadow-sm focus:outline-none text-white" placeholder="Describe why you want to contact."></textarea>
                                </div>
                                <button className="mt-10 mb-24 text-xl cursor-none border-2 hover:border-white hover:bg-black hover:text-white bg-white text-black py-2 px-4 rounded-full transition duration-300">
                                    {isLoading ? "Loading..." : `${buttonText}`}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}