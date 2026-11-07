import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

const initialHotels = [
  {
    id: 1,
    title: "Chennai Residency",
    location: "Chennai",
    distance: "0.5 km from Center",
    description: "Modern rooms with panoramic city views and historic charm.",
    price: 11200,
    rating: 4.8,
    amenities: ["Pool", "Free Wi-Fi", "Breakfast Included"],
    type: "Hotel",
    latitude: "48.8566",
    longitude: "2.3522",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
  },
  {
    id: 2,
    title: "Kovai Royal Suites",
    location: "Coimbatore",
    distance: "1.2 km from Center",
    description: "Elegant accommodation with modern facilities and peaceful surroundings.",
    price: 6500,
    rating: 4.5,
    amenities: ["Free Wi-Fi", "Restaurant", "Parking"],
    type: "Hotel",
    latitude: "11.0168",
    longitude: "76.9558",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900"
  },
  {
    id: 3,
    title: "Madurai Heritage Palace",
    location: "Madurai",
    distance: "0.8 km from Center",
    description: "Traditional hospitality with spacious rooms and comfortable interiors.",
    price: 4800,
    rating: 4.6,
    amenities: ["Restaurant", "Free Wi-Fi", "Breakfast Included"],
    type: "Hotel",
    latitude: "9.9252",
    longitude: "78.1198",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
  },
  {
    id: 4,
    title: "Nilgiri Hills Resort",
    location: "Ooty",
    distance: "2 km from Center",
    description: "Beautiful hill station resort surrounded by green mountains.",
    price: 8500,
    rating: 4.9,
    amenities: ["Mountain View", "Restaurant", "Free Wi-Fi"],
    type: "Resort",
    latitude: "11.4102",
    longitude: "76.6950",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900"
  },
  {
    id: 5,
    title: "Lake View Paradise",
    location: "Kodaikanal",
    distance: "0.7 km from Lake",
    description: "Relaxing stay with scenic lake views and premium accommodation.",
    price: 9200,
    rating: 4.7,
    amenities: ["Lake View", "Parking", "Restaurant"],
    type: "Resort",
    latitude: "10.2381",
    longitude: "77.4892",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900"
  },
  {
    id: 6,
    title: "Salem Grand Inn",
    location: "Salem",
    distance: "1 km from Center",
    description: "Affordable luxury hotel with modern rooms and excellent service.",
    price: 3500,
    rating: 4.4,
    amenities: ["Free Wi-Fi", "Parking", "Restaurant"],
    type: "Hotel",
    latitude: "11.6643",
    longitude: "78.1460",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900"
  },
  {
    id: 7,
    title: "Marina Blue Residency",
    location: "Chennai",
    distance: "1.5 km from Marina Beach",
    description: "Comfortable coastal accommodation with excellent city connectivity.",
    price: 7200,
    rating: 4.5,
    amenities: ["Sea View", "Free Wi-Fi", "Restaurant"],
    type: "Hotel",
    latitude: "13.0569",
    longitude: "80.2425",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
  },
  {
    id: 8,
    title: "Green Valley Retreat",
    location: "Yercaud",
    distance: "2 km from Lake",
    description: "Peaceful nature resort with beautiful valley surroundings.",
    price: 5500,
    rating: 4.7,
    amenities: ["Garden", "Mountain View", "Parking"],
    type: "Resort",
    latitude: "11.7753",
    longitude: "78.2090",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900"
  },
  {
    id: 9,
    title: "Trichy Comfort Suites",
    location: "Tiruchirappalli",
    distance: "1 km from Center",
    description: "Modern business hotel offering convenient facilities for travelers.",
    price: 4200,
    rating: 4.3,
    amenities: ["Free Wi-Fi", "Restaurant", "Parking"],
    type: "Hotel",
    latitude: "10.7905",
    longitude: "78.7047",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900"
  },
  {
    id: 10,
    title: "Temple City Residency",
    location: "Thanjavur",
    distance: "1.2 km from Temple",
    description: "Traditional hotel with comfortable accommodation and friendly service.",
    price: 3800,
    rating: 4.4,
    amenities: ["Restaurant", "Free Wi-Fi", "Parking"],
    type: "Hotel",
    latitude: "10.7870",
    longitude: "79.1378",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900"
  },
  {
    id: 11,
    title: "Coral Beach Resort",
    location: "Mahabalipuram",
    distance: "0.5 km from Beach",
    description: "Luxury beachside resort with relaxing outdoor spaces.",
    price: 10500,
    rating: 4.8,
    amenities: ["Swimming Pool", "Beach View", "Restaurant"],
    type: "Resort",
    latitude: "12.6208",
    longitude: "80.1930",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
  },
  {
    id: 12,
    title: "Royal Palm Suites",
    location: "Tirunelveli",
    distance: "1 km from Center",
    description: "Stylish hotel with spacious rooms and modern amenities.",
    price: 3200,
    rating: 4.2,
    amenities: ["Free Wi-Fi", "Parking", "Breakfast Included"],
    type: "Hotel",
    latitude: "8.7139",
    longitude: "77.7567",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900"
  },
  {
    id: 13,
    title: "Sunrise Coastal Resort",
    location: "Kanyakumari",
    distance: "0.8 km from Beach",
    description: "Scenic coastal accommodation with beautiful sunrise views.",
    price: 6800,
    rating: 4.6,
    amenities: ["Sea View", "Restaurant", "Free Wi-Fi"],
    type: "Resort",
    latitude: "8.0883",
    longitude: "77.5385",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
  },
  {
    id: 14,
    title: "Metro Comfort Hotel",
    location: "Erode",
    distance: "1.5 km from Center",
    description: "Budget-friendly hotel with comfortable rooms and convenient facilities.",
    price: 2800,
    rating: 4.1,
    amenities: ["Parking", "Free Wi-Fi", "Restaurant"],
    type: "Hotel",
    latitude: "11.3410",
    longitude: "77.7172",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
  },
  {
    id: 15,
    title: "Hilltop Luxury Stay",
    location: "Coonoor",
    distance: "1 km from Center",
    description: "Premium hill resort surrounded by tea plantations and nature.",
    price: 7800,
    rating: 4.8,
    amenities: ["Mountain View", "Garden", "Restaurant"],
    type: "Resort",
    latitude: "11.3530",
    longitude: "76.7959",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900"
  },
  {
    id: 16,
    title: "Golden Sands Residency",
    location: "Rameswaram",
    distance: "1 km from Temple",
    description: "Comfortable family accommodation near popular tourist attractions.",
    price: 4500,
    rating: 4.5,
    amenities: ["Free Wi-Fi", "Restaurant", "Parking"],
    type: "Hotel",
    latitude: "9.2881",
    longitude: "79.3129",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
  },
  {
    id: 17,
    title: "Pondy Paradise Inn",
    location: "Puducherry",
    distance: "0.6 km from Beach",
    description: "Boutique-style accommodation with beautiful interiors and modern comfort.",
    price: 6200,
    rating: 4.7,
    amenities: ["Swimming Pool", "Free Wi-Fi", "Breakfast Included"],
    type: "Hotel",
    latitude: "11.9416",
    longitude: "79.8083",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900"
  },
  {
    id: 18,
    title: "Dindigul Royal Stay",
    location: "Dindigul",
    distance: "1 km from Center",
    description: "Well-maintained hotel with spacious rooms and family-friendly services.",
    price: 3000,
    rating: 4.3,
    amenities: ["Restaurant", "Parking", "Free Wi-Fi"],
    type: "Hotel",
    latitude: "10.3673",
    longitude: "77.9803",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900"
  },
  {
    id: 19,
    title: "Velvet Crown Luxury Hotel",
    location: "Vellore",
    distance: "1.3 km from Center",
    description: "Luxury accommodation with elegant interiors and premium hospitality.",
    price: 5800,
    rating: 4.6,
    amenities: ["Swimming Pool", "Restaurant", "Free Wi-Fi"],
    type: "Hotel",
    latitude: "12.9165",
    longitude: "79.1325",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900"
  },
  {
    id: 20,
    title: "Nature Nest Resort",
    location: "Pollachi",
    distance: "2 km from Center",
    description: "Nature-inspired resort with green landscapes and peaceful surroundings.",
    price: 7500,
    rating: 4.8,
    amenities: ["Garden", "Swimming Pool", "Mountain View"],
    type: "Resort",
    latitude: "10.6583",
    longitude: "77.0085",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900"
  }
]

