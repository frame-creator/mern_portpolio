import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import Footer from '../components/Footer';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          alert('문의 내용이 발송되었습니다.');
          window.location.reload(true);
              //result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <React.Fragment>
        <div className="main-box"></div>
    <section class="section-form">
    <div class="row contact-title">
                    <h3>Contact</h3>
                </div>
    <div class="form-box">  
                <div class="row">
                 
    <form id = "contact-form"  ref={form} onSubmit={sendEmail}>
        <div className= "row">
        <div className= "col span-1-of-3">
            <label htmlFor="title">제목</label>
            </div>  
            <div className= "col span-2-of-3">
            <input type="text" className="form-control" placeholder="제목" name="name" />
       </div>
        </div>
        <div class="row">
                            <div class="col span-1-of-3">
            <label htmlFor="emailInput">이메일 주소</label>
            
            </div>
            <div class="col span-2-of-3">
            <input type="email" className="form-control" placeholder="이메일 주소" name="email"></input>
        
        </div>
        </div>
        <div class="row">
                            <div class="col span-1-of-3">
           <label htmlFor="message">문의 내용</label>
           </div>
                            <div class="col span-2-of-3">
            <textarea className="form-control" rows="5" placeholder="framecreator00@gmail.com로 발송됩니다." name="message"></textarea>
        </div>
        </div>
        <div class="row">
                            <div class="col span-3-of-3 btn-box">
                                <label>&nbsp;</label>
                            </div>
                            <div class="col span-3-of-3 btn-box">
                                <input type="submit" value="보내기"/>
                            </div>
                        </div>
                        
                        </form>
    </div>
    </div>
    </section>
    <div className="main-box"></div>
    <Footer/>
    </React.Fragment>

  //  <form ref={form} onSubmit={sendEmail}>
  //    <label>Name</label>
  //    <input type="text" name="name" />
  //    <label>Email</label>
  //    <input type="email" name="email" />
 //     <label>Message</label>
  //    <textarea name="message" />
  //    <input type="submit" value="Send" />
 //   </form>
  );
};

export default ContactForm;
