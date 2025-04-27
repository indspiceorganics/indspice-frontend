// src/data/spices.ts

// --- === IMPORTANT: Replace ALL placeholder image imports below === ---

// --- Import Detail Images (1600x1200px or similar, 4:3 aspect ratio recommended) ---
import detailSpiceCuminImage from '../assets/detail-spice-cumin.png';
import detailSpiceCorianderImage from '../assets/detail-spice-coriander.png';
import detailSpiceRedChillyImage from '../assets/detail-spice-red-chilly.png';
import detailSpiceFennelImage from '../assets/detail-spice-fennel.png';
import detailSpiceFenugreekImage from '../assets/detail-spice-fenugreek.png';
import detailSpiceTurmericImage from '../assets/detail-spice-turmeric.png';
import detailSpiceCardamomImage from '../assets/detail-spice-cardamom.png';
import detailSpiceClovesImage from '../assets/detail-spice-cloves.png';
import detailSpiceBlackPepperImage from '../assets/detail-spice-black-pepper.png';

// --- Import Card Images (Smaller, square, ~500x500px recommended) ---
import cardSpiceCuminImage from "../assets/spiceCard-cumin.png";
import cardSpiceCorianderImage from "../assets/spiceCard-coriander.png";
import cardSpiceRedChillyImage from "../assets/spiceCard-chilly.png";
import cardSpiceFennelImage from "../assets/spiceCard-fennel.png";
import cardSpiceFenugreekImage from "../assets/spiceCard-fenugreek.png";
import cardSpiceTurmericImage from "../assets/spiceCard-turmeric.png";
import cardSpiceCardamomImage from "../assets/spiceCard-cardamom.png";
import cardSpiceClovesImage from "../assets/spiceCard-clove.png";
import cardSpiceBlackPepperImage from "../assets/spiceCard-black-pepper.png"; // Ensure consistency


// --- Define the detailed Spice interface ---
export interface SpiceDetails {
  id: string;           // Used for URL matching (e.g., 'cumin')
  name: string;         // Full display name (e.g., 'Cumin (Jeera)')
  imageDetailUrl: string;// Path/Import for large detail image
  imageCardUrl: string;  // Path/Import for smaller card image
  description: string;   // SHORT description for cards/listings
  fullDescription: string;// DETAILED description for detail page
  culinaryUses: string[];// List of typical uses
  organicInfo?: string; // Specific text about organic practices for this spice
  shopLink?: string;    // Placeholder for shop link
}

