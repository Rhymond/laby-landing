import { Brain, Clock, Target } from 'lucide-react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EUFunding from './components/EUFunding';
import Feature from './components/Feature';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Supaprastinkite
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"> Tėvystę</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Atraskite dirbtinio intelekto sukurtas veiklas, pritaikytas jūsų vaiko vystymuisi.
              Stebėkite, kaip jūsų vaikas mokosi, auga ir tobulėja su personalizuota mokymosi patirtimi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors">
                Išbandyti Nemokamai
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-50 transition-colors">
                Sužinoti Daugiau
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kodėl Rinktis Laby?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={Brain}
              title="DI Mokymasis"
              description="Personalizuotos veiklos, kurios prisitaiko prie jūsų vaiko mokymosi stiliaus"
            />
            <Feature
              icon={Target}
              title="Pagal Amžių"
              description="Veiklos, kruopščiai pritaikytos skirtingiems vystymosi etapams"
            />
            <Feature
              icon={Clock}
              title="Lankstus Grafikas"
              description="Mokykitės savu tempu su veiklomis, pritaikytomis jūsų dienotvarkei"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kaip Tai Veikia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sukurkite Profilį</h3>
              <p className="text-gray-600">Papasakokite apie vaiko amžių ir pomėgius</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gaukite Rekomendacijas</h3>
              <p className="text-gray-600">Gaukite personalizuotus veiklų pasiūlymus</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pradėkite Mokytis</h3>
              <p className="text-gray-600">Pradėkite vaiko vystymosi kelionę</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section id="activities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Populiariausios Veiklos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
                alt="Kūrybinis Žaidimas"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kūrybinis Žaidimas</h3>
                <p className="text-gray-600">Lavinkite vaizduotę ir motorinius įgūdžius per kūrybines veiklas</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80"
                alt="Problemų Sprendimas"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Problemų Sprendimas</h3>
                <p className="text-gray-600">Smagūs galvosūkiai ir žaidimai, lavinantys loginį mąstymą</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
                alt="Socialiniai Įgūdžiai"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Socialiniai Įgūdžiai</h3>
                <p className="text-gray-600">Interaktyvios veiklos, padedančios vystyti emocinį intelektą</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">laby.lt</span>
            </div>
            <p className="text-gray-400">Įgaliname ateinančią kartą per personalizuotą mokymosi patirtį.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Greitos Nuorodos</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Funkcijos</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">Kaip Tai Veikia</a></li>
              <li><a href="#activities" className="text-gray-400 hover:text-white">Veiklos</a></li>
              <li><a href="/es-parama" className="text-gray-400 hover:text-white">ES Parama</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktai</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-bold">Laby Studio, MB</li>
              <li className="text-gray-400">Įmonės kodas: 306402592</li>
              <li className="text-gray-400">El. paštas: info@laby.lt</li>
              <li className="text-gray-400">Tel.: +37069263930</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Naujienlaiškis</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Jūsų el. paštas"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Prenumeruoti
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/es-parama" element={<EUFunding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
