import React from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import { logger } from "../utils/logger";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  // Mağaza bilgilerini al
  const shop = await admin.rest.get({ path: "shop" });
  
  // Test log kaydı eklee
  const shopData = await shop.json();
  logger.info("Ana sayfa ziyaret edildi", { 
    shopName: shopData.shop.name,
    timestamp: new Date().toISOString()
  }, "app._index");
  
  return json({
    shop: shopData.shop,
  });
};

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Dinamik Fiyat Hesaplayıcı
          </h1>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Hoş geldiniz, <strong>{shop.name}</strong>!
            </p>
            <p className="text-gray-500 mt-2">
              Bu uygulama ile ürünleriniz için dinamik fiyat hesaplayabilir ve 
              geçici ürünler oluşturabilirsiniz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Uygulama Özellikleri */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                🚀 Uygulama Özellikleri
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Dinamik boyut bazlı fiyat hesaplama</li>
                <li>• Materyal seçimi ve fiyatlandırma</li>
                <li>• Otomatik geçici ürün oluşturma</li>
                <li>• 2 saat sonra otomatik temizlik</li>
                <li>• Tema entegrasyonu</li>
              </ul>
            </div>

            {/* Kurulum Adımları */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                📋 Kurulum Adımları
              </h3>
              <ol className="space-y-2 text-green-800 list-decimal list-inside">
                <li>Tema düzenleyicisini açın</li>
                <li>Ürün şablonuna uygulama bloğu ekleyin</li>
                <li>Mevcut varyant seçiciyi gizleyin</li>
                <li>Uygulamayı test edin</li>
              </ol>
            </div>
          </div>

          {/* Hızlı Başlangıç */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">
              ⚡ Hızlı Başlangıç
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-800 font-bold">1</span>
                </div>
                <p className="text-yellow-800">Tema düzenleyicisini açın</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-800 font-bold">2</span>
                </div>
                <p className="text-yellow-800">Uygulama bloğunu ekleyin</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-800 font-bold">3</span>
                </div>
                <p className="text-yellow-800">Test edin ve kullanın</p>
              </div>
            </div>
          </div>

          {/* Yönetim Araçları */}
          <div className="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">
              🛠️ Yönetim Araçları
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="/app/logs"
                className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                📊 Sistem Logları
              </a>
              <a
                href="/api/cleanup"
                className="bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center"
              >
                🧹 Manuel Temizlik
              </a>
            </div>
          </div>

          {/* Destek Bilgileri */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Herhangi bir sorun yaşarsanız, lütfen destek ekibimizle iletişime geçin.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Uygulama versiyonu: 1.0.0 | Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
