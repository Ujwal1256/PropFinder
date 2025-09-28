export const mockProperties = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    description: 'Stunning modern loft in the heart of downtown with floor-to-ceiling windows, exposed brick walls, and premium finishes throughout.',
    price: 750000,
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: {
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    amenities: ['Gym', 'Rooftop Terrace', 'Concierge', 'In-unit Laundry', 'Parking'],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    virtualTour: 'https://example.com/virtual-tour-1',
    agent: {
      id: 'agent1',
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah@realestate.com',
      photo: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: true,
    listedDate: '2024-01-15',
    updatedDate: '2024-01-20'
  },
  {
    id: '2',
    title: 'Luxury Suburban Villa',
    description: 'Elegant 4-bedroom villa with private pool, landscaped garden, and premium amenities in an exclusive gated community.',
    price: 1250000,
    type: 'house',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: {
      address: '456 Oak Avenue',
      city: 'Palo Alto',
      state: 'CA',
      zipCode: '94301',
      coordinates: { lat: 37.4419, lng: -122.1430 }
    },
    amenities: ['Swimming Pool', 'Garden', 'Garage', 'Security System', 'Home Theater'],
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent2',
      name: 'Michael Chen',
      phone: '(555) 987-6543',
      email: 'michael@realestate.com',
      photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: true,
    listedDate: '2024-01-10',
    updatedDate: '2024-01-18'
  },
  {
    id: '3',
    title: 'Cozy Studio Apartment',
    description: 'Charming studio apartment perfect for young professionals, featuring modern appliances and a great location near public transit.',
    price: 2800,
    type: 'apartment',
    status: 'for-rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    location: {
      address: '789 Pine Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94108',
      coordinates: { lat: 37.7849, lng: -122.4094 }
    },
    amenities: ['Air Conditioning', 'Hardwood Floors', 'Near Transit'],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent3',
      name: 'Emma Davis',
      phone: '(555) 456-7890',
      email: 'emma@realestate.com',
      photo: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: false,
    listedDate: '2024-01-12',
    updatedDate: '2024-01-22'
  },
  {
    id: '4',
    title: 'Commercial Office Space',
    description: 'Prime commercial office space in business district with modern amenities, conference rooms, and excellent visibility.',
    price: 8500,
    type: 'office',
    status: 'for-rent',
    bedrooms: 0,
    bathrooms: 2,
    area: 2000,
    location: {
      address: '321 Business Blvd',
      city: 'San Jose',
      state: 'CA',
      zipCode: '95110',
      coordinates: { lat: 37.3382, lng: -121.8863 }
    },
    amenities: ['Conference Rooms', 'High-speed Internet', 'Parking', 'Reception Area', 'Kitchen'],
    images: [
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1170408/pexels-photo-1170408.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent4',
      name: 'David Rodriguez',
      phone: '(555) 321-0987',
      email: 'david@realestate.com',
      photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: false,
    listedDate: '2024-01-08',
    updatedDate: '2024-01-20'
  },
  {
    id: '5',
    title: 'Waterfront Penthouse',
    description: 'Spectacular penthouse with panoramic water views, private terrace, and luxury finishes throughout. A true masterpiece.',
    price: 2500000,
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    location: {
      address: '555 Waterfront Drive',
      city: 'Sausalito',
      state: 'CA',
      zipCode: '94965',
      coordinates: { lat: 37.8590, lng: -122.4852 }
    },
    amenities: ['Private Terrace', 'Water Views', 'Concierge', 'Valet Parking', 'Wine Storage', 'Spa'],
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent1',
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah@realestate.com',
      photo: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: true,
    listedDate: '2024-01-05',
    updatedDate: '2024-01-25'
  },
  {
    id: '6',
    title: 'Family Home with Garden',
    description: 'Perfect family home with spacious rooms, beautiful garden, and quiet neighborhood setting. Move-in ready with recent updates.',
    price: 850000,
    type: 'house',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    location: {
      address: '888 Maple Lane',
      city: 'Mountain View',
      state: 'CA',
      zipCode: '94041',
      coordinates: { lat: 37.3861, lng: -122.0839 }
    },
    amenities: ['Garden', 'Garage', 'Updated Kitchen', 'Fireplace', 'Deck'],
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent2',
      name: 'Michael Chen',
      phone: '(555) 987-6543',
      email: 'michael@realestate.com',
      photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: false,
    listedDate: '2024-01-14',
    updatedDate: '2024-01-21'
  },

  // ------- ADDITIONAL PROPERTIES (7 to 20) ----------
  {
    id: '7',
    title: 'Mountain Cabin Retreat',
    description: 'Cozy wooden cabin with stunning mountain views, fireplace, and nearby hiking trails.',
    price: 450000,
    type: 'house',
    status: 'for-sale',
    bedrooms: 2,
    bathrooms: 1,
    area: 1000,
    location: {
      address: '12 Alpine Road',
      city: 'Lake Tahoe',
      state: 'CA',
      zipCode: '96150',
      coordinates: { lat: 38.9399, lng: -119.9772 }
    },
    amenities: ['Fireplace', 'Deck', 'Mountain View'],
    images: [
      'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent5',
      name: 'Sophia Martinez',
      phone: '(555) 222-1111',
      email: 'sophia@realestate.com',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: false,
    listedDate: '2024-02-01',
    updatedDate: '2024-02-03'
  },
  {
    id: '8',
    title: 'City Center Condo',
    description: 'Modern condo in city center close to shopping, restaurants, and entertainment.',
    price: 560000,
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    location: {
      address: '22 Market Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      coordinates: { lat: 37.7740, lng: -122.4312 }
    },
    amenities: ['Gym', 'Pool', 'Concierge'],
    images: [
      'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent6',
      name: 'Olivia Brown',
      phone: '(555) 555-1234',
      email: 'olivia@realestate.com',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: true,
    listedDate: '2024-02-04',
    updatedDate: '2024-02-07'
  },
  {
    id: '9',
    title: 'Beachfront Bungalow',
    description: 'Beautiful beachfront bungalow with direct ocean access and tropical vibes.',
    price: 950000,
    type: 'house',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    location: {
      address: '45 Ocean Drive',
      city: 'Santa Cruz',
      state: 'CA',
      zipCode: '95060',
      coordinates: { lat: 36.9741, lng: -122.0308 }
    },
    amenities: ['Ocean View', 'Deck', 'Private Beach'],
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent7',
      name: 'James Wilson',
      phone: '(555) 999-8888',
      email: 'james@realestate.com',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: true,
    listedDate: '2024-02-10',
    updatedDate: '2024-02-15'
  },
  {
    id: '10',
    title: 'Downtown Office Tower',
    description: 'Spacious office units in a landmark downtown building with conference facilities and parking.',
    price: 15000,
    type: 'office',
    status: 'for-rent',
    bedrooms: 0,
    bathrooms: 4,
    area: 5000,
    location: {
      address: '99 Financial District',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94111',
      coordinates: { lat: 37.7936, lng: -122.3965 }
    },
    amenities: ['Conference Rooms', 'Security', 'Parking'],
    images: [
      'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    agent: {
      id: 'agent8',
      name: 'Daniel Lee',
      phone: '(555) 654-3210',
      email: 'daniel@realestate.com',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    featured: false,
    listedDate: '2024-02-12',
    updatedDate: '2024-02-14'
  },

 
];
