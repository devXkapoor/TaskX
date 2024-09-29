import React from 'react'
import SignInButtonComponent from './AuthenticationComponents/SignInButtonComponent'
import { SignOutButtonComponent } from './AuthenticationComponents/SignOutButtonComponent'

const Header = () => {
    return (
        <header className="bg-navy-900 text-white pt-2 pr-2 pb-2 pl-2 shadow-lg">
            <div className="mx-2 my-2 flex justify-between items-center">
                <div className='text-2xl font-bold'>
                    Dissertation Management App
                </div>

                {/* <div className='flex gap-10 items-center'>
                    <div>
                        <SignOutButtonComponent />
                    </div>
                    <div>
                        <SignInButtonComponent />
                    </div>
                </div> */}

            </div>

        </header>
    )
}

export default Header