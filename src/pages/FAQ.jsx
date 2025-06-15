import React, { useState } from 'react';
import styles from '@css/faq.module.css';
import faqImage from '@assets/faqbg.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ladyImage from '@assets/ladyimage-nobg.png';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital marketing solutions.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Project timelines vary depending on the scope and complexity. A typical website project takes 4-8 weeks, while mobile apps may take 3-6 months.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Our pricing is project-based and depends on your specific requirements. We provide detailed quotes after understanding your project needs.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'We work with a wide range of technologies including React, Node.js, Python, PHP, and various other modern frameworks and tools.',
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.navPlaceholder}></div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img src={faqImage} alt="FAQ" />
        </div>
      </section>

      {/* White Section with FAQ Box */}
      <section className={styles.whiteSection}>
        <div className={styles.faqBox}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <div
                    className={`${styles.chevron} ${activeIndex === index ? styles.active : ''}`}
                  >
                    <ChevronDownIcon width={16} height={16} />
                  </div>
                </button>
                <div className={styles.faqAnswer}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colored Section */}
      <section className={styles.coloredSection}>
        <img src={ladyImage} alt="Lady" className={styles.image} />
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Any Questions</h2>
          <p className={styles.formSubtitle}>
            Want to know more? Contact us to see what type of solutions we can deploy for your
            business!
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameFields}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.fullWidth}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={30}
              className={styles.fullWidth}
            />
            <button type="submit" className={styles.submitButton}>
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