// --- Export the array of detailed spice data ---
export const spicesData: SpiceDetails[] = [
  // 1. Cumin
  {
    id: 'cumin',
    name: 'Cumin (Jeera)',
    imageDetailUrl: detailSpiceCuminImage,
    imageCardUrl: cardSpiceCuminImage,
    description: 'Warm, earthy, pungent – essential for tempering and curries.',
    fullDescription: `Embark on a flavorful journey with IndSpice Organics' premium Cumin (Jeera). Sourced from the sun-kissed fields of Rajasthan, these slender seeds boast an intensely warm, earthy, and slightly pungent aroma that is simply unmistakable. Revered globally, and absolutely essential in Indian cuisine, our organic cumin delivers a robust, authentic taste that forms the flavorful foundation of countless dishes. We ensure each batch is carefully selected and naturally processed to preserve its volatile oils, guaranteeing maximum potency and freshness from our farm to your table.`,
    culinaryUses: [
      "Forms the base of spice blends like Garam Masala and curry powders.",
      "Essential for 'tadka' (tempering) in dals, vegetables, and rice dishes.",
      "Adds depth to marinades, rubs, soups, and stews.",
      "Complements roasted vegetables and meats beautifully.",
      "Used globally in Mexican, Middle Eastern, and North African cuisines.",
    ],
    organicInfo: "Our Cumin is cultivated using traditional organic methods, ensuring a pure product free from synthetic pesticides and fertilizers, letting its true earthy flavor shine.",
    shopLink: "#"
  },
  // 2. Coriander
  {
    id: 'coriander',
    name: 'Coriander (Dhania)',
    imageDetailUrl: detailSpiceCorianderImage,
    imageCardUrl: cardSpiceCorianderImage,
    description: 'Bright, citrusy, and slightly floral seeds, whole or ground.',
    fullDescription: "Experience the delightful complexity of our organic Coriander seeds. Offering a unique blend of bright, citrusy notes reminiscent of lemon zest, coupled with a subtle, slightly sweet floral undertone, Coriander adds a layer of freshness to any dish. Its wonderfully versatile profile means it can be used whole to provide texture or ground finely to blend seamlessly into sauces and spice mixes.",
    culinaryUses: [
      "A key ingredient in many spice blends (masalas) across India.",
      "Perfect for marinades for chicken, fish, and vegetables.",
      "Enhances the flavor of soups, stocks, broths, and lentil dishes (dals).",
      "Used whole or ground in chutneys, pickles, and savory baked goods.",
      "Its cooling properties help balance the heat in spicy dishes.",
    ],
    organicInfo: "Grown organically in nutrient-rich soil, our Coriander seeds develop a fuller, more complex flavor profile than conventionally grown varieties.",
    shopLink: "#"
  },
  // 3. Red Chili
  {
    id: 'red-chili',
    name: 'Red Chili (Lal Mirch)',
    imageDetailUrl: detailSpiceRedChillyImage,
    imageCardUrl: cardSpiceRedChillyImage,
    description: 'Vibrant heat and rich color for authentic Indian dishes.',
    fullDescription: "Ignite your dishes with the fiery spirit of India using our premium organic Red Chilies (Lal Mirch). We carefully select varieties known for their vibrant crimson hue and a balanced, robust heat that provides a satisfying kick without overwhelming other flavors. Naturally sun-dried to perfection, they retain their potency and characteristic pungent aroma.",
    culinaryUses: [
        "The foundation of countless Indian curries, imparting both heat and color.",
        "Used whole in tempering hot oil ('tadka') to infuse dishes with fiery essence.",
        "Ground into powder for easy integration into sauces, marinades, and spice rubs.",
        "A key ingredient in spicy pickles (achaar) and hot chutneys.",
        "Essential for adding boldness and adjustable heat to any savory preparation.",
    ],
    organicInfo: "Our Red Chilies are grown using organic practices, free from harmful pesticides, ensuring you get pure, unadulterated heat and flavor.",
    shopLink: "#"
  },
  // 4. Fennel
  {
    id: 'fennel',
    name: 'Fennel (Saunf)',
    imageDetailUrl: detailSpiceFennelImage,
    imageCardUrl: cardSpiceFennelImage,
    description: 'Subtly sweet and licorice-like, used in pickles and as mukhwas.',
    fullDescription: "Discover the refreshing, subtly sweet character of our aromatic organic Fennel seeds (Saunf). Bearing distinct notes reminiscent of licorice and anise, they offer a unique flavor profile prized both in cooking and as a traditional digestive aid. Their clean, palate-cleansing taste makes them a versatile addition to diverse culinary applications.",
    culinaryUses: [
       "Commonly chewed after meals as a natural mouth freshener and digestive aid (mukhwas).",
       "Used in spice blends for pickling vegetables and fruits.",
       "Adds an aromatic, slightly sweet dimension to breads, cakes, and savory pastries.",
       "Complements the delicate flavors of fish and seafood exceptionally well.",
       "Infuses certain tea blends and beverages with its pleasant aroma.",
    ],
    organicInfo: "Cultivated organically, our Fennel seeds retain their natural sweetness and aromatic oils, offering a superior flavor experience.",
    shopLink: "#"
  },
  // 5. Fenugreek
  {
    id: 'fenugreek',
    name: 'Fenugreek (Methi)',
    imageDetailUrl: detailSpiceFenugreekImage,
    imageCardUrl: cardSpiceFenugreekImage,
    description: 'Unique bittersweet aroma, key for dals and tempering.',
    fullDescription: "Explore the intriguing depth of our organic Fenugreek seeds (Methi). These small, hard, yellowish-brown seeds possess a unique and complex flavor profile – slightly bitter with compelling undertones of maple syrup and burnt sugar. While potent and potentially overpowering if used excessively, Fenugreek is a cornerstone spice providing foundational flavor in many Indian regional cuisines.",
    culinaryUses: [
       "An essential component in tempering ('tadka') for numerous lentil (dal) and vegetable dishes.",
       "Provides the characteristic flavor base for iconic dishes like Aloo Methi (Potato Fenugreek).",
       "Frequently included whole or ground in regional spice blends and curry powders.",
       "Adds depth and a slight bitterness to complex pickles and chutneys.",
       "Ground seeds can act as a minor thickening agent in sauces.",
    ],
    organicInfo: "Our organic Fenugreek seeds are carefully sourced to ensure optimal flavor development and freedom from contaminants.",
    shopLink: "#"
  },
  // 6. Turmeric
  {
    id: 'turmeric',
    name: 'Turmeric (Haldi)',
    imageDetailUrl: detailSpiceTurmericImage,
    imageCardUrl: cardSpiceTurmericImage,
    description: 'Golden hue and earthy flavor, famed for its health benefits.',
    fullDescription: "Experience the golden heart of Indian cooking with our vibrant organic Turmeric powder (Haldi). Prized for centuries, its stunning color is matched by a warm, earthy, and slightly pungent flavor with distinct peppery and mustard-like undertones. Celebrated for its culinary uses and potential wellness benefits attributed to its active compound, curcumin, our turmeric is sourced for exceptional quality and purity.",
    culinaryUses: [
       "Provides the essential base color and flavor for countless Indian curries and gravies.",
       "Widely used in lentil dishes (dals), rice preparations (pulao), and vegetable stir-fries.",
       "A common ingredient in marinades for meats, poultry, and fish, adding color and flavor.",
       "Used in pickles and relishes for its flavor and preservative qualities.",
       "Popular ingredient in wellness beverages like 'golden milk' or turmeric teas.",
    ],
    organicInfo: "Our organic Turmeric is grown in ideal conditions and ground from high-quality rhizomes, ensuring a high curcumin content and a pure, vibrant flavor profile.",
    shopLink: "#"
  },
  // 7. Green Cardamom
  {
    id: 'cardamom', // Keep ID simple
    name: 'Green Cardamom (Elaichi)',
    imageDetailUrl: detailSpiceCardamomImage,
    imageCardUrl: cardSpiceCardamomImage,
    description: 'Intensely aromatic pods, perfect for sweets and savory dishes.',
    fullDescription: "Indulge in the intensely aromatic luxury of our organic Green Cardamom pods (Elaichi), hailed as the 'Queen of Spices'. Each pod bursts with a complex symphony of flavors – simultaneously minty, citrusy, spicy, and sweet. Its unmistakable fragrance and potent taste profile elevate both traditional Indian sweets and sophisticated savory preparations.",
    culinaryUses: [
       "Essential flavoring for Indian sweets (mithai), desserts like kheer and phirni.",
       "Infuses beverages like masala chai and coffee with its exotic aroma.",
       "Lends aromatic depth to rich rice dishes such as biryani and pulao.",
       "Complements meat and vegetable curries, especially Mughlai cuisine.",
       "Used whole, crushed, or seeds ground into powder depending on the dish.",
    ],
    organicInfo: "Sourced from organic farms, our Green Cardamom pods are harvested at peak ripeness to capture their full aromatic potential.",
    shopLink: "#"
  },
  // 8. Cloves
  {
    id: 'cloves',
    name: 'Cloves (Laung)',
    imageDetailUrl: detailSpiceClovesImage,
    imageCardUrl: cardSpiceClovesImage,
    description: 'Warm, pungent, and slightly sweet flower buds for potent flavor.',
    fullDescription: "Discover the potent, penetrating warmth of our organic whole Cloves (Laung). These unopened, dried flower buds offer an intensely pungent, slightly sweet, and powerfully aromatic flavor profile that should be used with care. When applied judiciously, cloves impart significant depth, complexity, and a distinct spicy character to dishes.",
    culinaryUses: [
       "A cornerstone ingredient in Garam Masala and many other essential spice blends.",
       "Used whole to infuse flavor into rice dishes (pulao, biryani), meat preparations, and pickling liquids.",
       "Warms up mulled beverages like wine or cider during colder months.",
       "Ground cloves feature in baked goods (like gingerbread), desserts, and some savory sauces.",
       "Its aromatic oil is known for its traditional numbing and antiseptic properties.",
    ],
    organicInfo: "Our carefully selected organic Cloves ensure a robust flavor and adherence to strict purity standards.",
    shopLink: "#"
  },
  // 9. Black Pepper
  {
    id: 'black-pepper',
    name: 'Black Pepper (Kali Mirch)',
    imageDetailUrl: detailSpiceBlackPepperImage,
    imageCardUrl: cardSpiceBlackPepperImage,
    description: "The 'King of Spices', offering bold, pungent heat and sharpness.",
    fullDescription: "Meet the undisputed 'King of Spices' – our premium organic Black Peppercorns (Kali Mirch). Sourced from high-quality varieties and harvested at optimal ripeness, these dried berries deliver a satisfyingly sharp, pungent heat and a bold, complex flavor profile that enhances almost any savory dish. We provide whole peppercorns, allowing you to grind them fresh for maximum flavor and aromatic impact just before use.",
    culinaryUses: [
       "The most widely used table condiment globally alongside salt.",
       "Essential seasoning for virtually all savory dishes: meats, poultry, fish, eggs, vegetables, salads.",
       "Adds necessary bite and depth to soups, stews, stocks, marinades, and sauces.",
       "A fundamental ingredient in countless spice blends, rubs, and seasonings.",
       "Used whole in pickling, brines, and for infusing liquids.",
    ],
    organicInfo: "Grown organically and free from additives, our Black Peppercorns deliver pure, unadulterated flavor and pungency.",
    shopLink: "#"
  }
];