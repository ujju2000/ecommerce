
import { Dialog, Transition } from '@headlessui/react'
import { Fragment , useState } from 'react'
import { useUser } from '../context/user-context';

export default function SignInModal({isOpen ,setIsOpen}) {
  
    const [user , setUser] = useState({first_name : "" , last_name : "" , email : "" , password : "" , user_type  : ""});
    const {submit} = useUser();
    function closeModal() {
      setIsOpen(false)
    }
  const handleChange = (event) => {
        setUser(prev => ({...prev , [event.target.name] : event.target.value}));
    }

  const handleSubmit = () => {
      submit(user);
    closeModal();
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                     Sign Up Here 
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col justify-around items-start ">
                    <input type="text" name="first_name" id="" placeholder='First Name'  onChange= {handleChange}
                        className = 'w-full border-b-2 border-black p-2 my-2 outline-none font-semibold '
                    />
                    <input type="text" name="last_name" id=""  placeholder = "Last Name"   onChange={ handleChange}
                        className = 'w-full border-b-2 border-black p-2 my-2 outline-none font-semibold '
                    />
                    <input type="email" name="email" id=""  placeholder = "Email "  onChange={handleChange}
                        className = 'w-full border-b-2 border-black p-2 my-2 outline-none font-semibold '
                    />
                    <input type="password" name="password" id="" placeholder = "Password"   onChange={ handleChange}
                        className = 'w-full border-b-2 border-black p-2 my-2 outline-none font-semibold '
                    />
                    
                    <div className = 'w-10/12 flex jusify-around items-start flex-col font-semibold '>
                        User type 
                        <div className='w-full flex items-center '>
                        
                            <input type="radio" name="user_type" id="buyer" value = 'buyer' onChange = {handleChange}
                                className= 'mr-2 '
                            />Buyer 
                            <input type="radio" name="user_type" id="seller" value = 'seller'  onChange = {handleChange} 
                                className = 'ml-2 mr-2'
                            />Seller
                        </div>
                    </div>

                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Sign in
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
