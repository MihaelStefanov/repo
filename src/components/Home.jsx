import React from "react";
export default function Home() {

const products = [
  {
    id: 1,
    name: "Класически маратонки",
    description: "Комфортни и стилни маратонки за всеки ден.",
    price: "120 лв.",
    image: "https://images.unsplash.com/photo-1600185365752-20ed0d0c20a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Елегантни дамски обувки",
    description: "Перфектни за работа и официални събития.",
    price: "150 лв.",
    image: "https://images.unsplash.com/photo-1600185365752-20ed0d0c20a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Спортни обувки",
    description: "Леки и удобни за спорт и разходки.",
    price: "130 лв.",
    image: "https://images.unsplash.com/photo-1600185365752-20ed0d0c20a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Кожени обувки",
    description: "Висококачествени кожени обувки за стил и комфорт.",
    price: "200 лв.",
    image: "https://images.unsplash.com/photo-1600185365752-20ed0d0c20a2?auto=format&fit=crop&w=400&q=80",
  },
];

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-gray-800">Обувки Онлайн</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Начало</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Мъжки</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Дамски</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Контакти</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Открий перфектните обувки</h2>
            <p className="text-gray-700 mb-6">Най-новите модели за мъже и жени, с гарантирано качество и комфорт.</p>
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Виж колекцията</a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600185365752-20ed0d0c20a2?auto=format&fit=crop&w=600&q=80"
              alt="Shoes"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Препоръчани обувки</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="rounded-t-lg" />
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="font-bold text-blue-600">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto p-4 text-center text-gray-600">
          &copy; 2025 Обувки Онлайн. Всички права запазени.
        </div>
      </footer>
    </div>
  );
}


