'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import SunshineTonicPopup from './SunshineTonicPopup'

interface Product {
  id: number;
  name: string;
  description: string;
  image: {
    url: string;
    type: 'image' | 'pdf';
  };
  images: Array<{
    url: string;
    type: 'image' | 'pdf';
  }>;
  tags: string[];
  materials: string[];
  customizationOptions: string[];
  price: string;
  events: string[];
  collaborations: string[];
  overview: string;
  scopeAndRole: string[];
  projectImpact: string[];
  results?: string;
  showInAll?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sunshine Tonic Visual Catalog – Brand Storytelling Through Design",
    description: "A digital visual catalog capturing the brand's vibrant personality through art direction and design",
    image: { url: "/images/sunshine-tonic/catalog/catalog thumbnail.png", type: "image" as const },
    images: [
      { url: "/pdf/sunshine-tonic/Sunshine Tonic Visual Catalog_final_compressed.pdf", type: "pdf" as const }
    ],
    tags: ["Branding", "Visual Design", "Catalog Design"],
    materials: ["Digital Design", "Photography", "Brand Guidelines"],
    customizationOptions: ["Custom layouts", "Brand-specific styling", "Interactive elements"],
    price: "N/A",
    events: ["Featured in P-land Vol 3 Art Market"],
    collaborations: ["Collaboration with Local Beach Resort"],
    overview: "I led the art direction, layout design, and product styling for Sunshine Tonic's first digital visual catalog, designed to capture the brand's vibrant personality. The goal was to create a catalog that didn't just showcase our handmade accessories—but also told a story full of color, joy, and youthful energy.\n\nEach spread reflects Sunshine Tonic's identity through a bold and bright color palette, curated product sets, and playful visuals that mirror the brand's world. This catalog became a key asset in presenting the brand professionally to potential partners, event organizers, and interested customers.",
    scopeAndRole: [
      "✅ Directed the visual tone and layout to embody Sunshine Tonic's brand identity",
      "✅ Styled and photographed the accessories to highlight their unique and colorful details",
      "✅ Designed the layout using bold hues, dynamic compositions, and brand-aligned typography",
      "✅ Built for digital sharing, with flexibility for future print use"
    ],
    projectImpact: [
      "✅ Strengthened brand presence with a visually cohesive presentation tool",
      "✅ Used to pitch and land partnerships, workshops, and pop-up opportunities",
      "✅ Received positive feedback for its bold visual appeal and on-brand storytelling"
    ],
    showInAll: true
  },
  {
    id: 2,
    name: "Sunshine Tonic x Bookclan x Patjar Merah – Lace Bead Bookmark Workshop",
    description: "A collaborative workshop series teaching the art of creating lace bead bookmarks",
    image: { url: "/images/sunshine-tonic/workshop/thumbnail-all the participants.jpg", type: "image" as const },
    images: [
      { url: "/images/sunshine-tonic/workshop/intro duction with bookclan.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/workshop kits.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG20250118154936.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG20250118162027.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG20250118162043.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG-20250119-WA0154.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG-20250119-WA0163.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/IMG-20250119-WA0171.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/nae and her booth.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/a bookclan member with his bookmark.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/workshop/best design and story with bookclan representitive.jpg", type: "image" as const }
    ],
    tags: ["Workshop", "Collaboration", "Handmade"],
    materials: ["Czech glass beads", "Silk thread", "Lace materials"],
    customizationOptions: ["Bead color selection", "Pattern variations", "Custom lengths"],
    price: "Workshop Fee: $25",
    events: ["Hosted at Patjar Merah", "Bookclan Community Event"],
    collaborations: ["Partnership with Bookclan", "Venue by Patjar Merah"],
    overview: "I led a series of collaborative workshops with Bookclan and Patjar Merah, teaching participants how to create their own lace bead bookmarks. The workshops combined traditional beading techniques with modern design elements, creating a unique crafting experience for book lovers.",
    scopeAndRole: [
      "✅ Designed and developed the workshop curriculum and materials",
      "✅ Created step-by-step instructions and visual guides",
      "✅ Sourced and prepared all necessary materials",
      "✅ Led interactive sessions with hands-on guidance",
      "✅ Managed workshop logistics and participant engagement"
    ],
    projectImpact: [
      "✅ Successfully hosted multiple sold-out workshops",
      "✅ Built a community of craft enthusiasts",
      "✅ Strengthened brand partnerships",
      "✅ Received positive feedback for workshop content and execution",
      "✅ Created a foundation for future collaborative workshops"
    ],
    results: "The workshop series was well-received, with participants creating beautiful bookmarks and expressing interest in future sessions. The collaboration strengthened our relationship with Bookclan and Patjar Merah, leading to additional partnership opportunities.",
    showInAll: true
  },
  {
    id: 3,
    name: "Sunshine Tonic at P-Land Vol. 3 – TMII (Taman Mini Indonesia Indah)",
    description: "A K-pop themed art market debut at TMII, Jakarta",
    image: { url: "/images/sunshine-tonic/p-land/thumbnail and first picture.jpg", type: "image" as const },
    images: [
      { url: "/images/sunshine-tonic/p-land/thumbnail and first picture.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240622120254.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240622142121.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240622145212.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240623122813.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240623165358.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/p-land/IMG20240623150157 (1).jpg", type: "image" as const }
    ],
    tags: ["Art Market", "K-pop", "Retail"],
    materials: ["Handmade Accessories", "Display Materials", "Branding Elements"],
    customizationOptions: ["On-site customization", "Special event pricing", "Limited edition items"],
    price: "Various Price Points",
    events: ["P-Land Vol. 3 Art Market"],
    collaborations: ["Peanutopia Partnership"],
    overview: "Role: Booth Owner, Designer, Seller\nEvent Type: K-pop Themed Art Market\nLocation: TMII, Jakarta\nOrganizer: Peanutopia\nDate: 22–23 June 2024",
    scopeAndRole: [
      "✅ Debuted Sunshine Tonic in an offline art market setting through P-LAND Vol. 3, a K-pop themed market organized by Peanutopia, featuring curated merchandise and activities celebrating fan artist culture",
      "✅ Launched K-pop inspired product lines specifically designed for the event, tailored to resonate with the community's aesthetics and interests",
      "✅ Showcased and sold handmade bead accessories among other themed pieces, aligning the booth with Sunshine Tonic's bold, playful identity while catering to a niche audience",
      "✅ Engaged directly with 21 customers, receiving valuable feedback and building new customer connections",
      "✅ Collaborated with P-LAND's official Instagram catalog, creating a post that reached 4,946 accounts, garnering 134 likes, 29 shares, 27 saves, and 59 profile visits, helping boost brand awareness",
      "✅ Participated in a vibrant, high-energy event that emphasized community, fandom, and creative entrepreneurship"
    ],
    projectImpact: [
      "✅ Successfully launched in the offline market space",
      "✅ Built connections with 21 new customers",
      "✅ Generated significant social media engagement",
      "✅ Established presence in the K-pop fan community",
      "✅ Created a foundation for future market participation"
    ],
    results: "💡 A milestone moment—marking Sunshine Tonic's first-ever offline market appearance, combining fandom culture with handmade charm."
  },
  {
    id: 4,
    name: "Sunshine Tonic at Local Label Market – Mbloc",
    description: "A showcase at Jakarta's premier local brand market",
    image: { url: "/images/sunshine-tonic/local-label/thumbnail and first pic.jpg", type: "image" as const },
    images: [
      { url: "/images/sunshine-tonic/local-label/thumbnail and first pic.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241109100543.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241109132502.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241109135006.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241109195440.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241110113902.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241110135853 (1).jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/local-label/IMG20241109091012 (2).jpg", type: "image" as const }
    ],
    tags: ["Local Market", "Event", "Retail"],
    materials: ["Handmade Accessories", "Display Materials", "Branding Elements"],
    customizationOptions: ["On-site customization", "Special event pricing", "Limited edition items"],
    price: "Various Price Points",
    events: ["Local Label Market at Mbloc"],
    collaborations: ["Mbloc Space Partnership"],
    overview: "Sunshine Tonic participated in the Local Label Market at Mbloc, a curated market space in Jakarta that showcases local brands and creators. This event provided an excellent platform to connect with Jakarta's creative community and showcase our handmade accessories to a design-conscious audience.",
    scopeAndRole: [
      "✅ Designed and set up a vibrant booth that reflected Sunshine Tonic's brand identity",
      "✅ Curated a special collection of accessories for the market",
      "✅ Managed on-site sales and customer interactions",
      "✅ Created engaging displays to showcase product versatility",
      "✅ Documented the event through photography and social media"
    ],
    projectImpact: [
      "✅ Increased brand visibility among Jakarta's creative community",
      "✅ Generated significant sales and new customer connections",
      "✅ Strengthened brand presence in the local market scene",
      "✅ Received positive feedback on product quality and design",
      "✅ Established connections with other local brands and creators"
    ],
    results: "The event was a success, with strong sales and enthusiastic customer engagement. The exposure at Local Label Market helped expand Sunshine Tonic's reach within Jakarta's creative community and created lasting connections with customers and fellow local brands.",
    showInAll: false
  },
  {
    id: 5,
    name: "Sunshine Tonic x AFAIR 2024 – Custom Jewelry Collaboration",
    description: "A special collaboration creating custom jewelry pieces for AFAIR 2024",
    image: { url: "/images/sunshine-tonic/afair/thumbnail and first image.jpg", type: "image" as const },
    images: [
      { url: "/images/sunshine-tonic/afair/thumbnail and first image.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/afair/IMG20230917154938.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/afair/IMG20230917155155.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/afair/IMG20230917155612.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/afair/IMG20230917155711.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/afair/IMG20231214161945 (2).jpg", type: "image" as const }
    ],
    tags: ["Collaboration", "Custom Design", "Jewelry"],
    materials: ["Precious Metals", "Gemstones", "Handcrafted Elements"],
    customizationOptions: ["Custom designs", "Personalized elements", "Limited edition pieces"],
    price: "Custom Pricing",
    events: ["AFAIR 2024"],
    collaborations: ["AFAIR Partnership"],
    overview: "Sunshine Tonic collaborated with AFAIR 2024 to create a special collection of custom jewelry pieces. This collaboration brought together our expertise in handmade accessories with AFAIR's vision for unique, statement pieces that celebrate individuality and craftsmanship.",
    scopeAndRole: [
      "✅ Designed custom jewelry pieces in collaboration with AFAIR",
      "✅ Created unique, one-of-a-kind pieces for the event",
      "✅ Managed the production and quality control process",
      "✅ Coordinated with AFAIR team for design approvals",
      "✅ Presented the collection at the AFAIR 2024 event"
    ],
    projectImpact: [
      "✅ Created exclusive pieces that captured both brands' aesthetics",
      "✅ Strengthened brand presence in the luxury accessories market",
      "✅ Generated significant interest and sales during the event",
      "✅ Received positive feedback on design and craftsmanship",
      "✅ Established a foundation for future collaborations"
    ],
    results: "The collaboration was a success, with the custom pieces receiving enthusiastic response from attendees. The partnership with AFAIR helped elevate Sunshine Tonic's presence in the luxury accessories market and created opportunities for future high-end collaborations."
  },
  {
    id: 6,
    name: "Sunshine Tonic x Ekskursi: IBAN 2025 – Custom Vernacular-Inspired Accessories",
    description: "A special collaboration creating custom jewelry pieces for EKSKURSI: IBAN 2025",
    image: { url: "/images/sunshine-tonic/iban/1 n thumbnail.jpg", type: "image" as const },
    images: [
      { url: "/images/sunshine-tonic/iban/1 n thumbnail.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/2.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/3.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/4.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/5.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/6.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/7.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/8.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/9.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/10.jpg", type: "image" as const },
      { url: "/images/sunshine-tonic/iban/11.jpg", type: "image" as const }
    ],
    tags: ["Collaboration", "Custom Design", "Jewelry"],
    materials: ["Precious Metals", "Gemstones", "Handcrafted Elements"],
    customizationOptions: ["Custom designs", "Personalized elements", "Limited edition pieces"],
    price: "Custom Pricing",
    events: ["EKSKURSI: IBAN 2025"],
    collaborations: ["IBAN Partnership"],
    overview: "Sunshine Tonic collaborated with EKSKURSI: IBAN 2025 to create a special collection of custom jewelry pieces. This collaboration brought together our expertise in handmade accessories with IBAN's vision for unique, statement pieces that celebrate cultural heritage and modern design.",
    scopeAndRole: [
      "✅ Designed custom jewelry pieces in collaboration with IBAN",
      "✅ Created unique, one-of-a-kind pieces for the event",
      "✅ Managed the production and quality control process",
      "✅ Coordinated with IBAN team for design approvals",
      "✅ Presented the collection at the EKSKURSI: IBAN 2025 event"
    ],
    projectImpact: [
      "✅ Created exclusive pieces that captured both brands' aesthetics",
      "✅ Strengthened brand presence in the cultural jewelry market",
      "✅ Generated significant interest and sales during the event",
      "✅ Received positive feedback on design and craftsmanship",
      "✅ Established a foundation for future cultural collaborations"
    ],
    results: "The collaboration was a success, with the custom pieces receiving enthusiastic response from attendees. The partnership with IBAN helped elevate Sunshine Tonic's presence in the cultural jewelry market and created opportunities for future heritage-inspired collaborations."
  }
]

