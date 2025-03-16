import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Amanullah Collections is a premium clothing brand that blends traditional craftsmanship with modern design. Each piece is crafted with high-quality fabrics, offering elegance, comfort, and timeless style, making every wearer feel confident and exceptional.</p>
        <p>Amanullah Collections is a transformative clothing brand that creates exquisite garments, designed to capture the essence of elegance, sophistication, and timeless style. Each piece is a masterpiece, blending premium fabrics and intricate craftsmanship to evoke confidence and elevate the wearer, offering a truly luxurious experience with every wear.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Amanullah Collections, our mission is to deliver high-quality, luxury clothing that enhances personal style and creates unforgettable impressions. We are committed to using premium fabrics and expert craftsmanship to produce garments that embody elegance, sophistication, and timeless beauty. Our focus is on creating versatile, durable, and fashion-forward pieces that empower individuals to express their unique style with confidence, ensuring a truly exceptional wardrobe experience.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality Assurance at Amanullah Collections ensures each garment is crafted with premium fabrics and expert craftsmanship, delivering lasting elegance and durability. Every piece undergoes strict testing to meet our high standards of quality and style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Convenience at Amanullah Collections offers an easy shopping experience with a user-friendly website, fast shipping, and reliable customer service, ensuring you enjoy your new wardrobe pieces without delay.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Amanullah Collections is dedicated to exceptional customer service, ensuring every customer feels valued. From personalized styling advice to prompt support, we strive to create a seamless and enjoyable shopping experience.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
