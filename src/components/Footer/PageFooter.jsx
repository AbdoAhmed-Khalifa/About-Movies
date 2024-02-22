
'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function PageFooter() {
    return (
        <Footer container className=' mt-10 inset-x-0 bottom-0  bg-slate-900'>
            <div className="w-full">
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright className='text-white' href="https://www.linkedin.com/in/abdelrahman-khalifa-aab3b8217/" by="Abdelrahman Khalifa" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon className='text-white' target='_balnk' href="https://www.facebook.com/profile.php?id=100004235130641" icon={BsFacebook} />
                        <Footer.Icon className='text-white' target='_balnk' href="https://twitter.com/abd0_khalifa" icon={BsTwitter} />
                        <Footer.Icon className='text-white' target='_balnk' href="https://www.linkedin.com/in/abdelrahman-khalifa-aab3b8217/" icon={BsLinkedin} />
                        <Footer.Icon className='text-white' target='_balnk' href="https://github.com/AbdoAhmed-Khalifa" icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
export default PageFooter