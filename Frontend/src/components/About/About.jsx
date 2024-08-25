
import aboutImg from '../../assets/Abt.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

                {/*==== about img==== */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                       <p></p>
                    </div>
                </div>
               
               {/*==== about content ==== */}

               <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Long, Happy & Healthy Lives</h2>
                <p className='text_para'>our group of practices throughout Harford County have been providing high-quality veterinary care to local pets since 2 years ago! Located in 
				Historic Kandy, PETWAY Veterinary Clinic seeks to continue a tradition of comprehensive and affordable medical, surgical, 
				and dental care for our four-footed friends. Over the past several years, we have watched our practice grow; however, 
                we will always keep our main focus on providing excellent patient care. We do this by being dedicated to continuing education, 
                consistently enhancing our range of services, and striving to communicate and educate our clientele.</p>

                <p className='text_para mt-[30px]' > Our best is something we strive for each day, caring for your pets- not looking back at what e accomplished but towards what 
                 we can do tomorrow. Providing the best .
                </p>

                <Link to ='/'><button className='btn'>Learn More</button></Link>
               </div>
            </div>

        </div>
    </section>
  )
}

export default About