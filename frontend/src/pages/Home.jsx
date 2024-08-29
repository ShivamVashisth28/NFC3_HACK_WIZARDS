import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">PetAdopt</div>
          <nav>
            <a href="#features" className="ml-4 hover:underline">Features</a>
            <a href="#pets" className="ml-4 hover:underline">Pets</a>
            <a href="#contact" className="ml-4 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen text-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Find Your New Best Friend</h1>
          <p className="text-lg md:text-2xl mb-6">Discover lovable pets in need of a home. Browse our pet listings and make a difference today!</p>
          <a href="#pets" className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">Browse Pets</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/3 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Easy Adoption</h3>
              <p>Find and adopt pets with our streamlined process.</p>
            </div>
            <div className="w-full sm:w-1/3 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wide Variety</h3>
              <p>Browse a diverse range of pets available for adoption.</p>
            </div>
            <div className="w-full sm:w-1/3 bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p>Receive support and advice from our dedicated team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pets Showcase Section */}
      <section id="pets" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Pets</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/150" alt="Pet" className="w-full h-32 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buddy</h3>
              <p>Friendly and playful dog.</p>
            </div>
            <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/150" alt="Pet" className="w-full h-32 object-cover rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Whiskers</h3>
              <p>Sweet and cuddly cat.</p>
            </div>
            {/* Add more pet cards as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 PetAdopt. All rights reserved.</p>
          <p>Contact us: <a href="mailto:info@petadopt.com" className="underline">info@petadopt.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
