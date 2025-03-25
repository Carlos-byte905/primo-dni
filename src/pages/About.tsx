import { Heart, Shield, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicados a crear las mejores fundas para proteger tu Biblia con elegancia y distinción.
          </p>
        </div>
      </div>

      {/* Misión y Valores */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
              <p className="text-gray-600">
                Proporcionar fundas de la más alta calidad que protejan y realcen la belleza de tu Biblia.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nuestro Compromiso</h3>
              <p className="text-gray-600">
                Usar solo los mejores materiales y técnicas artesanales en cada una de nuestras fundas.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
              <p className="text-gray-600">
                Excelencia, integridad y atención al detalle en todo lo que hacemos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Desde nuestros inicios, nos hemos dedicado a la creación de fundas para Biblia que combinan
              la protección práctica con la elegancia estética. Nuestra pasión por la artesanía y el
              compromiso con la calidad nos han convertido en líderes en nuestro sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}