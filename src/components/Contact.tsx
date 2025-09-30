import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative w-full px-6 sm:px-12 py-20 bg-transparent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#00ffe5] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          className="grid grid-cols-1 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!"); // Replace with actual form submission logic
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffe5] transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffe5] transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="w-full p-4 rounded-xl bg-[#111] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffe5] transition"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-[#00ffe5] text-black font-semibold rounded-xl hover:bg-[#00d4b8] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
