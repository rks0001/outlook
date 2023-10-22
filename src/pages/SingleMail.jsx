import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Mail from '../components/Mail';

const SingleMail = () => {
    const { id } = useParams(); // Get the "id" parameter from the URL

    // Assuming you have a selector to retrieve the mail items
    const userItems = useSelector((store) => store.user.userItems[0].list);

    // Find the mail item with the matching ID
    const mailItem = userItems.find(item => item.id === id);

    if (!mailItem) {
        // Handle the case where the mail item is not found, e.g., show a "Not Found" message
        return <div>Mail not found</div>;
    }

    return (
        <div className='p-10 text-[#636363]'>
            <div className='pt-4 px-4'>
            <Link to='/' className='font-semibold text-gray-500'>Show all mails</Link> 
            </div>
        
            <div className='flex'>
            <div className='w-4/12'><Mail/></div>
            <div className='w-8/12 p-10'>
                <div>
                    <div className='flex gap-2'>
                    <div className='bg-[#E54065]  h-max px-3 py-1 rounded-full text-white font-semibold'>F</div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div>
                            <h2 className='font-semibold'>{mailItem.from.name}</h2>
                            <p className='font-semibold text-sm'>Date: {new Date(mailItem.date).toLocaleString()}</p>
                    
                            </div>
                            <div className='bg-[#E54065] text-white font-semibold h-max rounded-lg px-3 py-1'>
                                Add to favourite
                            </div>
                        </div>
                   <div className='font-semibold text-sm pt-2'>Mail{id} Content</div>
                        <p className='pt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sunt, placeat repellendus libero repellat, necessitatibus quo sit vitae, alias perspiciatis omnis itaque ratione voluptatum at deleniti ab fuga modi nihil.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi reprehenderit perspiciatis incidunt delectus cumque provident temporibus corrupti repudiandae magni voluptas. Totam nulla similique blanditiis reprehenderit cupiditate, vel inventore explicabo asperiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe dolorem soluta quia, quaerat consequatur rerum, atque eum culpa praesentium corporis blanditiis consequuntur voluptatibus cumque ut veniam aliquam temporibus beatae.
                        </p>
            
           
            
                    </div>
                    </div>
                  
                </div>
            
            </div>
            
        </div>
        </div>
        
    );
}

export default SingleMail;
