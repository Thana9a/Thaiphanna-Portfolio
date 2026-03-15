import { cn } from "../../lib/util";
import React, { useState } from "react";
import { Copy, Mail, PhoneIncoming, MapPin, ClipboardCheck} from "lucide-react";
import { SOCIAL_LINKS } from "./Hero.jsx";
import emailjs from "@emailjs/browser";

function Contact({ id, className }) {
    const [copiedId, setCopiedId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    // controll
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    function handleCopy(text, id) {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => {
            setCopiedId(null);
        }, 2000);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        alert("Thank you for your message! I will get back to you as soon as possible.");

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };
        emailjs.send(
            'service_fya63fk',
            'template_8bcc6n9',
            templateParams,
            'teJhy7lTiBA2pbzVQ'
        )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setName("");
                })
            .catch((error) => {
                setStatus("Error")
                console.log('FAILED...', error.text);
            })
            .finally(() => {
                setIsSubmitting(false);
            })


    }

    const contacts = [
        { id: 1, iconContact: Mail, nameLabel: "Email", href: "mailto:thanapro70@gmail.com", info: "thanapro70@gmail.com", icon: Copy },
        { id: 2, iconContact: PhoneIncoming, nameLabel: "Phone", href: "", info: "070891660", icon: Copy },
        { id: 3, iconContact: MapPin, nameLabel: "Location", href: "", info: "Phnom Penh Tmey, Sensok", icon: Copy },
    ];

    return (
        <section id={id} className={className}>
            <div className="container mx-auto max-w-5xl px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                    Get in <span>Touch</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-4 items-start">

                    {/* LEFT: contacts + social icons */}
                    <div className="flex flex-col w-full md:w-72 shrink-0">

                        {/* Contact card */}
                        <div className="p-6 card-hover border dark:border-zinc-600 rounded-xl flex flex-col gap-4">
                            {contacts.map((contact) => {
                                const IconContact = contact.iconContact;
                                const isCopied = copiedId === contact.id;
                                return (
                                    <div key={contact.id} className="flex items-center gap-4">
                                        <IconContact size={24} className="text-gray-500 shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <span className="font-semibold block">{contact.nameLabel}</span>
                                            {contact.href ? (
                                                <a href={contact.href} className="block text-sm text-gray-500 truncate">{contact.info}</a>
                                            ) : (
                                                <span className="block text-sm text-gray-500">{contact.info}</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleCopy(contact.info, contact.id)}
                                            className="ml-auto rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                                        >
                                            {isCopied
                                                ? <ClipboardCheck size={16} className="text-green-700" />
                                                : <Copy size={16} className="text-slate-400" />
                                            }
                                        </button>
                                    </div>
                                );
                            })}
                        </div>


                        <div className=" py-9 items-center card-hover border dark:border-zinc-600 rounded-xl flex flex-col gap-4">
                        <div className="flex gap-1 mt-4 justify-start">
                            {SOCIAL_LINKS.map((social) => {
                                const SocialIcon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="p-5 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                                    >
                                        <SocialIcon size={26} />
                                    </a>
                                );
                            })}
                        </div>
                        </div>

                    </div>

                    {/* RIGHT: input form */}
                    <div className="flex-1 w-full card border dark:border-zinc-600 rounded-xl">
                        <div className="flex flex-col gap-3 p-4">

                            <div className="flex items-center gap-4">
                                <label className="w-24 text-sm text-gray-500 text-right shrink-0">Name:</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                       placeholder="Name" className="inputBOX resize-none overflow-y-auto" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label className="w-24 text-sm text-gray-500 text-right shrink-0">Email:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                       placeholder="thanapro70@gmail.com" className="inputBOX resize-none overflow-y-auto " />
                            </div>

                            <div className="flex items-center gap-4">
                                <label className="w-24 text-sm text-gray-500 text-right shrink-0">Subject:</label>
                                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                                       placeholder="Subject" className="inputBOX resize-none overflow-y-auto" />
                            </div>

                            <div className="flex items-start gap-4">
                                <label className="w-24 text-sm text-gray-500 text-right shrink-0 mt-2">Message:</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                          placeholder="Message" rows={5} className="inputBOX resize-none overflow-y-auto" />
                            </div>
                            {" "}
                            {status === "Success" && (
                                <div className={"text-green-700 text-sm text-center"}>Success-_-</div>
                            )}
                            {status === "Error" && (
                                <div className={"text-red-700 text-sm text-center"}>Error !!!</div>
                            )}
                            <div className="flex primary-btn justify-center">
                                <button onClick={handleSubmit} disabled={isSubmitting} className="btn-primary">
                                    {isSubmitting ? "Sending..." : "Send Message"}</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
