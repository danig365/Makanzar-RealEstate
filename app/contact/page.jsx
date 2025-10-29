"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building2, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 sm:py-12 lg:py-16 xl:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">Get In Touch</h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Let us help you find your dream property or answer any questions about your real estate journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 p-4 sm:p-6 lg:p-8 transition-shadow duration-300 hover:shadow-xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">Send Us a Message</h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
              
              {formStatus === 'success' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 ${
                        errors.fullName 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      } outline-none`}
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-[10px] sm:text-xs text-red-600">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        } outline-none`}
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-[10px] sm:text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 ${
                          errors.phone 
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        } outline-none`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-[10px] sm:text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 ${
                      errors.inquiryType 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    } outline-none bg-white`}
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="buy">Looking to Buy</option>
                    <option value="sell">Looking to Sell</option>
                    <option value="rent">Looking to Rent</option>
                    <option value="valuation">Property Valuation</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.inquiryType && <p className="mt-1 text-[10px] sm:text-xs text-red-600">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2 block">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows="4"
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                      } outline-none`}
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-1 text-[10px] sm:text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-all">contact@realestate.com</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">24/7 Response</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl border-2 border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">Office</h3>
                  <p className="text-sm sm:text-base text-gray-600">123 Real Estate Ave</p>
                  <p className="text-sm sm:text-base text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg sm:rounded-xl border-2 border-gray-200 p-4 sm:p-6 text-white">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">Office Hours</h3>
                  <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                    <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-blue-100">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Why Choose Us?</h3>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>24-hour response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>15+ years experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>98% client satisfaction</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span>Licensed & insured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}