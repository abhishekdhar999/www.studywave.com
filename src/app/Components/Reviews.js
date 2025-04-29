import React from "react";

const Review = () => {
  return (
    <>
   
     <div className="my-6 font-extrabold mx-6">
        <p className="text-green-400 font-extrabold text-[20px]">Voices of Confidence*</p>
     </div>

<div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3> */}
            <p className="my-4">My daughters confidence has grown tremendously. The tutors are patient, kind, and really know how to connect with kids.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right text-black ms-3">
                <div>Bonnie Green</div>
                {/* <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div> */}
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3> */}
            <p className="my-4">“Weve tried other platforms, but none matched the personalized attention and consistent progress weve seen here.”</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right text-black ms-3">
                <div>Roberta Casas</div>
               
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3> */}
            <p className="my-4">This platform made learning enjoyable for my son again. Hes excited to log in and learn every day.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right text-black ms-3">
                <div>Jese Leos</div>
                {/* <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div> */}
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3> */}
            <p className="my-4">We're very happy with our child's progress. The teachers are supportive, and the learning environment is excellent. Our child feels more confident and excited to learn every day.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium text-black text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                
            </div>
        </figcaption>    
    </figure> 
</div>

    </>
  );
};

export default Review;