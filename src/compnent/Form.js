import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../function/login/auth';
import {newcomments} from '../function/comment/comment';

export default function Form() {
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.authState);

  return (
    <div className='bg-slate-900 h-screen w-scree flex justify-center items-center'>
      <div>
        <form className='border p-4 rounded bg-slate-800' onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ email: e.target.Email.value, password: e.target.Password.value }));
        }}>
          <h1 className='font-bold text-white'>Login</h1>
          <label class="relative flex space-x-2 py-2">
            <div>
              <VscAccount className='h-10 w-10 text-white' />
            </div>
            <div>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" type="Email" name="Email" />
            </div>
          </label>

          <label class="relative flex space-x-2 py-2">
            <div>
              <VscAccount className='h-10 w-10 text-white' />
            </div>
            <div>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="password" type="password" name="Password" />
            </div>
          </label>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </form>

        <div className='text-white'>
          {accounts && accounts.map(account => (
            <div key={account.id} className='flex space-x-3'>
              {console.log(account.auth)}
              {account.auth.email}
              {account.auth.password}
            </div>
          ))}
        </div>
      </div>


      <div>
        <form className='border p-4 rounded bg-slate-800' onSubmit={(e) => {
          e.preventDefault();
          dispatch(newcomments({ email: e.target.Email.value, password: e.target.Password.value }));
        }}>
          <h1 className='font-bold text-white'>Comment</h1>
          <label class="relative flex space-x-2 py-2">
            <div>
              <VscAccount className='h-10 w-10 text-white' />
            </div>
            <div>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email" type="Email" name="Email" />
            </div>
          </label>

          <label class="relative flex space-x-2 py-2">
            <div>
              <VscAccount className='h-10 w-10 text-white' />
            </div>
            <div>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="password" type="password" name="Password" />
            </div>
          </label>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </form>

        <div className='text-white'>
          {accounts && accounts.map(account => (
            <div key={account.id} className='flex space-x-3'>
              {console.log(account.auth)}
              {account.auth.email}
              {account.auth.password}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
