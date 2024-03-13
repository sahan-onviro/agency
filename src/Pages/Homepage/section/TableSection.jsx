import React, { useState } from 'react'
import { agencyData } from '../../../Global/Data/Homepage'
import { NavLink } from 'react-router-dom'

const TableSection = () => {
    const [sortOrder, setSortOrder] = useState('desc');
    const sortToggleBtn = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
    const sortedData = [...agencyData].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.rating - b.rating
        }
        else {
            return b.rating - a.rating
        }
    })
    return (
        <>
            <section className='h-tablelisting section-break'>
                <div className="container mx-auto">
                    <div className="table-wrapper overflow-x-auto">
                        <table className="xl:table-fixed lg:table-auto w-full">
                            <thead>
                                <tr>
                                    <th className='w-16'>S.No.</th>
                                    <th className='w-2/6'>
                                        <div className="flex gap-2">
                                            <img src="./assets/images/icons/agency.png" alt="" />
                                            Name
                                        </div>
                                    </th>
                                    <th>
                                        <div className="flex gap-2">
                                            <img src="./assets/images/icons/locat.svg" alt="" />
                                            Location
                                        </div>
                                    </th>
                                    <th>
                                        <div className="flex gap-2">
                                            <img src="./assets/images/icons/type.svg" alt="" />
                                            Type
                                        </div>
                                    </th>
                                    <th className='w-[15%]'>
                                        <div className="flex gap-2">
                                            <img src="./assets/images/icons/rating.svg" alt="" />
                                            Rating
                                            <div className="rating-sort cursor-pointer ml-5" onClick={sortToggleBtn}>
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.60764 0.251806C6.52802 0.171987 6.43344 0.10866 6.32931 0.0654507C6.22518 0.0222416 6.11355 0 6.00081 0C5.88807 0 5.77644 0.0222416 5.67231 0.0654507C5.56818 0.10866 5.4736 0.171987 5.39398 0.251806L0.251357 5.39443C0.0904159 5.55537 0 5.77365 0 6.00126C0 6.22886 0.0904159 6.44715 0.251357 6.60809C0.412298 6.76903 0.630581 6.85944 0.858186 6.85944C1.08579 6.85944 1.30407 6.76903 1.46502 6.60809L5.1437 2.92768V19.7149C5.1437 19.9422 5.23401 20.1602 5.39474 20.321C5.55548 20.4817 5.77349 20.572 6.00081 20.572C6.22813 20.572 6.44613 20.4817 6.60687 20.321C6.76761 20.1602 6.85791 19.9422 6.85791 19.7149V2.92768L10.5366 6.60809C10.6975 6.76903 10.9158 6.85944 11.1434 6.85944C11.371 6.85944 11.5893 6.76903 11.7503 6.60809C11.9112 6.44715 12.0016 6.22886 12.0016 6.00126C12.0016 5.77365 11.9112 5.55537 11.7503 5.39443L6.60764 0.251806ZM17.4054 20.332C17.5652 20.486 17.7784 20.572 18.0003 20.572C18.2221 20.572 18.4354 20.486 18.5951 20.332L23.7377 15.3608C23.8188 15.2827 23.8836 15.1894 23.9286 15.0862C23.9736 14.983 23.9978 14.872 23.9999 14.7595C24.0019 14.6469 23.9818 14.5351 23.9407 14.4303C23.8995 14.3256 23.8381 14.2299 23.76 14.1489C23.6819 14.0678 23.5886 14.003 23.4854 13.958C23.3822 13.913 23.2712 13.8888 23.1586 13.8867C23.0461 13.8847 22.9343 13.9048 22.8295 13.9459C22.7247 13.9871 22.6291 14.0485 22.548 14.1266L18.8574 17.6939V0.86035C18.8574 0.633032 18.7671 0.415024 18.6063 0.254286C18.4456 0.0935482 18.2276 0.00324629 18.0003 0.00324629C17.7729 0.00324629 17.5549 0.0935482 17.3942 0.254286C17.2335 0.415024 17.1432 0.633032 17.1432 0.86035V17.6939L13.4542 14.1283C13.3736 14.049 13.2781 13.9863 13.1731 13.9441C13.0682 13.9018 12.956 13.8807 12.8429 13.882C12.7297 13.8834 12.618 13.9071 12.5141 13.9518C12.4102 13.9965 12.3162 14.0613 12.2375 14.1425C12.1587 14.2238 12.0968 14.3197 12.0554 14.425C12.0139 14.5302 11.9937 14.6427 11.9959 14.7557C11.9981 14.8688 12.0227 14.9804 12.0682 15.0839C12.1137 15.1875 12.1793 15.281 12.2611 15.3591L17.4054 20.332Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                    </th>
                                    <th className='w-[22%]'>
                                        <div className="flex gap-2">
                                            <img src="./assets/images/icons/web.svg" alt="" />
                                            Website
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedData.map((item, index) => (
                                    <tr key={index}>
                                        <td data-label="S.No."><p className='text-center'>{index + 1}</p></td>
                                        <td data-label="Name">
                                            <div className="flex gap-2 agency-logo items-center">
                                                <img src={item.logo} alt={item.name} />
                                                <p>{item.name}</p>
                                            </div>
                                        </td>
                                        <td data-label="Location">
                                            <p>{item.location}</p>
                                        </td>
                                        <td data-label="Type">
                                            <p>{item.type}</p>
                                        </td>
                                        <td data-label="Rating">
                                            <ul className='flex gap-2 star-group'>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <li key={index} className={index < item.rating ? 'star' : null}>
                                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" />
                                                        </svg>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td data-label="Website"><p><NavLink to={'/'}>{item.website}</NavLink></p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </>
    )
}

export default TableSection