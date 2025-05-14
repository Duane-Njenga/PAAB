function Navbar(){
    return (
    <div
      className="bg-purple-900 text-white w-full flex gap-3 p-4 shadow-md"
    >
        <a href="#Introduction" className="mx-2">Home</a>
        <a href="#WhyUs" className="mx-2">Why us</a>
        <a href="#Description" className="mx-2">Company Description</a>
        <a href="#Assets" className="mx-2">Asset Classes</a>
        <a href="#Footer" className="mx-2">Contact Us</a>
    </div>
    )
}

export default Navbar;