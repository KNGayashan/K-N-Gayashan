import { useState, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/Models/Contact/ContactExperience';
import emailjs from '@emailjs/browser'

const ContactSection = () => {

     const formRef = useRef(null);

     const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
     });

     const [loading, setLoading] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
               ...formData, [name]: value
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          setLoading(true);
          try {

               await emailjs.sendForm(
                    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
               )

               setFormData({ name: '', email: '', message: '' });


          } catch(error) {
               console.log('EMAILJS ERROR', error)
          } finally {
               setLoading(false)
          }

     };

     return (
          <section id="contact" className="flex-center section-padding">
               <div className="w-full h-full md:px-10 px-5">
                    <TitleHeader
                         title="Get In Touch With Me"
                         sub="📧 Contact Information"
                    />

                    <div className="grid-12-cols mt-16">
                         <div className="xl:col-span-5">
                              <div className="flex-center card-border rounded-xl p-10">
                                   <form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="w-full flex flex-col gap-7"
                                   >
                                        <div>
                                             <label htmlFor="name">Your name</label>
                                             <input
                                                  type="text"
                                                  id="name"
                                                  name="name"
                                                  value={formData.name}
                                                  onChange={handleChange}
                                                  placeholder="What’s your good name?"
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <label htmlFor="email">Your Email</label>
                                             <input
                                                  type="email"
                                                  id="email"
                                                  name="email"
                                                  value={formData.email}
                                                  onChange={handleChange}
                                                  placeholder="What’s your email address?"
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <label htmlFor="message">Your Message</label>
                                             <textarea
                                                  id="message"
                                                  name="message"
                                                  value={formData.message}
                                                  onChange={handleChange}
                                                  placeholder="How can I help you?"
                                                  rows="5"
                                                  required
                                             />
                                        </div>

                                        <button type="submit" disabled={loading}>
                                             <div className="cta-button group">
                                                  <div className="bg-circle" />
                                                  <p className="text">
                                                       { loading ? "Sending..." : "Send Message"}
                                                  </p>
                                                  <div className="arrow-wrapper">
                                                       <img src="/images/arrow-down.svg" alt="arrow" />
                                                  </div>
                                             </div>
                                        </button>
                                   </form>
                              </div>
                         </div>
                         <div className="xl:col-span-7 min-h-96">
                              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                                   <ContactExperience />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ContactSection
