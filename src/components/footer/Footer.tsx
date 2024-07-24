import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import Icons from '../icons/Icons'

const Footer = () => {
  return (
        <footer className='w-full bg-gray-100'>
            <div className='container flex flex-col md:flex-row pt-5 md:pt-0 gap-5'>
                <div className='flex-1 py-7'>
                    <Image
                     height={200}
                      width={200}
                      src="/logo.webp"
                      alt="image"
                      className="object-cover pb-20"
                    />
                    <p className='text-xl text-primary-200'>
                        Bangalore, Karnataka <Link href="#">zestfitnessstudio2022@gmail.com </Link> <br /> 09845743430 / 07411347411 / <br />
                        09019522282
                    </p>
                    <div className='pt-3 hidden md:block' >
                       <Icons />
                    </div>
                </div>
                <div className='flex-1 pl-20 py-7 bg-gray-400'>
                    <h5 className='pb-5 font-bold text-primary-200'>Not a Member? Get a 1 Day Free-Trial</h5>
                    <p>Fill out the form below and a sales rep <br /> will get in touch shortly.</p>
                    <div className='pt-5' >
                     <form className='mr-5'>
                        <div className='flex flex-col gap-5 my-5'>
                         <label>First Name</label>
                         <input className='py-5 px-5 box-border rounded-lg'
                         type='text' placeholder='First Name'/>
                        </div>
                        <div className='flex flex-col gap-5 my-5'>
                         <label>Last Name</label>
                         <input className='py-5 px-5 box-border rounded-lg'
                          type='text' placeholder='Last Name'/>
                        </div>
                        <div className='flex flex-col gap-5 my-5'>
                         <label>Phone</label>
                         <input className='py-5 px-5 box-border rounded-lg'
                         type='number' placeholder='Phone'/>
                        </div>
                     </form>
                    </div>
                    <div className='py-10 flex flex-col'>
                       <label className='ml-2'>Your message *</label>
                       <textarea className='h-[100px] px-5 py-4 border-2 mr-5 resize-none' placeholder='Enter text here'></textarea> 
                    </div>
                    <button className='py-2 px-[40px] cursor-pointer rounded-md text-white bg-primary-500' 
                    type='submit'
                    >
                        Submit
                    </button>
                    <div className='pt-7 flex gap-2 items-center'>
                    <AiOutlineCopyrightCircle size={15} />
                    <p>2023 by Zest Fitness Studio.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='py-7 pl-20 text-3xl md:text-2xl font-medium'>Menu</h3>
                    <div className='pl-10 flex flex-col underline font-semibold cursor-pointer'>
                     <Link href="#">Home</Link>
                     <Link href="#">About</Link>
                     <Link href="#">Facilities</Link>
                     <Link href="#">Services</Link>
                    </div>
                    <div className='pt-10 md:hidden'>
                        <Icons />
                    </div>
                </div>
            </div>

        </footer>
  )
}

export default Footer