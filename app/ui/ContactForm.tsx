"use client"

import { useForm } from "react-hook-form";
import { mulish } from "./fonts";
import { FormData } from "../lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import mailFormSchema from "../utils/formValidation";
import { sendMail } from "../lib/actions";
import toast from "react-hot-toast";

function ContactForm() {

 const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema)
 })

  const onSubmit = async (formData: FormData) => {
    console.log(formData);
    const result= await sendMail(formData)
    if (result.success) {
        toast.success('Message sent successfully',{
            position: 'bottom-center'
        })
        reset()
    } else {
        toast.error(result.error, {
            position: 'bottom-center'
        })
    }
  }

    return (
        <div className="p-10 max-md:p-7.5 border text-regent-gray-950 border-regent-gray-400 row-start-1 row-end-3 rounded-2xl shadow-md">
            <h3 className="mb-5 text-2xl font-bold">Drop Your Message</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${mulish.className} formBox relative w-full`}>
                    <div className="row50 max-md:flex-col max-md:gap-0 flex gap-5">
                        <div className="inputBox flex flex-col w-full mb-2.5">
                            <span className="mt-2.5 mb-1 font-medium">Name</span>
                            <input
                                type="text"
                                className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                                placeholder="Enter your Full name"
                                {...register('name')}
                            />
                            {errors.name && <span className="text-red-400">{errors.name.message}</span>}
                        </div>
                    </div>

                    <div className="row50 max-md:flex-col max-md:gap-0 flex gap-5">
                        <div className="inputBox flex flex-col w-[50%] max-md:w-full mb-2.5">
                            <span className="mt-2.5 mb-1 font-medium">Email</span>
                            <input
                                type="email"
                                className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                                placeholder="Enter your email address"
                                {...register('email')}
                            />
                            {errors.email && <span className="text-red-400">{errors.email.message}</span>}
                        </div>
                        <div className="inputBox flex flex-col w-[50%] max-md:w-full mb-2.5">
                            <span className="mt-2.5 mb-1 font-medium">Mobile</span>
                            <input
                                type="number"
                                className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                                placeholder="Enter your Mobile number"
                                {...register('mobile')}
                            />
                            {errors.mobile && <span className="text-red-400">{errors.mobile.message}</span>}
                        </div>
                    </div>

                    <div className="row50 max-md:flex-col max-md:gap-0 flex gap-5">
                        <div className="inputBox flex flex-col w-full mb-2.5">
                            <span className="mt-2.5 mb-1 font-medium">Subject</span>
                            <input
                                type="text"
                                className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                                placeholder="Enter Subject"
                                {...register('subject')}
                            />
                            {errors.subject && <span className="text-red-400">{errors.subject.message}</span>}
                        </div>
                    </div>

                    <div className="row100">
                        <div className="inputBox w-full flex flex-col mb-2.5">
                            <span className="mt-2.5 mb-1 font-medium">Message</span>
                            <textarea
                                className="p-2.5 border border-regent-gray-300 outline-0 resize-none min-h-60 mb-2.5 rounded-lg"
                                placeholder="Write your message here..."
                                {...register('message')}
                            ></textarea>
                            {errors.message && <span className="text-red-400">{errors.message.message}</span>}
                        </div>
                    </div>

                    <div className="row100">
                        <div className="inputBox w-full flex flex-col mb-2.5">
                            <button
                                type="submit"
                                inert= {isSubmitting}
                                className="bg-gradient-to-r from-tall-poppy-600 to-tall-poppy-700 border-0 text-white text-[1.1em] cursor-pointer py-3.5 px-4 max-w-30 font-medium rounded-4xl hover:rounded-lg transition-[border-radius] duration-400 ease"
                            > {isSubmitting ? "Sending" : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
