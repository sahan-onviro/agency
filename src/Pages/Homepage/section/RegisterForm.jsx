import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { formData } from '../../../Global/Data/Navbar';

const RegisterForm = () => {
    const typeData = formData?.find((item) => item.name === 'type').option;
    const countryData = formData?.find((item) => item.name === 'country').option;
    return (
        <>
            <section className="h-registerform bg-waves section-break">
                <div className="container mx-auto">
                    <div className="heading-wrapper flex gap-3 items-center mb-5">
                        <figure className='w-[60px] h-[60px]'>
                            <img src="./assets/images/register.png" alt="" className='object-contain object-center' />
                        </figure>
                        <h2 className="sub-heading font-semibold">Register Your Agency</h2>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="lg:col-span-4 col-span-full">
                            <Formik
                                initialValues={{
                                    company_name: '',
                                    location: '',
                                    phone: '',
                                    email: '',
                                    type: '',
                                    country: '',
                                    website: '',
                                    description: '',
                                    photo: '',
                                }}
                                validationSchema={
                                    Yup.object().shape({
                                        company_name: Yup.string().required('required'),
                                        location: Yup.string().required('required'),
                                        phone: Yup.number().required('required'),
                                        email: Yup.string().required('required'),
                                        type: Yup.string().required('required'),
                                        country: Yup.string().required('required'),
                                        website: Yup.string().required('required'),
                                        description: Yup.string().required('required'),
                                        photo: Yup.string().required('required'),
                                    })
                                }
                                onSubmit={values => {
                                    console.log(values);
                                }}>
                                {formik => (
                                    <Form action="" onSubmit={formik.handleSubmit}>
                                        <div className="flex flex-wrap -mx-2">
                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Company Name</label>
                                                    <Field placeholder="Company Name" name="company_name" className='form-control' onChange={formik.handleChange} />
                                                    <ErrorMessage component='div' name="company_name" className='form-error' />
                                                </div>
                                            </div>
                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Location</label>
                                                    <Field placeholder="Location" name="location" className='form-control' onChange={formik.handleChange} />
                                                    <ErrorMessage component='div' name="location" className='form-error' />
                                                </div>
                                            </div>
                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Phone</label>
                                                    <Field placeholder="(+977) 9800000000" name="phone" type="number" className='form-control' onChange={formik.handleChange}></Field>
                                                    <ErrorMessage component='div' name="phone" className='form-error' />
                                                </div>
                                            </div>
                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Email</label>
                                                    <Field placeholder="Email" name="email" type="email" className='form-control' onChange={formik.handleChange} />
                                                    <ErrorMessage component='div' name="email" className='form-error' />
                                                </div>
                                            </div>

                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Type</label>
                                                    <Field placeholder="Type" name="type" className='form-control' as="select" onChange={formik.handleChange} >
                                                        <option value="" disabled>Select Type</option>
                                                        {typeData?.map((item, index) => (
                                                            <option key={index} value={item.name} name={item.name}>{item.name}</option>
                                                        ))}
                                                    </Field>
                                                    <ErrorMessage component='div' name="type" className='form-error' />
                                                </div>
                                            </div>

                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Country</label>
                                                    <Field placeholder="Country" name="country" className='form-control' as="select" onChange={formik.handleChange}>
                                                        <option value="" disabled>Select Country</option>
                                                        {countryData?.map((item, index) => (
                                                            <option key={index} value={item.name} name={item.name}>{item.name}</option>
                                                        ))}
                                                    </Field>
                                                    <ErrorMessage component='div' name="country" className='form-error' />
                                                </div>
                                            </div>

                                            <div className="sm:w-1/2 w-full px-2 mb-4 sm:gap-6 gap-4 flex flex-col">
                                                <div className="form-group">
                                                    <label className='form-label'>Website</label>
                                                    <Field placeholder="Website URL" name="website" className='form-control' onChange={formik.handleChange}></Field>
                                                    <ErrorMessage component='div' name="website" className='form-error' />
                                                </div>
                                                <div className="form-group">
                                                    <label className='form-label'>Upload Photo</label>
                                                    <Field name="photo" type="file" className='form-control' onChange={formik.handleChange}></Field>
                                                    <ErrorMessage component='div' name="photo" className='form-error' />
                                                </div>

                                            </div>
                                            <div className="sm:w-1/2 w-full px-2 mb-4">
                                                <div className="form-group">
                                                    <label className='form-label'>Description</label>
                                                    <Field as="textarea" rows={5} placeholder="Description" name="description" className='form-control' onChange={formik.handleChange}></Field>
                                                    <ErrorMessage component='div' name="description" className='form-error' />
                                                </div>
                                            </div>
                                            <div className="w-full px-2 ">
                                                <div className="btn-wrapper text-right">
                                                    <button type='submit' className='btn-green py-2 px-8 !rounded-none uppercase'>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="md:col-span-2 hidden lg:block">
                            <div className="side-figure">
                                <div className='w-[240px] ml-auto mb-14'>
                                    <div className="side-success">
                                        <ul className="flex flex-row gap-x-2.5 justify-center mb-2">
                                            {[...Array(5)].map((_, index) => (
                                                <li key={index}>
                                                    <div className="star">
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#667383" />
                                                        </svg>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <h3 className='leading-7'>For Successful
                                            Businesses</h3>
                                    </div>
                                </div>
                                <div className="figure-wrapper relative z-10">
                                    <figure>
                                        <img src="./assets/images/icons/bank.png" alt="" />
                                    </figure>
                                    <div className='absolute inset-0 -z-10 flex items-center justify-center'>
                                        <div className="svg-wrapper">
                                            <svg width="373" height="264" viewBox="0 0 373 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M316.687 215.664C303.117 228.781 288.095 239.506 272.638 246.608C197.095 281.61 100.289 262.913 45.863 199.214C20.1013 169.14 0.507947 129.935 -2.94819e-05 89.7876C-0.580574 44.2054 27.1404 12.4645 72.7858 6.88448C74.8177 6.66707 76.777 6.44967 78.8089 6.30473C99.2731 4.78291 119.157 8.6237 139.476 9.85565C160.158 11.0876 180.985 10.0731 201.522 7.24682C237.153 2.39148 275.614 -5.36257 310.954 5.29019C350.286 17.1749 373.218 55.8002 373 95.585C372.782 140.515 348.472 184.938 316.687 215.664Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterForm