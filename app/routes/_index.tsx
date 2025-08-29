import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Dinamik Fiyat Hesaplayıcı" },
    { name: "description", content: "Boy, en ve materyal seçimine göre dinamik fiyat hesaplama" },
  ];
};

interface PricingData {
  dimensions: { [key: string]: number };
  materials: { [key: string]: number };
}

export default function Index() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [material, setMaterial] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const pricingData: PricingData = {
    dimensions: {
      "100-200": 1.0,
      "201-400": 1.5,
      "401-600": 2.0,
      "601-800": 2.5,
      "801+": 3.0,
    },
    materials: {
      "ahşap": 50,
      "cam": 80,
      "metal": 120,
      "plastik": 30,
    },
  };

  const calculatePrice = () => {
    if (!width || !height || !material) {
      setEstimatedPrice(null);
      return;
    }

    const area = width * height;
    let dimensionCoefficient = 1.0;

    if (area <= 20000) dimensionCoefficient = pricingData.dimensions["100-200"];
    else if (area <= 80000) dimensionCoefficient = pricingData.dimensions["201-400"];
    else if (area <= 240000) dimensionCoefficient = pricingData.dimensions["401-600"];
    else if (area <= 480000) dimensionCoefficient = pricingData.dimensions["601-800"];
    else dimensionCoefficient = pricingData.dimensions["801+"];

    const materialPrice = pricingData.materials[material.toLowerCase()] || 0;
    const basePrice = 25; 
    const calculatedPrice = (basePrice + materialPrice) * dimensionCoefficient;

    setEstimatedPrice(Math.round(calculatedPrice));
  };

  useEffect(() => {
    calculatePrice();
  }, [width, height, material]);

  const handleAddToCart = async () => {
    if (!width || !height || !material || !estimatedPrice) {
      setError("Lütfen tüm alanları doldurun");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`Ürün sepete eklendi! Fiyat: ${estimatedPrice} TL`);
      
      setWidth(0);
      setHeight(0);
      setMaterial("");
      setEstimatedPrice(null);
    } catch (err) {
      setError("Ürün sepete eklenirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  const getDimensionRange = (area: number) => {
    if (area <= 20000) return "100-200 cm²";
    if (area <= 80000) return "201-400 cm²";
    if (area <= 240000) return "401-600 cm²";
    if (area <= 480000) return "601-800 cm²";
    return "801+ cm²";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Dinamik Fiyat Hesaplayıcı
          </h1>
          
          <div className="space-y-6">
            {/* Boyut Seçimi */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Genişlik (cm)</label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={width || ""}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="form-input"
                  placeholder="Genişlik girin"
                />
              </div>
              <div>
                <label className="form-label">Yükseklik (cm)</label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={height || ""}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="form-input"
                  placeholder="Yükseklik girin"
                />
              </div>
            </div>

            {/* Materyal Seçimi */}
            <div>
              <label className="form-label">Materyal</label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="form-input"
              >
                <option value="">Materyal seçin</option>
                <option value="ahşap">Ahşap</option>
                <option value="cam">Cam</option>
                <option value="metal">Metal</option>
                <option value="plastik">Plastik</option>
              </select>
            </div>

            {/* Fiyat Gösterimi */}
            {estimatedPrice && (
              <div className="price-display text-center">
                <div className="text-sm text-gray-600 mb-2">Tahmini Fiyat</div>
                <div className="text-4xl">{estimatedPrice} TL</div>
                {width && height && (
                  <div className="text-sm text-gray-500 mt-2">
                    Alan: {width} × {height} = {width * height} cm² 
                    ({getDimensionRange(width * height)})
                  </div>
                )}
              </div>
            )}

            {/* Hata Mesajı */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Sepete Ekle Butonu */}
            <button
              onClick={handleAddToCart}
              disabled={!width || !height || !material || isLoading}
              className={`w-full btn-primary ${
                (!width || !height || !material || isLoading) 
                  ? "opacity-50 cursor-not-allowed" 
                  : ""
              }`}
            >
              {isLoading ? "Sepete Ekleniyor..." : "Sepete Ekle"}
            </button>

            {/* Bilgi Notu */}
            <div className="text-sm text-gray-600 text-center">
              <p>• Oluşturulan ürünler 2 saat sonra otomatik olarak silinir</p>
              <p>• Fiyatlar tahmini olup, nihai fiyat sipariş sırasında doğrulanır</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
