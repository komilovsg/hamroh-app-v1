import React from 'react'
import {FcAddImage} from '@react-icons/all-files/fc/FcAddImage'

export default function RegistrationPage() {
  return (
    <div className='flex justify-center items-center bg-white'>
         <div className="bg-[#528B93] rounded-lg p-8 flex flex-col mt-10 px-12 w-[35rem] h-[35rem]">
          <h2 className="text-white text-3xl mb-5 text-center">
           Регистрация
          </h2>
          <div className="relative mb-4">
          <input
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              className="w-full h-16 bg-white text-xl rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Почта"
              className="w-full h-16 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 mt-2 focus:ring-indigo-600 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              className="w-full h-16 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
            <div className='flex justify-center items-center gap-2 mt-3'>
             <input
             style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
              placeholder="Добавить фото"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
            <label className='flex justify-start items-center gap-2' htmlFor="file">
            <FcAddImage className='w-24 h-24' fontSize="inherit" />
            <span className='text-white text-3xl' >Добавить фото</span>
          </label>
            </div>
          </div>
          <button className="text-white w-full h-16 border-0 py-2 mt-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-[#054550] active:scale-95 transition-all">
            Создать
          </button>
          <div className='flex justify-center items-center gap-2 text-[#B2C8CA] pt-4 text-lg'>
          <p>У вас есть учётная запись?</p>
          <a className='underline' href="">Вход</a>
          </div>
        </div>
    </div>
  )
}
