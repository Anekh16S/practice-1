import React, { useState } from 'react';

const IndiaMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = {
    kerala: {
      name: 'Kerala',
      crafts: ['Coir Products', 'Coconut Shell Items', 'Bamboo Crafts'],
      description: 'Known for coconut fiber products and traditional handicrafts',
      color: '#10B981',
      products: ['Coir Door Mats', 'Coconut Shell Bowls', 'Palm Leaf Bags'],
      artisans: 15000
    },
    rajasthan: {
      name: 'Rajasthan',
      crafts: ['Clay Pottery', 'Textiles', 'Wooden Crafts'],
      description: 'Famous for colorful pottery and traditional textiles',
      color: '#F59E0B',
      products: ['Clay Plates', 'Block Print Fabrics', 'Wooden Sculptures'],
      artisans: 25000
    },
    karnataka: {
      name: 'Karnataka',
      crafts: ['Bamboo Products', 'Sandalwood Items', 'Silk Textiles'],
      description: 'Renowned for bamboo crafts and silk weaving',
      color: '#8B5CF6',
      products: ['Bamboo Lamps', 'Sandalwood Carvings', 'Mysore Silk'],
      artisans: 18000
    },
    westBengal: {
      name: 'West Bengal',
      crafts: ['Jute Products', 'Terracotta', 'Handloom'],
      description: 'Leading producer of jute and terracotta items',
      color: '#EF4444',
      products: ['Jute Bags', 'Terracotta Dolls', 'Handloom Sarees'],
      artisans: 22000
    },
    tamilNadu: {
      name: 'Tamil Nadu',
      crafts: ['Bronze Items', 'Cotton Textiles', 'Palm Leaf Crafts'],
      description: 'Traditional bronze work and cotton weaving',
      color: '#06B6D4',
      products: ['Bronze Sculptures', 'Cotton Fabrics', 'Palm Manuscripts'],
      artisans: 20000
    },
    gujarat: {
      name: 'Gujarat',
      crafts: ['Block Printing', 'Embroidery', 'Pottery'],
      description: 'Famous for block printing and mirror work',
      color: '#F97316',
      products: ['Block Print Textiles', 'Mirror Work', 'Khadi Fabrics'],
      artisans: 16000
    },
    odisha: {
      name: 'Odisha',
      crafts: ['Pattachitra', 'Silver Filigree', 'Applique Work'],
      description: 'Traditional painting and silver work',
      color: '#84CC16',
      products: ['Pattachitra Paintings', 'Silver Jewelry', 'Applique Items'],
      artisans: 12000
    },
    uttarPradesh: {
      name: 'Uttar Pradesh',
      crafts: ['Chikankari', 'Brassware', 'Carpet Weaving'],
      description: 'Intricate embroidery and metalwork',
      color: '#EC4899',
      products: ['Chikankari Garments', 'Brass Items', 'Hand-knotted Carpets'],
      artisans: 30000
    }
  };

  const handleRegionClick = (regionKey) => {
    setSelectedRegion(regionKey);
  };

  const handleRegionHover = (regionKey) => {
    setHoveredRegion(regionKey);
  };

  const handleRegionLeave = () => {
    setHoveredRegion(null);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Crafts by Region</h2>
          <p className="text-gray-600 text-lg">Discover the rich heritage of Indian handicrafts across different states</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Map of India</h3>
              
              {/* SVG Map of India */}
              <div className="relative">
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-auto border rounded-lg"
                  style={{ backgroundColor: '#f8fafc' }}
                >
                  {/* Kerala */}
                  <path
                    d="M180 450 L160 480 L170 520 L190 530 L200 510 L190 470 Z"
                    fill={hoveredRegion === 'kerala' ? regions.kerala.color : selectedRegion === 'kerala' ? regions.kerala.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('kerala')}
                    onMouseEnter={() => handleRegionHover('kerala')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="175" y="495" className="text-xs font-medium fill-gray-700">Kerala</text>

                  {/* Rajasthan */}
                  <path
                    d="M250 200 L200 220 L210 280 L280 290 L320 250 L300 200 Z"
                    fill={hoveredRegion === 'rajasthan' ? regions.rajasthan.color : selectedRegion === 'rajasthan' ? regions.rajasthan.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('rajasthan')}
                    onMouseEnter={() => handleRegionHover('rajasthan')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="250" y="245" className="text-xs font-medium fill-gray-700">Rajasthan</text>

                  {/* Karnataka */}
                  <path
                    d="M220 380 L200 420 L240 450 L280 440 L290 400 L260 380 Z"
                    fill={hoveredRegion === 'karnataka' ? regions.karnataka.color : selectedRegion === 'karnataka' ? regions.karnataka.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('karnataka')}
                    onMouseEnter={() => handleRegionHover('karnataka')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="240" y="415" className="text-xs font-medium fill-gray-700">Karnataka</text>

                  {/* West Bengal */}
                  <path
                    d="M520 280 L500 320 L530 350 L570 340 L580 300 L550 280 Z"
                    fill={hoveredRegion === 'westBengal' ? regions.westBengal.color : selectedRegion === 'westBengal' ? regions.westBengal.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('westBengal')}
                    onMouseEnter={() => handleRegionHover('westBengal')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="530" y="315" className="text-xs font-medium fill-gray-700">West Bengal</text>

                  {/* Tamil Nadu */}
                  <path
                    d="M280 460 L260 500 L290 530 L330 520 L340 480 L310 460 Z"
                    fill={hoveredRegion === 'tamilNadu' ? regions.tamilNadu.color : selectedRegion === 'tamilNadu' ? regions.tamilNadu.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('tamilNadu')}
                    onMouseEnter={() => handleRegionHover('tamilNadu')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="300" y="495" className="text-xs font-medium fill-gray-700">Tamil Nadu</text>

                  {/* Gujarat */}
                  <path
                    d="M180 250 L160 290 L190 320 L230 310 L240 270 L210 250 Z"
                    fill={hoveredRegion === 'gujarat' ? regions.gujarat.color : selectedRegion === 'gujarat' ? regions.gujarat.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('gujarat')}
                    onMouseEnter={() => handleRegionHover('gujarat')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="195" y="285" className="text-xs font-medium fill-gray-700">Gujarat</text>

                  {/* Odisha */}
                  <path
                    d="M480 320 L460 360 L490 390 L530 380 L540 340 L510 320 Z"
                    fill={hoveredRegion === 'odisha' ? regions.odisha.color : selectedRegion === 'odisha' ? regions.odisha.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('odisha')}
                    onMouseEnter={() => handleRegionHover('odisha')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="495" y="355" className="text-xs font-medium fill-gray-700">Odisha</text>

                  {/* Uttar Pradesh */}
                  <path
                    d="M350 200 L320 240 L360 280 L420 270 L440 230 L400 200 Z"
                    fill={hoveredRegion === 'uttarPradesh' ? regions.uttarPradesh.color : selectedRegion === 'uttarPradesh' ? regions.uttarPradesh.color : '#e2e8f0'}
                    stroke="#64748b"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:opacity-80"
                    onClick={() => handleRegionClick('uttarPradesh')}
                    onMouseEnter={() => handleRegionHover('uttarPradesh')}
                    onMouseLeave={handleRegionLeave}
                  />
                  <text x="375" y="240" className="text-xs font-medium fill-gray-700">Uttar Pradesh</text>
                </svg>

                {/* Hover Tooltip */}
                {hoveredRegion && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-sm max-w-xs">
                    <h4 className="font-bold">{regions[hoveredRegion].name}</h4>
                    <p className="text-xs mt-1">{regions[hoveredRegion].description}</p>
                    <p className="text-xs mt-1">Click to explore crafts</p>
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Legend</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.entries(regions).map(([key, region]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: region.color }}
                      ></div>
                      <span className="text-xs text-gray-600">{region.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Region Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {selectedRegion ? (
                <div>
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-6 h-6 rounded mr-3"
                      style={{ backgroundColor: regions[selectedRegion].color }}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-800">{regions[selectedRegion].name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{regions[selectedRegion].description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Traditional Crafts</h4>
                    <div className="flex flex-wrap gap-2">
                      {regions[selectedRegion].crafts.map((craft, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {craft}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Popular Products</h4>
                    <ul className="space-y-1">
                      {regions[selectedRegion].products.map((product, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">Active Artisans</span>
                      <span className="text-lg font-bold text-green-700">
                        {regions[selectedRegion].artisans.toLocaleString()}+
                      </span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Shop {regions[selectedRegion].name} Crafts
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore Regional Crafts</h3>
                  <p className="text-gray-600 text-sm">Click on any region on the map to discover their traditional handicrafts and artisan communities.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">States Featured</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">158K+</div>
            <div className="text-gray-600">Active Artisans</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600">Craft Types</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;