import { cn } from "../../lib/util";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Copy, Mail, PhoneIncoming, MapPin, ClipboardCheck } from "lucide-react";
import { SOCIAL_LINKS } from "./Hero.jsx";
import emailjs from "@emailjs/browser";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../../lib/motion";

function Contact({ id, className }) {
    const [copiedId, setCopiedId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    // form state
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    function handleCopy(text, id) {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => { setCopiedId(null); }, 2000);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        if (!name)    newErrors.name    = "Name is required";
        if (!email)   newErrors.email   = "Email is required";
        if (!subject) newErrors.subject = "Subject is required";
        if (!message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

        setIsSubmitting(true);
        alert("Thank you for your message! I will get back to you as soon as possible.");

        const templateParams = { from_name: name, from_email: email, subject, message };
        emailjs.send('service_fya63fk', 'template_8bcc6n9', templateParams, 'teJhy7lTiBA2pbzVQ')
            .then(() => {
                console.log('SUCCESS!');
                setEmail(""); setSubject(""); setMessage(""); setName("");
            })
            .catch((error) => {
                setStatus("Error");
                console.log('FAILED...', error.text);
            })
            .finally(() => setIsSubmitting(false));
    }

    const contacts = [
        { id: 1, iconContact: Mail,          nameLabel: "Email",    href: "mailto:thanapro70@gmail.com", info: "thanapro70@gmail.com",    icon: Copy },
        { id: 2, iconContact: PhoneIncoming, nameLabel: "Phone",    href: "",                            info: "070 891 660",             icon: Copy },
        { id: 3, iconContact: MapPin,        nameLabel: "Location", href: "",                            info: "Phnom Penh Tmey, Sensok", icon: Copy },
    ];

    const fields = [
        { id: "name",    label: "Name",    type: "text",     value: name,    setter: setName,    placeholder: "Your name" },
        { id: "email",   label: "Email",   type: "email",    value: email,   setter: setEmail,   placeholder: "thanapro70@gmail.com" },
        { id: "subject", label: "Subject", type: "text",     value: subject, setter: setSubject, placeholder: "Subject" },
        { id: "message", label: "Message", type: "textarea", value: message, setter: setMessage, placeholder: "Your message…" },
    ];

    return (
        <motion.section
            id={id}
            className={cn("py-24 px-4", className)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
        >
            <div className="container mx-auto max-w-5xl">
                {/* Heading */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white"
                >
                    Get in{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Touch
                    </span>
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-4 items-start">

                    {/* LEFT: contacts + social icons */}
                    <motion.div variants={fadeLeft} className="flex flex-col w-full md:w-72 shrink-0 gap-4">

                        {/* Contact info card */}
                        <div className="p-6 card-hover border dark:border-zinc-600 rounded-xl flex flex-col gap-4">
                            {contacts.map((contact) => {
                                const IconContact = contact.iconContact;
                                const isCopied = copiedId === contact.id;
                                return (
                                    <div key={contact.id} className="flex items-center gap-4">
                                        <IconContact size={20} className="text-indigo-400 shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <span className="font-semibold block text-sm">{contact.nameLabel}</span>
                                            {contact.href ? (
                                                <a href={contact.href} className="block text-sm text-gray-500 truncate hover:text-indigo-500 transition-colors">{contact.info}</a>
                                            ) : (
                                                <span className="block text-sm text-gray-500">{contact.info}</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleCopy(contact.info, contact.id)}
                                            className="ml-auto rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                                            aria-label={`Copy ${contact.nameLabel}`}
                                        >
                                            {isCopied
                                                ? <ClipboardCheck size={16} className="text-green-500" />
                                                : <Copy size={16} />
                                            }
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social icons card */}
                        <div className="py-6 px-4 card-hover border dark:border-zinc-600 rounded-xl flex justify-center gap-1">
                            {SOCIAL_LINKS.map((social) => {
                                const SocialIcon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="p-3 rounded-lg text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
                                    >
                                        <SocialIcon size={22} />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* RIGHT: contact form */}
                    <motion.div variants={fadeRight} className="flex-1 w-full card border dark:border-zinc-600 rounded-xl">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
                            {fields.map(({ id, label, type, value, setter, placeholder }) => (
                                <div
                                    key={id}
                                    className={`flex gap-2 sm:gap-4 ${
                                        type === "textarea"
                                            ? "flex-col sm:flex-row sm:items-start"
                                            : "flex-col sm:flex-row sm:items-center"
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
                                                className={`inputBOX w-full resize-none overflow-y-auto ${errors[id] ? "border-red-500" : ""}`}
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
                                                className={`inputBOX w-full ${errors[id] ? "border-red-500" : ""}`}
                                            />
                                        )}
                                        {errors[id] && (
                                            <span className="text-red-500 text-xs mt-1">{errors[id]}</span>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {status === "Success" && <p className="text-green-600 text-sm text-center">Message sent!</p>}
                            {status === "Error"   && <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>}

                            <div className="flex justify-center mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="primary-btn disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending…" : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
