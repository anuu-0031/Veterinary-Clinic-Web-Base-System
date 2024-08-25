
import heroImg01 from '../assets/hero-img-01.jpg'
import heroImg02 from '../assets/hero-img-02.jpg'
import heroImg03 from '../assets/hero-img-03.jpg'
import icon01 from '../assets/icon01.png'
import icon02 from '../assets/icon02.png'
import icon03 from '../assets/icon03.png'
import featureImg from '../assets/feature.jpg'
import faqImg from '../assets/faq-img.jpg'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'
import ServicesLists from '../components/Services/ServicesLists'
import FaqList from '../components/FAQ/FaqList'
import DoctorList from '../components/Doctors/DoctorList'
//import Testimonial from '../components/Testimonial/Testimonial'




const Home = () => {
  return <>

  {/* ===== hero section ===== */}
  
  <section className='hero_section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            {/* ===== hero content ===== */}
            <div>
                <div className='lg:w-[570px]'>
                    <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                    Exceptional Vets for Exceptional Pets.
                    </h1>
                    <p className='text_para'>
                    Our experienced veterinary team provides comprehensive medical care,
					ranging from routine to advanced procedures and treatments.
                    </p>
                    <button className='btn'> Request an Appointment</button>
                </div>
                {/* ===== hero counter ===== */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                    <div>
                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>20+</h2>
                        <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'> Years of Experience</p>
                    </div>
                    <div>
                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                        <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'> Clinic Location</p>
                    </div>
                    <div>
                        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                        <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'> Pet Owner Satisfaction</p>
                    </div>

                </div>


            </div>

            {/* ===== hero content ===== */}

          <div className='flex gap-[30px] justify-end'>
            <div>
                <img className='w-full' src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[30px]' />
                <img src={heroImg03} alt="" className='w-full' />
            </div>
          </div>

        </div>

    </div>
  </section>

   {/* ===== hero section end ===== */}

   <section>
    <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
                Providing the best veterinary medical services
            </h2>
            <p className='text_para text-center'>
                 A passionate team.Higher standards of medicine.A belief in treating your pet like our own. This is a special kind of
                  veterinary clinic Because you have a special kind of pet.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                    <img src={icon01} alt="" />
                </div>
                <div className='mt-[30px]'>
                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a doctor</h2>
                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World class care for everyone.Our health system offers unmatched,expert health care.Form the lab to the clinic.
                   </p>
                   <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>

            </div>
            <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                    <img src={icon02} alt="" />
                </div>
                <div className='mt-[30px]'>
                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World class care for everyone.Our health system offers unmatched,expert health care.Form the lab to the clinic.
                   </p>
                   <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>

            </div>
            <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                    <img src={icon03} alt="" />
                </div>
                <div className='mt-[30px]'>
                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    World class care for everyone.Our health system offers unmatched,expert health care.Form the lab to the clinic.
                   </p>
                   <Link to ='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border border-[#181A1E] mt-[30px] mx-auto
                   flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>

            </div>

        </div>

    </div>
   </section>

   <About/>

   {/*=====services section===== */}

    <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Our Services</h2>
                <p className='text_para text-center'>The Timberlea Veterinary Clinic believes in having all services available for your animal, 
                so that your animal is followed from start to finish should a medical problem arise. We offer state of the art equipment that allows us 
                to give your pet the best care possible – from digital radiography, complete in-house laboratory, ultrasonography as well as endoscopy</p>

            </div>

            <ServicesLists/>
        </div>
    </section>

   {/*=====services section end===== */}

   {/*=====feature section===== */}
   <section>
    <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>

            {/*=====feature content===== */}
            <div className='xl:w-[670px]'>
                <h2 className='heading'>
                      Get virtual treatment <br/> anytime
                </h2>

                <ul className='pl-4'>
                    <li className='text_para'>
                   1. Provision of medical services for animals, including routine check-ups, 
                      vaccinations, surgical procedures, dental care, and treatment of illnesses and injuries.

                    </li>
                    <li className='text_para'>
                        2. Providing emergency and critical care services for animals in
                           need of immediate medical attention due to accidents, injuries, or sudden illnesses.

                    </li>
                    <li className='text_para'>
                        3. Diagnostic services such as X-rays, blood tests, urine analysis, 
                           and ultrasound imaging to assess the health of animals and diagnose medical conditions.
                        
                    </li>
                </ul>
                 <Link to ='/'><button className='btn'>Learn More</button></Link>

            </div>
            {/*=====feature Img===== */}

            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                <img src={featureImg} className='w-3/4' alt="" />

                <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:ieft-5 z-20 p-2 pb-3 lg:pt-4
                lg:px-4 lg:pb-[26px] rounded-[10px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[6px] lg:gap-3'>
                            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                               
                            </p>

                        </div>

                    </div>
                    <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] Py-1 Px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] leading-[8px]
                    lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4'>
                        consultion

                    </div>
                     
                </div>

            </div>

        </div>

    </div>
   </section>
  {/*=====Our Team===== */}
    
    <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>Our Team Staff</h2>
                <p className='text_para text-center'>The caring staff at veterinary clinic center understand the deep connection you share with your animal companion. 
                It is our personal experiences with animals that make our care so unique.</p>

            </div>

         <DoctorList/>

            
        </div>

    </section>
    {/*=====Our Team===== */}

    {/*=====FAQ section===== */}

    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-0'>
                <div className='w-1/2 hidden md:block'>
                    <img src={faqImg} alt="" />
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='heading'>
                        Most questions by our beloved pet owners

                    </h2>

                    <FaqList/>

                </div>

            </div>

        </div>
    </section>

     {/*=====FAQ section end===== */}

     {/*=====testimonial===== */}

    
    {/* <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>What our pet owner say </h2>
                <p className='text_para text-center'>
                      World class care for everyone.Our health system offers unmatched, expert health care .
                </p>
            </div>

            <Testimonial/>*

            

        </div>
     </section>


     {/*=====testimonial end===== */}


     

  </>
}

export default Home