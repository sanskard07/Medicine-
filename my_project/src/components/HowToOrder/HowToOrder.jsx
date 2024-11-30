import React, { useState } from "react";

const HowToOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to trigger the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        How to Order
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-3xl rounded-lg shadow-lg p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-center text-xl font-bold mb-6">
              You Can Order Medicine in 3 Easy Ways
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Order Online */}
              <div className="text-center">
                <div className="text-red-500 text-4xl mb-4">🌐</div>
                <h3 className="font-semibold text-lg">Order Online</h3>
                <ol className="text-gray-700 text-sm mt-2 text-left">
                  <li>1. Search your medicine</li>
                  <li>2. Add to cart</li>
                  <li>3. Place order</li>
                  <li>4. Free doctor consultation</li>
                  <li>5. Delivery at your doorstep</li>
                </ol>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Search
                </button>
              </div>

              {/* Order on Call */}
              <div className="text-center">
                <div className="text-red-500 text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-lg">Order on Call</h3>
                <ol className="text-gray-700 text-sm mt-2 text-left">
                  <li>1. Call our support team</li>
                  <li>2. Get estimate and approve order</li>
                  <li>3. Free doctor consultation</li>
                  <li>4. Delivery at your doorstep</li>
                </ol>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Call Us
                </button>
              </div>

              {/* Upload Prescription */}
              <div className="text-center">
                <div className="text-red-500 text-4xl mb-4">📄</div>
                <h3 className="font-semibold text-lg">Upload Prescription</h3>
                <ol className="text-gray-700 text-sm mt-2 text-left">
                  <li>1. Upload prescription</li>
                  <li>2. Place the order</li>
                  <li>3. Estimation & approval on call</li>
                  <li>4. Free doctor consultation</li>
                  <li>5. Delivery at your doorstep</li>
                </ol>
                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Upload RX
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowToOrder;
