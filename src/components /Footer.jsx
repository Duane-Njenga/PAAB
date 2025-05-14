function Footer() {
  return (
    <div
      className="bg-amber-300 border-amber-600 border-2 text-gray-900 p-4 font-serif"
    >
      <section id="Footer">
        <p className="flex flex-wrap font-bold text-lg mb-2">
          PAAB CAPITAL
          <span className="w-full block mt-1 text-base font-medium">
            The Portal of Wealth Transfer
          </span>
          <span className="w-full block mt-1 text-sm">
            © 2025 PAAB Capital. All Rights Reserved.
          </span>
          <span className="w-full block italic mt-1 text-sm">
            Empowering Wealth. Building Trust. Shaping Futures.
          </span>
        </p>
        
        <p className="mb-2">
          Location: New Hope House,
          Along Ole Sangale Rd. Opposite 
          Strathmore University Gate D. Madaraka
          Nairobi, Kenya |{" "}
          <a 
            className="text-amber-800 underline hover:text-amber-950"
            href="https://maps.app.goo.gl/hTv8TEKnbbVnPzVo9"
          >
            Maps
          </a>
        </p>
        
        <p className="mb-1">Tel no. +25472176503</p>
        <p>Email: paabcapital@gmail.com</p>
      </section>
    </div>
  );
}

export default Footer;