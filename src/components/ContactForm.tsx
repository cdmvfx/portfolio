import React, {useState} from 'react'

type Props = {}

const ContactForm = (props: Props) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(name, email, message);
	}

	return (
		<div>
			<div className="mb-4">
				<input name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full border border-white p-2 text-[#1c1c1c] outline-none focus:border focus:border-[#1c1c1c] " />
			</div>
			<div className="mb-4">
				<input name='email'  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" className="w-full border border-white p-2 text-[#1c1c1c] outline-none focus:border focus:border-[#1c1c1c] " />
			</div>
			<div className="mb-4">
				<textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)}  rows="4" placeholder="Message" className="w-full border border-white p-2 text-[#1c1c1c] outline-none focus:border focus:border-[#1c1c1c] " />
			</div>
			<div className="">
				<button type='button' onClick={handleSubmit} className="btn mr-4 w-full tracking-widest text-sm text-white bg-emerald-600 outline outline-1 outline-emerald-400 outline-offset-1 px-2 py-2 inline-block transition hover:bg-emerald-500">Send message</button>
			</div>
		</div>
	)
}

export default ContactForm