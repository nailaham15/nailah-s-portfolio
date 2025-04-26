'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import Popup from '../ui/popup'

interface SunshineTonicProduct {
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
}

interface SunshineTonicPopupProps {
  product: SunshineTonicProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  navigateToSection: () => void;
}

export default function SunshineTonicPopup({
  product,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  navigateToSection
}: SunshineTonicPopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // Preload PDF when component mounts
  useEffect(() => {
    if (product?.images[0]?.type === 'pdf') {
      const preloadPdf = async () => {
        try {
          const response = await fetch(product.images[0].url);
          if (!response.ok) throw new Error('Failed to load PDF');
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setPdfLoaded(true);
          setIsLoading(false);
        } catch (error) {
          console.error('Error preloading PDF:', error);
          setPdfError(true);
          setIsLoading(false);
        }
      };
      preloadPdf();
    }
  }, [product]);

  // Reset states when popup is reopened
  useEffect(() => {
    if (isOpen && product?.id !== 1) {
      setCurrentImageIndex(0);
      setIsLoading(true);
      setPdfError(false);
    }
  }, [isOpen, product?.id]);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoading(true);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
    setIsLoading(true);
  };

  const currentItem = product.images[currentImageIndex];

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, index) => (
            <span key={index} className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="relative flex justify-center items-center mb-4">
          {currentItem.type === 'pdf' ? (
            <div className="w-full max-w-2xl mx-auto">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                </div>
              )}
              {pdfError ? (
                <div className="flex flex-col items-center justify-center p-8 bg-orange-50 rounded-lg">
                  <p className="text-orange-600 mb-4">Unable to load PDF. Please try opening in a new tab.</p>
                  <a
                    href={currentItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open in New Tab
                  </a>
                </div>
              ) : (
                <object
                  data={currentItem.url}
                  type="application/pdf"
                  className="w-full"
                  style={{ height: '60vh' }}
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setPdfError(true);
                    setIsLoading(false);
                  }}
                >
                  <div className="flex flex-col items-center justify-center p-8 bg-orange-50 rounded-lg">
                    <p className="text-orange-600 mb-4">Unable to display PDF. Please try opening in a new tab.</p>
                    <a
                      href={currentItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Open in New Tab
                    </a>
                  </div>
                </object>
              )}
            </div>
          ) : (
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={currentItem.url}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          )}
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center space-x-auto py-4 px-2">
          {product.images.map((item, index) => (
            <div key={index} className="p-1">
              <button
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 rounded-md overflow-hidden focus:outline-none ${
                  index === currentImageIndex ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-white' : ''
                }`}
              >
                <div className="w-full h-full relative">
                  {item.type === 'pdf' ? (
                    <div className="w-full h-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-800 text-xs font-semibold">PDF</span>
                    </div>
                  ) : (
                    <Image
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-sm"
                    />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {product.id === 1 ? (
          <>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: product.overview }} />

            <h3 className="text-xl font-semibold mb-2">Scope & Role</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {product.scopeAndRole.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Project Impact</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {product.projectImpact.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </>
        ) : product.id === 2 ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Role:</span> Workshop Host, Collaborator, Creative Director</li>
                <li><span className="font-bold">Location:</span> Patjar Merah Bookstore</li>
                <li><span className="font-bold">Attendees:</span> 25+</li>
                <li><span className="font-bold">Occasion:</span> Bookclan's 2nd Anniversary Celebration</li>
                <li><span className="font-bold">Date:</span> 18 January 2025</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Collaborated with Bookclan, a local book community, and Patjar Merah, an indie bookstore, to host a free bookmark-making workshop combining storytelling and creativity.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Designed and led a hands-on tutorial on crafting lace bead bookmarks, introducing Sunshine Tonic to a new creative, book-loving audience.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Personally prepared <span className="font-bold">25+ unique bookmark kits</span> using curated "bead soups," encouraging attendees to create truly one-of-a-kind pieces.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Encouraged storytelling—<span className="font-bold">5 participants</span> shared their bookmark's meaning, and <span className="font-bold">2 winners</span> received Sunshine Tonic products as prizes.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Opened a Sunshine Tonic booth during the event, generating on-site revenue despite it being a free event.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Post-event, many attendees shared their bookmarks and tagged Sunshine Tonic, leading to increased profile views, followers, and engagement.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Collaboration Post Performance:</p>
                </li>
                <li className="pl-6 space-y-1">
                  <p>• Poster: <span className="font-bold">4,902 views</span>, <span className="font-bold">208 interactions</span>, <span className="font-bold">161 likes</span>, <span className="font-bold">27 shares</span>, <span className="font-bold">18 saves</span></p>
                </li>
              </ul>
            </div>
          </div>
        ) : product.id === 3 ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Role:</span> Booth Owner, Designer, Seller</li>
                <li><span className="font-bold">Event Type:</span> K-pop Themed Art Market</li>
                <li><span className="font-bold">Location:</span> TMII, Jakarta</li>
                <li><span className="font-bold">Organizer:</span> Peanutopia</li>
                <li><span className="font-bold">Date:</span> 22–23 June 2024</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Debuted Sunshine Tonic in an offline art market setting through P-LAND Vol. 3, a K-pop themed market organized by Peanutopia, featuring curated merchandise and activities celebrating fan artist culture.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Launched K-pop inspired product lines specifically designed for the event, tailored to resonate with the community's aesthetics and interests.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Showcased and sold handmade bead accessories among other themed pieces, aligning the booth with Sunshine Tonic's bold, playful identity while catering to a niche audience.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Engaged directly with <span className="font-bold">21 customers</span>, receiving valuable feedback and building new customer connections.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Collaborated with P-LAND's official Instagram catalog, creating a post that reached <span className="font-bold">4,946 accounts</span>, garnering <span className="font-bold">134 likes</span>, <span className="font-bold">29 shares</span>, <span className="font-bold">27 saves</span>, and <span className="font-bold">59 profile visits</span>, helping boost brand awareness.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Participated in a vibrant, high-energy event that emphasized community, fandom, and creative entrepreneurship.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Takeaway</h3>
              <p className="text-gray-700">💡 A milestone moment—marking Sunshine Tonic's first-ever offline market appearance, combining fandom culture with handmade charm.</p>
            </div>
          </div>
        ) : product.id === 4 ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Role:</span> Founder, Vendor, Product Launch, Marketing</li>
                <li><span className="font-bold">Location:</span> Mbloc Space, Jakarta</li>
                <li><span className="font-bold">Attendees:</span> 33 Customers</li>
                <li><span className="font-bold">Date:</span> 9-10 November 2025</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Second Art Market Participation: Shared a booth with 3 other brands at Local Label Market, a vibrant event that celebrates local creators and artists.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Sales & Profits: Successfully attracted <span className="font-bold">33 customers</span> and generated a total profit of <span className="font-bold">IDR 560K</span>.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Marketing & Engagement: Launched new Sunshine Tonic products while implementing a Buy 1 Get 1 Free tactic to increase foot traffic and attract more customers to the booth.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Collaboration Post Stats: Recap Post with Local Label's Instagram: <span className="font-bold">1,184 views</span>, <span className="font-bold">36 interactions</span></p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Founder Feature: Personally featured in one of Local Label's reels, enhancing brand visibility and connecting with a wider audience.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Engagement Strategy: Actively engaged with visitors by offering the Buy 1 Get 1 Free promotion to those who followed Sunshine Tonic, posted on their stories, and tagged the brand. This strategy led to a significant boost in customer interaction and social media engagement.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Customer Experience: The combination of personal interaction and a targeted promotion resulted in increased foot traffic, engagement, and brand awareness among local market-goers.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Takeaway</h3>
              <p className="text-gray-700">💡 This event marked a significant step in expanding Sunshine Tonic's local presence, reaching new customers, and showcasing the brand's growing versatility and appeal.</p>
            </div>
          </div>
        ) : product.id === 5 ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Role:</span> Jewelry Designer & Brand Collaborator</li>
                <li><span className="font-bold">Event:</span> AFAIR 2024 – Annual Architecture Fair</li>
                <li><span className="font-bold">Timeline:</span> November 2023 – January 2024</li>
                <li><span className="font-bold">Location:</span> Galeri Kebangkitan Nasional, Jakarta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Collaborated with AFAIR 2024, an annual architecture fair organized by architecture students, to design a line of custom bracelets and necklaces that aligned with their visual branding.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Proposed and developed bespoke jewelry based on the committee's concept references, blending Sunshine Tonic's bold style with AFAIR's sleek identity.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Invited to showcase and sell additional Sunshine Tonic products beyond the collaboration at the main exhibition, offering expanded visibility.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Achieved <span className="font-bold">58 product sales</span> and generated approximately <span className="font-bold">IDR 1.2 million</span> in revenue during the event.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Strengthened brand presence among the student design community through thoughtful product placement and creative synergy.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Takeaway</h3>
              <p className="text-gray-700">✨ An expressive collaboration that brought handcrafted design into a curated architectural space.</p>
            </div>
          </div>
        ) : product.id === 6 ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Role:</span> Jewelry Designer & Brand Collaborator</li>
                <li><span className="font-bold">Event:</span> Ekskursi: IBAN 2025 – Vernacular Architecture Exploration Exhibition</li>
                <li><span className="font-bold">Timeline:</span> August 2024 – January 2025</li>
                <li><span className="font-bold">Location:</span> Taman Ismail Marzuki, Jakarta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Partnered with Ekskursi: IBAN 2025, a student-led initiative exploring Indonesia's vernacular architecture, to design a series of custom accessories reflecting the event's visual identity and cultural themes.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Created <span className="font-bold">2 exclusive bracelet designs</span> with matching freebie rings, and <span className="font-bold">3 unique ring styles</span>, tailored to their brand colors and storytelling approach.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <div>
                    <p>Produced handcrafted accessories across three custom batches for their exhibition and merchandise preorders:</p>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Batch 1: <span className="font-bold">25 products</span> (IDR 375,000)</li>
                      <li>Batch 2: <span className="font-bold">40 products</span> (IDR 700,000)</li>
                      <li>Batch 3: <span className="font-bold">42 products</span> (IDR 810,000)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Total Revenue Generated: <span className="font-bold">IDR 1,885,000</span></p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Products were featured and sold at three separate events leading up to the main exhibition.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✅</span>
                  <p>Sunshine Tonic was featured on Ekskursi's Instagram feed and stories, increasing visibility and interest from a niche design and heritage-driven audience.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Takeaway</h3>
              <p className="text-gray-700">💡 This collaboration bridged traditional architecture and contemporary craft, offering wearable pieces that celebrated local wisdom through jewelry design.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
              <p className="whitespace-pre-line mb-4">{product.overview}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Scope & Role</h3>
              <ul className="space-y-3">
                {product.scopeAndRole.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <p dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Project Impact</h3>
              <ul className="space-y-3">
                {product.projectImpact.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <p dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {product.results && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Results</h3>
                <p dangerouslySetInnerHTML={{ __html: product.results }} />
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 flex items-center"
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => {
              navigateToSection();
              onClose();
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 flex items-center"
          >
            More Projects
            <ExternalLink size={20} className="ml-2" />
          </button>
          <button
            onClick={onNext}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 flex items-center"
          >
            Next Project
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </Popup>
  );
}