const emptyForm = {
  title: "",
  location: "",
  description: "",
  price: "",
  rating: "4.0",
  latitude: "",
  longitude: "",
  type: "Hotel",
  amenities: [],
  image: "",
};

const amenityOptions = [
  "Pool",
  "Free Wi-Fi",
  "Breakfast Included",
  "Restaurant",
  "24h Front Desk",
  "Pet Friendly",
  "Bar",
]

function HotelList() {
  const [hotels, setHotels] = useState(initialHotels);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("relevance");
  const [view, setView] = useState("list");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [popup, setPopup] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const perPage = 3;

  const filteredHotels = useMemo(() => { let result = hotels.filter((hotel) => {const matchesSearch = hotel.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesPrice = hotel.price >= minPrice && hotel.price <= maxPrice;

      const matchesRating = selectedRatings.length === 0 || selectedRatings.some((rating) => hotel.rating >= rating);

      const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every((item) => hotel.amenities.includes(item));

      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(hotel.type);

      return (
        matchesSearch && matchesPrice && matchesRating && matchesAmenities && matchesType
      )
    })

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "name") result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, 
  [
    hotels,
    search,
    minPrice,
    maxPrice,
    selectedRatings,
    selectedAmenities,
    selectedTypes,
    sort,
  ])

  const totalPages = Math.max(1, Math.ceil(filteredHotels.length / perPage));

  const currentHotels = filteredHotels.slice(
    (page - 1) * perPage,
    page * perPage
  )

  const formatPrice = (price) => "₹" + Number(price).toLocaleString("en-IN");

  const toggleArray = (array, value, setter) => {
    setter(
      array.includes(value) ? array.filter((item) => item !== value) : [...array, value]
    )
    setPage(1);
  }

  const clearFilters = () => {
    setSearch("");
    setMinPrice(1000);
    setMaxPrice(15000);
    setSelectedRatings([]);
    setSelectedAmenities([]);
    setSelectedTypes([]);
    setPage(1);
  }

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setPreview("");
    setShowForm(true);
  }

  const openEditForm = (hotel) => {
    setEditingId(hotel.id);
    setForm({
      ...hotel,
      price: String(hotel.price),
      rating: String(hotel.rating),
    })
    setPreview(hotel.image);
    setShowForm(true);
  }

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type)) {
      alert("Please select a JPG, PNG or WEBP image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setForm((previous) => ({ ...previous, image: reader.result }))
    }
    reader.readAsDataURL(file);
  }

  const handleAmenity = (amenity) => {setForm((previous) => ({
      ...previous,
      amenities: previous.amenities.includes(amenity) ? previous.amenities.filter((item) => item !== amenity) : [...previous.amenities, amenity],
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.description.trim() || !form.location.trim() || !form.price || !form.latitude || !form.longitude) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!form.image) {
      alert("Please upload a hotel image.");
      return;
    }

    if (Number(form.price) <= 0) {
      alert("Please enter a valid hotel price.");
      return;
    }

    const hotelData = {
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
      distance: "Location coordinates available",
      image: form.image,
    };

    if (editingId !== null) {
      setHotels((previous) => previous.map((hotel) => hotel.id === editingId ? { ...hotelData, id: editingId } : hotel
        )
      );
      setPopup("Hotel updated successfully!");
    } 
    else {
      setHotels((previous) => [
        { ...hotelData, id: Date.now() },
        ...previous,
      ]);
      setPopup("Hotel added successfully!");
    }

    setShowForm(false);
    setEditingId(null);
    setPage(1);
  }

  const deleteHotel = (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      setHotels((previous) => previous.filter((hotel) => hotel.id !== id));
      setFavoriteIds((previous) => previous.filter((item) => item !== id));
      setPopup("Hotel deleted successfully!");
      setSelectedHotel(null);
      setPage(1);
    }
  }

  const toggleFavorite = (id) => {
    setFavoriteIds((previous) => previous.includes(id) ? previous.filter((item) => 
      item !== id) : [...previous, id]
    )
  }

  const closePopup = () => setPopup("");

  return (
    <div className="stayora-app">

{/* React Helmet*/}
    <>
      <Helmet>
        <title>STAYORA</title>

        <meta
          name="description"
          content="Discover comfortable hotels and book your perfect stay"
        />
      </Helmet>
    </>

{/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">🛏</span>
          <span>STAYORA</span>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={() => {
            setSelectedHotel(null);
            setShowForm(false);
          }}>
            <span>⌂</span> Hotels
          </button>

          <button className="nav-item" onClick={openAddForm}>
            <span>＋</span> Add Hotel
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">CONTACT US</div>
          <div className="sidebar-footer">@vidhyathiyagarajan327</div>
        </div>
      </aside>

{/* MAIN AREA */}
      <main className="main-content">

{/* TOP BAR */}
        <header className="topbar">
          <div className="top-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search hotels..."
              value={search}
              onChange={(e) => { setSearch(e.target.value);
                setPage(1);
                setSelectedHotel(null);
              }}
            />
            {search && ( <button onClick={() => setSearch("")}>✕</button>)}
          </div>

          <div className="top-actions">
            <span className="notification">♡</span>
            <div className="login">V</div>
          </div>
        </header>

{/* HOTEL LIST */}
        <section className="content-area">

          <div className="heading-row">
            <div>
              <h1>
                {filteredHotels.length} Hotels Found in Tamilnadu, India
              </h1>
              <p className="sub-heading">
                Find your perfect stay with STAYORA.
              </p>
            </div>

            <button className="add-button" onClick={openAddForm}>
              ＋ Add Hotel
            </button>
          </div>

 {/* FILTER + RESULTS */}
          <div className="listing-layout">

{/* FILTER SIDEBAR */}
            {showFilters && (
              <aside className="filter-panel">
                <div className="filter-heading">
                  <h2>Filter Hotels</h2>
                </div>

                <div className="filter-section">
                  <h3>Price Range</h3>

                <div className="price-values">
                    <span>{formatPrice(minPrice)}</span>
                    <span>{formatPrice(maxPrice)}</span>
                </div>

                  <label className="range-label">Minimum Price</label>
                  <input
                    className="range-input"
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={minPrice}
                    onChange={(e) => {setMinPrice(Math.min(Number(e.target.value), maxPrice));
                      setPage(1);
                    }}
                  />

                  <label className="range-label">Maximum Price</label>
                  <input
                    className="range-input"
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={maxPrice}
                    onChange={(e) => {setMaxPrice(Math.max(Number(e.target.value), minPrice));
                      setPage(1);
                    }}
                  />
                </div>

                <div className="filter-section">
                  <h3>Star Rating</h3>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label className="filter-option" key={rating}>
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleArray(selectedRatings, rating, setSelectedRatings)
                        }
                      />
                      <span className="stars">
                        {"★".repeat(rating)}
                        <span className="empty-stars">
                          {"★".repeat(5 - rating)}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>

                <div className="filter-section">
                  <h3>Amenities</h3>
                  {amenityOptions.map((amenity) => (<label className="filter-option" key={amenity}>
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleArray(
                            selectedAmenities,
                            amenity,
                            setSelectedAmenities
                          )
                        }
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>

                <div className="filter-section">
                  <h3>Property Type</h3>
                  {["Hotel", "Restaurant"].map((type) => (<label className="filter-option" key={type}>
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleArray(selectedTypes, type, setSelectedTypes)
                        }
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                <button className="clear-button" onClick={clearFilters}>
                  Clear Filters
                </button>
              </aside>
            )}

{/* HOTEL RESULTS */}
            <section className="results-area">

              <div className="results-toolbar">
                <button
                  className="filter-toggle"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  ☷ Filters
                </button>

                <div className="sort-controls">
                  <label>Sorted by:</label>
                  <select
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="relevance">Relevance</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="name">Name</option>
                  </select>

                  <label>View:</label>
                  <button
                    className={view === "grid" ? "view-button selected" : "view-button"}
                    onClick={() => setView("grid")}
                    title="Grid view"
                  >▦</button>
                  <button
                    className={view === "list" ? "view-button selected" : "view-button"}
                    onClick={() => setView("list")}
                    title="List view"
                  >☷</button>
                </div>
              </div>

              {currentHotels.length > 0 ? (
                <div className={view === "grid" ? "hotel-grid" : "hotel-list"}>
                  {currentHotels.map((hotel) => (<article className="hotel-card" key={hotel.id}>
                      <div className="hotel-image-wrap">
                        <img
                          src={hotel.image}
                          alt={hotel.title}
                          className="hotel-image"
                          onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400?text=Hotel";
                          }}
                        />

                        <button
                          className={
                            favoriteIds.includes(hotel.id) ? "favorite-button favorited" : "favorite-button"
                          }
                          onClick={() => toggleFavorite(hotel.id)}
                          title="Add to favourites"
                        >
                          {favoriteIds.includes(hotel.id) ? "♥" : "♡"}
                        </button>
                      </div>

                      <div className="hotel-info">
                        <div className="hotel-title-row">
                          <h2>{hotel.title}</h2>
                          <span className="rating">★ {hotel.rating}</span>
                        </div>

                        <p className="hotel-location">
                          <span>⌖</span> {hotel.location}
                          <span className="location-separator">|</span>
                          {hotel.distance}
                        </p>

                        <p className="hotel-description">
                          {hotel.description}
                        </p>

                        <div className="amenity-tags">
                          {hotel.amenities.slice(0, 3).map((item) => (<span className="amenity-tag" key={item}>
                              {item === "Pool" ? "♨" :
                               item === "Free Wi-Fi" ? "⌁" :
                               item === "Restaurant" ? "♜" : "✦"} {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hotel-actions">
                        <button
                          className="details-button"
                          onClick={() => setSelectedHotel(hotel)}>
                          View Details
                        </button>

                        <div className="hotel-price">
                          <strong>{formatPrice(hotel.price)}</strong>
                          <span>/ night</span>
                        </div>

                        <div className="crud-buttons">
                          <button className="edit-button" onClick={() => openEditForm(hotel)}>
                            Edit
                          </button>

                          <button className="delete-button" onClick={() => deleteHotel(hotel.id)}>
                            Delete
                          </button>
                        </div>
                      </div>

                    </article>
                  ))}
                </div>
              ) : (<div className="empty-state">
                  <span>🏨</span>
                  <h2>No hotels found</h2>
                  <p>Try changing your search or filter options.</p>
                  <button className="clear-button" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              )}

              {/* PAGINATION */}
              {filteredHotels.length > 0 && (
                <div className="pagination">
                  <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    ‹
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (number) => (
                      <button
                        key={number}
                        className={page === number ? "page-active" : ""}
                        onClick={() => setPage(number)}
                      >
                        {number}
                      </button>
                    )
                  )}

                  <button disabled={page === totalPages} onClick={() => setPage(page + 1)} >
                    ›
                  </button>
                </div>
              )}

            </section>
          </div>
        </section>
      </main>

{/* ADD / EDIT MODAL */}
      {showForm && (
        <div className="modal-overlay">
          <div className="hotel-modal">
            <div className="modal-header">
              <div>
                <h2>{editingId ? "Edit Hotel" : "Add New Hotel"}</h2>
                <p>Enter the hotel information below.</p>
              </div>
              <button className="edit-close" onClick={() => setShowForm(false)}>✕</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">

                <div className="form-field full-width">
                  <label>Hotel Image *</label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImage}
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Hotel preview"
                      className="image-preview"/>
                  )}
                  <small>JPG, PNG or WEBP. Maximum 5MB.</small>
                </div>

                <div className="form-field">
                  <label>Hotel Name *</label>
                  <input
                    required
                    value={form.title}
                    placeholder="Enter hotel name"
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Location *</label>
                  <input
                    required
                    value={form.location}
                    placeholder="Enter hotel location"
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                  />
                </div>

                <div className="form-field full-width">
                  <label>Description *</label>
                  <textarea
                    required
                    rows="3"
                    value={form.description}
                    placeholder="Describe the hotel..."
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Latitude *</label>
                  <input
                    required
                    type="number"
                    step="any"
                    value={form.latitude}
                    placeholder="e.g. 48.8566"
                    onChange={(e) =>
                      setForm({ ...form, latitude: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Longitude *</label>
                  <input
                    required
                    type="number"
                    step="any"
                    value={form.longitude}
                    placeholder="e.g. 2.3522"
                    onChange={(e) =>
                      setForm({ ...form, longitude: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Price per Night (₹) *</label>
                  <input
                    required
                    type="number"
                    min="1"
                    value={form.price}
                    placeholder="Enter price"
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>

                <div className="form-field">
                  <label>Star Rating</label>
                  <select
                    value={form.rating}
                    onChange={(e) =>
                      setForm({ ...form, rating: e.target.value })
                    }
                  >
                    <option value="5">5 Stars</option>
                    <option value="4.5">4.5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3.5">3.5 Stars</option>
                    <option value="3">3 Stars</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label>Property Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}>
                    <option value="Hotel">Hotel</option>
                    <option value="Restaurant">Restaurant</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label>Amenities</label>
                  <div className="form-amenities">
                    {amenityOptions.map((item) => (<label key={item}>
                        <input
                          type="checkbox"
                          checked={form.amenities.includes(item)}
                          onChange={() => handleAmenity(item)}/>
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-button">
                  {editingId ? "Update Hotel" : "Save Hotel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

{/* HOTEL DETAILS MODAL */}
      {selectedHotel && (
        <div className="modal-overlay">
          <div className="details-modal">
            <button
              className="details-close"
              onClick={() => setSelectedHotel(null)}>
              ✕
            </button>

            <img
              src={selectedHotel.image}
              alt={selectedHotel.title}
              className="details-image"
            />

            <div className="details-content">
              <h2>{selectedHotel.title}</h2>
              <p className="hotel-location">{selectedHotel.location}</p>
              <div className="details-rating">
                ★ {selectedHotel.rating} / 5
              </div>
              <h3>{formatPrice(selectedHotel.price)} / night</h3>
              <p>{selectedHotel.description}</p>

              <h4>Amenities</h4>
              <div className="amenity-tags">
                {selectedHotel.amenities.map((item) => (<span className="amenity-tag" key={item}>{item}</span>
                ))}
              </div>

              <h4>Location Coordinates</h4>
              <p>
                Latitude: {selectedHotel.latitude}<br />
                Longitude: {selectedHotel.longitude}
              </p>

              <a
                className="map-link"
                href={`https://www.google.com/maps?q=${selectedHotel.latitude},${selectedHotel.longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                View Location on Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      )}

{/* SUCCESS POPUP */}
      {popup && (
        <div className="modal-overlay popup-overlay">
          <div className="success-popup">
            <div className="success-icon">✓</div>
            <h2>Success!</h2>
            <p>{popup}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
 </div>
  );
}

export default HotelList;