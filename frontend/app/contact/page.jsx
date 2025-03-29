"use client"

import React, { useState } from "react";
import axios from "axios";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/Alert";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [globalError, setGlobalError] = useState("");

    // Validation functions
    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const validatePhone = (phone) => {
        const pattern = /^(?:\+?254|0)?[71]\d{8}$/;
        return pattern.test(phone);
    };

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return value.length < 2 ? "Name must be at least 2 characters long" : "";
            case "email":
                return !validateEmail(value) ? "Please enter a valid email address" : "";
            case "phone":
                return !validatePhone(value) ? "Please enter a valid Kenyan phone number" : "";
            case "message":
                return value.length < 10 ? "Message must be at least 10 characters long" : "";
            default:
                return "";
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear errors for this field
        setErrors(prev => ({ ...prev, [name]: "" }));

        // Clear success message when user starts typing again
        if (successMessage) setSuccessMessage("");
        if (globalError) setGlobalError("");
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setGlobalError("");
        setSuccessMessage("");

        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (key !== "company") { // Company is optional
                const error = validateField(key, formData[key]);
                if (error) newErrors[key] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            setGlobalError("Please correct the errors below.");
            return;
        }

        try {
            const response = await axios.post(
                'https://legalizeme.onrender.com/api/contact',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 10000 // 10 second timeout
                }
            );

            setSuccessMessage(response.data.message);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""
            });
            setErrors({});
        } catch (error) {
            if (error.response) {
                // Server responded with an error
                setGlobalError(error.response.data.error || "Failed to send message. Please try again.");
            } else if (error.code === "ECONNABORTED") {
                setGlobalError("Request timed out. Please check your connection and try again.");
            } else if (!navigator.onLine) {
                setGlobalError("You appear to be offline. Please check your internet connection.");
            } else {
                setGlobalError("An unexpected error occurred. Please try again later.");
            }
            console.error("Submission Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen mt-20 bg-white">
            <section className="py-10 sm:py-16 lg:py-24 animate-fadeIn font-montserrat">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                            We are here to help and answer any question you might have. We look forward to hearing from you.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        {/* Contact Information Cards */}
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            {/* Phone Card */}
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">+254-714-844-320</p>
                                </div>
                            </div>
                            {/* Email Card */}
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium text-gray-900">info.support@legalizeme.site</p>
                                </div>
                            </div>
                            {/* Address Card */}
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">East View Elgon Road, Eldoret</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                                {globalError && (
                                    <Alert variant="destructive" className="mt-4">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{globalError}</AlertDescription>
                                    </Alert>
                                )}

                                {successMessage && (
                                    <Alert className="mt-4 bg-green-50 text-green-700 border-green-200">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <AlertDescription>{successMessage}</AlertDescription>
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit} className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label className="text-base font-medium text-gray-900">Your name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                                                disabled={isSubmitting}
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900">Email address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                                                disabled={isSubmitting}
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900">Phone number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                                                disabled={isSubmitting}
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900">Company name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Enter your company name (optional)"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className="text-base font-medium text-gray-900">Message *</label>
                                            <textarea
                                                name="message"
                                                placeholder="Enter your message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                className={`block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600 ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                                                rows="4"
                                                disabled={isSubmitting}
                                            />
                                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Send message"
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 