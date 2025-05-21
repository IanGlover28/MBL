const Contact = () => (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input className="p-3 border rounded" type="text" placeholder="Your Name" required />
        <input className="p-3 border rounded" type="email" placeholder="Your Email" required />
        <textarea className="p-3 border rounded" placeholder="Your Message" required />
        <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-700" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
  export default Contact;
  