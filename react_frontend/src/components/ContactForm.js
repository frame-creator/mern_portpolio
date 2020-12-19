import React, {useState} from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


function onTitleChange(e)  {
        setTitle( e.target.value)
    }
function onEmailChange(e) {
        setEmail(e.target.value)
    }
function onMessageChange(e) {
        setMessage(e.target.value)
    }

function resetInput (e) {
    setTitle( '');
    setEmail('');
    setMessage('');

}
function handleSubmit(event) {
    event.preventDefault();
    console.log(message, email, title);

    fetch('http://localhost:5000/send', {
        method: "POST",
        body: JSON.stringify(
            {title: title,
            email:email,
            message: message}

            ),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then (
        (response) => (response.json())
       
).then((response) => {
        resetInput();
        if (response.status === 'success') {
            alert("메세지가 전송되었습니다.");
            

        }
        else if (response.status === 'fail') {
            alert("메세지 전송이 되지 않았습니다. 다시 시도해주세요.")
        }
    })
}
    



    

return (
    <React.Fragment>
<form id = "contact-form"  method="POST" onSubmit={handleSubmit}>
    <div className= "form-group">
    <div className= "form-group__title">
        <label htmlFor="title">제목</label>
        <input type="text" className="form-control" value={title} onChange={onTitleChange} />
    </div>
    <div className="form-group__email">
        <label htmlFor="emailInput">이메일 주소</label>
        <input type="email" className="form-control" value={email} onChange={onEmailChange}></input>
    </div>
    <div className="form-group__message">
        <label htmlFor="message">내용</label>
        <textarea className="form-control" rows="5" value={message} onChange={onMessageChange}></textarea>
    </div>
    </div>
    <button type="submit" className="btn">제출</button>
</form>
</React.Fragment>
);

}

export default ContactForm;