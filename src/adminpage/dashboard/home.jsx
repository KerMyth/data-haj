import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "./modal";

const hotel = {
  mekkah: {
    "AKABER AL HIJRAH": {
      D: 537500,
      T: 415667,
      Q: 365500,
    },
    "SNOOD AJYAD": {
      D: 903000,
      T: 659333,
      Q: 537500,
    },
    "GRAND AL MASSA": {
      D: 1053500,
      T: 774000,
      Q: 634250,
    },
    "RAYYANA AJYAD": {
      D: 1419000,
      T: 960333,
      Q: 827750,
    },
  },
  madinah: {
    "SAMA AL MASI": {
      D: 838500,
      T: 616333,
      Q: 505250,
    },
    "JAWHARAT RASHEED": {
      D: 774000,
      T: 573333,
      Q: 473000,
    },
    "HAYAH PLAZA": {
      D: 817000,
      T: 602000,
      Q: 494500,
    },
    "AL MADINAH CONCORDE": {
      D: 913750,
      T: 673667,
      Q: 553625,
    },
    "RUA INTERNATIONAL": {
      D: 924500,
      T: 680833,
      Q: 559000,
    },
  },
};

// Pemetaan deskripsi
const detailDescriptions = {
  D: "Deluxe",
  T: "Two",
  Q: "Quad",
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [detailKey, setDetailKey] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const [detailValue, setDetailValue] = useState(null);

  // Handle category change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedItem("");
    setItemOptions(category ? Object.entries(hotel[category]) : []);
    setDetailKey("");
    setDetailValue(null);
    setDetailDescription("");
  };

  // Handle item change
  const handleItemChange = (event) => {
    const item = event.target.value;
    setSelectedItem(item);
    setDetailKey("");
    setDetailValue(null);
    setDetailDescription("");

    if (item && selectedCategory) {
      const itemDetails = hotel[selectedCategory][item];
      setDetailValue(itemDetails);
    }
  };

  // Handle detail key change
  const handleDetailChange = (event) => {
    const key = event.target.value;
    setDetailKey(key);
    setDetailDescription(detailDescriptions[key]);
  };

  useEffect(() => {
    if (departureDate && numberOfDays) {
      const departure = new Date(departureDate);
      const returnDateCalculated = new Date(departure);
      returnDateCalculated.setDate(
        departure.getDate() + parseInt(numberOfDays, 10)
      );
      setReturnDate(returnDateCalculated.toISOString().split("T")[0]);
    } else {
      setReturnDate("");
    }
  }, [departureDate, numberOfDays]);

  return (
    <div className="flex py-2 px-2">
      <button
        className="flex gap-2 items-center justify-center py-2 px-4 font-semibold shadow-md rounded-lg text-white bg-green-500 shadow-green-400/40"
        onClick={() => setOpen(true)}
      >
        <IoMdAdd /> Tambah Data
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-10 max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-lg font-semibold mb-2"
            >
              Select Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">--Select a category--</option>
              {Object.keys(hotel).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <div className="mb-4">
              <label
                htmlFor="item"
                className="block text-lg font-semibold mb-2"
              >
                Select Item
              </label>
              <select
                id="item"
                value={selectedItem}
                onChange={handleItemChange}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">--Select an item--</option>
                {itemOptions.map(([item]) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}

          {detailValue && (
            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-lg font-semibold mb-2"
              >
                Item Details
              </label>
              <select
                id="details"
                value={detailKey}
                onChange={handleDetailChange}
                className=" border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm"
              >
                <option value="">--Select Detail--</option>
                {Object.keys(detailValue).map((key) => (
                  <option key={key} value={key}>
                    {detailDescriptions[key]}
                  </option>
                ))}
              </select>
            </div>
          )}

          {detailKey && (
            <div className="mb-4">
              <label
                htmlFor="detailValue"
                className="block text-lg font-semibold mb-2"
              >
                Detail Value
              </label>
              <input
                type="text"
                id="detailValue"
                value={detailValue[detailKey]}
                readOnly
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="departureDate"
              className="block text-lg font-semibold mb-2"
            >
              Masukkan Tanggal Berangkat
            </label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="numberOfDays"
              className="block text-lg font-semibold mb-2"
            >
              Masukkan Hari
            </label>
            <input
              type="number"
              id="numberOfDays"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="returnDate"
              className="block text-lg font-semibold mb-2"
            >
              Tanggal Pulang
            </label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              readOnly
              className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
