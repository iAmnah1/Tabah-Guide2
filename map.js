// Initialize the main map
function initMainMap() {
    const map = L.map('map').setView([24.467, 39.611], 13); // مركز الخريطة (المدينة المنورة)

    // إضافة الطبقة الأساسية من OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // إضافة المعالم السياحية كـ Markers
    const landmarks = [
        {
            name: "Masjid Al-Nabawi",
            lat: 24.467,
            lng: 39.611,
            description: "The Prophet's Mosque is one of the holiest sites in Islam."
        },
        {
            name: "Quba Mosque",
            lat: 24.437,
            lng: 39.630,
            description: "The Quba Mosque is the first mosque built by Prophet Muhammad (PBUH)."
        },
        {
            name: "Uhud Mountain",
            lat: 24.504,
            lng: 39.569,
            description: "The Uhud Mountain is historically significant for the Battle of Uhud."
        }
    ];

    // إضافة كل نقطة كعلامة على الخريطة
    landmarks.forEach(landmark => {
        const marker = L.marker([landmark.lat, landmark.lng]).addTo(map);
        marker.bindPopup(`<b>${landmark.name}</b><br>${landmark.description}`).openPopup();
    });
}

// Initialize the small map for landmarks (e.g., landmark-details.html)
function initLandmarkMap(lat, lng, name, description) {
    const map = L.map('map').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${name}</b><br>${description}`)
        .openPopup();
}