interface SunshineTonicProps {
  bestWork?: boolean | number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  navigateToSection: () => void;
  openPopup: (project: any) => void;
}

export default function SunshineTonic({ 
  bestWork = false, 
  selectedCategory, 
  setSelectedCategory,
  navigateToSection,
  openPopup
}: SunshineTonicProps) {
  const isAllSection = selectedCategory === 'all';
  const filteredProducts = isAllSection 
    ? products.filter(product => product.id !== 3 && product.id !== 4 && product.id !== 5 && product.id !== 6) // Remove P-Land, Local Label Market, AFAIR, and IBAN projects in all section
    : products;

  const productsToShow = typeof bestWork === 'number' 
    ? filteredProducts.slice(0, bestWork) 
    : bestWork 
      ? filteredProducts.slice(0, 4) 
      : filteredProducts;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = (product: Product) => {
    setSelectedProduct(product)
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setSelectedProduct(null)
  }

  const handlePrevious = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex(p => p.id === selectedProduct.id)
    const previousIndex = (currentIndex - 1 + products.length) % products.length
    setSelectedProduct(products[previousIndex])
  }

  const handleNext = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex(p => p.id === selectedProduct.id)
    const nextIndex = (currentIndex + 1) % products.length
    setSelectedProduct(products[nextIndex])
  }

  return (
    <div className="space-y-4">
      <motion.h3 
        className="text-2xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sunshine Tonic
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {productsToShow.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-square">
              <Image
                src={product.image.url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-orange-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button 
                  className="bg-white text-orange-700 px-4 py-2 rounded-full hover:bg-orange-100 transition duration-300"
                  onClick={() => handleOpenPopup(product)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-orange-500">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <SunshineTonicPopup
        product={selectedProduct}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onPrevious={handlePrevious}
        onNext={handleNext}
        navigateToSection={navigateToSection}
      />
    </div>
  )
}

