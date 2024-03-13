import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { formData } from '../../../Global/Data/Navbar';
import { IoSearch } from "react-icons/io5";


const Query = () => {
    return (
        <>
            <section className='h-query'>
                <div className="container mx-auto">
                    <Formik
                        initialValues={{
                            country: '',
                            type: '',
                            search: '',
                        }}
                        validationSchema={
                            Yup.object().shape({
                                country: Yup.string().required('Must be selected'),
                                type: Yup.string().required('Must be selected'),
                                search: Yup.string().required('Must be selected'),
                            })
                        }
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {formik => (
                            <Form onSubmit={formik.handleSubmit} action="">
                                <div className="flex md:flex-row flex-col gap-4 justify-center">
                                    {formData?.map((item, index) => (
                                        <div key={index} className={`form-group md:basis-1/4 basis-full cstm-select-group ${item.name}-icon`}>
                                            <Field as="select" key={index} name={item.name} className="form-control">
                                                <option disabled value="">{item.name}</option>
                                                {item?.option?.map((opitem, index) => (
                                                    <option key={index} value={opitem.name}>{opitem.name}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage component='div' name={item.name} className='form-error' />
                                        </div>
                                    ))}
                                    <div className="form-group basis-1/4">
                                        <Field onChange={formik.handleChange} type="text" name="search" placeholder="Search" className="form-control" />
                                        <ErrorMessage component='div' name='search' className='form-error' />
                                    </div>
                                    <div className="form-group basis-1/6">
                                        <button type='submit' className='btn-green'><IoSearch />Search</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default Query