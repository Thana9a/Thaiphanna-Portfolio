import { cn } from "../../lib/util";
import React, { useState } from "react";
import { Copy, Mail, PhoneIncoming, MapPin, ClipboardCheck} from "lucide-react";
import { SOCIAL_LINKS } from "./Hero.jsx";
import emailjs from "@emailjs/browser";

function Contact({ id, className }) {
    const [copiedId, setCopiedId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

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
        const newErrors = {};

        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!subject) newErrors.subject = "Subject is required";
        if (!message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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

    const fields = [
        { id: "name",    label: "Name",    type: "text",     value: name,    setter: setName,    placeholder: "Name" },
        { id: "email",   label: "Email",   type: "email",    value: email,   setter: setEmail,   placeholder: "thanapro70@gmail.com" },
        { id: "subject", label: "Subject", type: "text",     value: subject, setter: setSubject, placeholder: "Subject" },
        { id: "message", label: "Message", type: "textarea", value: message, setter: setMessage, placeholder: "Message" },
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


                        <div className=" py-8 items-center card-hover border dark:border-zinc-600 rounded-xl flex flex-col gap-4">
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

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">

                            {fields.map(({ id, label, type, value, setter, placeholder }) => (
                                <div
                                    key={id}
                                    className={`flex gap-2 sm:gap-4 ${
                                        type === "textarea" ? "flex-col sm:flex-row sm:items-start" : "flex-col sm:flex-row sm:items-center"
                                    }`}
                                >
                                    <label className={`w-full sm:w-24 text-sm text-gray-500 sm:text-right shrink-0 ${type === "textarea" ? "sm:mt-2" : ""}`}>
                                        {label}:
                                    </label>

                                    <div className="flex flex-col w-full min-w-0">
                                        {type === "textarea" ? (
                                            <textarea
                                                value={value}
                                                onChange={(e) => {
                                                    setter(e.target.value);
                                                    if (e.target.value) setErrors(prev => ({ ...prev, [id]: null }));
                                                }}
                                                placeholder={placeholder}
                                                rows={5}
                                                className={`inputBOX w-full resize-none overflow-y-auto ${errors[id] ? "border-red-500 focus:ring-red-400" : ""}`}
                                            />
                                        ) : (
                                            <input
                                                type={type}
                                                value={value}
                                                onChange={(e) => {
                                                    setter(e.target.value);
                                                    if (e.target.value) setErrors(prev => ({ ...prev, [id]: null }));
                                                }}
                                                placeholder={placeholder}
                                                className={`inputBOX w-full ${errors[id] ? "border-red-500 focus:ring-red-400" : ""}`}
                                            />
                                        )}
                                        {errors[id] && (
                                            <span className="text-red-500 text-xs mt-1">{errors[id]}</span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {status === "Success" && <div className="text-green-700 text-sm text-center">Success-_-</div>}
                            {status === "Error"   && <div className="text-red-700 text-sm text-center">Error !!!</div>}

                            <div className={cn("primary-btn flex justify-center")}>
                                <button type="submit" disabled={isSubmitting} className="btn-primary">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
