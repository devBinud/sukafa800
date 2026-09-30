// Content for the Bor Axom 800 sections, following the "Composite Mosaic of Bor Axom"
// web strategy blueprint. Assamese terms sit beside English ones (`as` fields).
// Images are optional: anything without an `image` shows a placeholder until a photo is added.

import rangGharImg from '../images/visionary_statecraft/rang_ghar.jpg'
import karengGharImg from '../images/visionary_statecraft/kareng_ghar.jpeg'
import talatalGharImg from '../images/visionary_statecraft/talatal_ghar.jpeg'
import golaGharImg from '../images/visionary_statecraft/gola_ghor.jpeg'
import joysagarTankImg from '../images/visionary_statecraft/joysagar_tank.jpeg'
import rangnathDolImg from '../images/visionary_statecraft/Ronganath_Doul.jpg'
import deviDolImg from '../images/visionary_statecraft/Devighar_Jaysagar.jpg'
import maidamImg from '../images/soraideu_moidam.jpeg'
import stoneBridgeImg from '../images/stone_bridge.jpeg'

export const GUIDING_PRINCIPLE =
  'Sukapha did not conquer Bor Axom; he planted the seeds of a confederated civilisation where indigenous roots, faith traditions, and tribal self-respect blossomed together.';

// How Sukapha brought the peoples of the valley together (Communities page intro)
export const UNITY_STATEMENT =
  'Not by the sword but by kinship, Sukapha made every community of the valley one family: Bor Axom.';

// The four pillars of the site. Each one leads to its own section.
export const PILLARS = [
  {
    id: 'samanway',
    name: 'Samanway',
    as: 'সমন্বয়',
    english: 'Synthesis',
    desc: 'Ahom polity, tribal fortitude and a shared humanity: the many peoples who together became the Axomiya Mahajati.',
    to: '/communities',
    cta: 'Meet the communities',
  },
  {
    id: 'adhyatma',
    name: 'Adhyatma',
    as: 'আধ্যাত্ম',
    english: 'Spiritual Axis',
    desc: 'Dol and Dewalaya, Satra and Namghar, Deo-shal and Than, Dargah and Zikir: faiths that anchored a common life.',
    to: '/spiritual-axis',
    cta: 'Explore the spiritual axis',
  },
  {
    id: 'sthapatya',
    name: 'Sthapatya',
    as: 'স্থাপত্য',
    english: 'Monuments',
    desc: 'Dols, Maidams, Garhs and Pukhuris raised by the shared labour of masons, smiths and paiks from every clan.',
    to: '/monuments',
    cta: 'See the monuments',
  },
  {
    id: 'oitijya',
    name: 'Oitijya',
    as: 'ঐতিহ্য',
    english: 'Living Heritage',
    desc: 'Muga and Eri silk, bell-metal, Xorai, Jaapi and Mukha: crafts still made by the communities that created them.',
    to: '/living-heritage',
    cta: 'Discover living heritage',
  },
];

// Section 4 of the blueprint: who built Bor Axom?
export const COMMUNITIES = [
  {
    id: 'tai-ahom',
    name: 'Tai-Ahom',
    as: 'টাই-আহোম',
    theme: 'The Integrators',
    contribution:
      'Arrived with Chaolung Sukapha in 1228 and built a state on alliance rather than conquest. Gave Assam the Buranji tradition of written history and the Paik system of shared public service.',
    highlights: ['Buranji chronicles', 'Paik administration', 'Maidams of Charaideo'],
  },
  {
    id: 'moran-borahi',
    name: 'Moran & Borahi',
    as: 'মৰাণ আৰু বৰাহী',
    theme: 'The Custodians of the Soil',
    contribution:
      'Received the Ahom vanguard as brothers. Their knowledge of wet-rice farming, elephant management and the valley soil shaped the first settlements, and their families joined through marriage and kinship.',
    highlights: ['Wet-rice agriculture', 'Elephant craft', 'The first peaceful pacts'],
  },
  {
    id: 'chutiya',
    name: 'Chutiya',
    as: 'চুতীয়া',
    theme: 'Sadiya to Garhgaon',
    contribution:
      'The Sadiya kingdom was known for metal-working, gun and cannon founding, brick temple building and river warfare. After 1523 its artisans and officers carried these skills into the wider Assamese state.',
    highlights: ['Metallurgy & cannon', 'Brick temples of Sadiya', 'Naval tactics'],
  },
  {
    id: 'bodo-kachari',
    name: 'Bodo-Kachari',
    as: 'বড়ো-কছাৰী',
    theme: 'Weavers of the Valley',
    contribution:
      'One of the oldest peoples of the Brahmaputra plains. Bathou worship, Eri silk, the Dokhona and Aronai, and a deep store of folk song and dance are woven into Assamese life.',
    highlights: ['Bathouism', 'Eri & loom traditions', 'Bagurumba & folklore'],
  },
  {
    id: 'dimasa',
    name: 'Dimasa',
    as: 'ডিমাছা',
    theme: 'The Great Builders',
    contribution:
      'Their kingdom left brick and stone capitals at Dimapur, Maibang and Khaspur, with carved monoliths, gateways and water tanks that show a long tradition of masonry and engineering.',
    highlights: ['Dimapur monoliths', 'Khaspur palaces', 'Tanks & masonry'],
  },
  {
    id: 'koch',
    name: 'Koch',
    as: 'কোচ',
    theme: 'Patrons of the West',
    contribution:
      'The Koch kingdom under Naranarayan and Chilarai rebuilt the Kamakhya temple in 1565 and sheltered Srimanta Sankaradeva, giving the Neo-Vaishnavite movement room to grow.',
    highlights: ['Kamakhya rebuilt, 1565', 'Patronage of Sankaradeva', 'Western Assam culture'],
  },
  {
    id: 'mising',
    name: 'Mising',
    as: 'মিচিং',
    theme: 'Masters of the River',
    contribution:
      'Living along the Brahmaputra and its tributaries, the Mising people carry deep knowledge of river navigation, stilt-house building and flood-plain farming, celebrated in Ali-Ai-Ligang.',
    highlights: ['River navigation', 'Chang-ghar stilt houses', 'Ali-Ai-Ligang'],
  },
  {
    id: 'karbi',
    name: 'Karbi',
    as: 'কাৰ্বি',
    theme: 'Guardians of the Hills',
    contribution:
      'The Karbi hills held their own councils, oral epics and forest knowledge, and their relations with the plains kingdoms kept the hill passes open for trade and exchange.',
    highlights: ['Hill councils', 'Oral epics', 'Forest stewardship'],
  },
  {
    id: 'tiwa',
    name: 'Tiwa',
    as: 'তিৱা',
    theme: 'Keepers of the Barter Fair',
    contribution:
      'The Tiwa chiefdoms linked the hills and plains. The Jonbeel Mela, where goods are still exchanged by barter, is a living symbol of trust between neighbouring peoples.',
    highlights: ['Jonbeel Mela', 'Gobha kingdom', 'Hill–plain exchange'],
  },
  {
    id: 'deori',
    name: 'Deori',
    as: 'দেউৰী',
    theme: 'Priests of the Ancient Shrines',
    contribution:
      'Hereditary priests of the old shrines of Sadiya, including Tamreswari (Kechaikhati), the Deori community preserved some of the oldest ritual traditions of the valley.',
    highlights: ['Kechaikhati Than', 'Ancient ritual lore', 'Sadiya shrines'],
  },
  {
    id: 'goriya-moriya',
    name: 'Assamese Muslims',
    as: 'অসমীয়া মুছলমান',
    theme: 'Spiritual Syncretism',
    contribution:
      'Azan Pir’s Zikir and Zari songs, Persian-trained scribes and envoys (Kataki), gunpowder and military engineering, and the brass craft of the Moriya community all belong to the story of Bor Axom.',
    highlights: ['Zikir & Zari', 'Saraguri Chapori', 'Brass & military craft'],
  },
  {
    id: 'tea-tribes',
    name: 'Tea Tribes & Adivasi',
    as: 'চাহ জনগোষ্ঠী',
    theme: 'Builders of Modern Assam',
    contribution:
      'Brought to Assam from the 19th century to work the tea gardens, the tea communities built one of the state’s great industries and gave Assamese culture Jhumur song and dance.',
    highlights: ['Tea economy', 'Jhumur', 'Modern Assamese identity'],
  },
];

// Accordion on the Communities page: how Sukapha's first alliances were made
export const FIRST_PACTS = [
  {
    title: 'Brothers, not subjects',
    body: 'The Buranjis describe Sukapha settling among the Moran and Borahi peoples through agreement rather than war. Their chiefs kept their standing, and their people were treated as kin of the newcomers.',
  },
  {
    title: 'Kinship through marriage',
    body: 'Marriage between Tai families and local families bound the communities together, so that within a few generations the line between “settler” and “native” faded.',
  },
  {
    title: 'Shared fields, shared words',
    body: 'Local farming, food and language mixed with Tai practice. The wet-rice fields, the kitchen and the Assamese language itself carry the mark of this early exchange.',
  },
];

// Section 5 of the blueprint: the spiritual axis
export const SPIRITUAL_TRADITIONS = [
  {
    id: 'dol',
    name: 'Dol & Dewalaya',
    as: 'দ’ল আৰু দেৱালয়',
    desc: 'Shiva, Devi and Vishnu temples from Kamakhya on Nilachal to the towering Sivadol of Sivasagar. Their builders joined Nilachal and Da-Parbatia styles with local brick, stone and organic mortar.',
  },
  {
    id: 'satra',
    name: 'Satra & Namghar',
    as: 'সত্ৰ আৰু নামঘৰ',
    desc: 'Srimanta Sankaradeva and Madhavadeva’s Ekasarana Dharma gave every village a Namghar, where people of every clan sat together as equals and where Borgeet, Bhaona and Sattriya dance were born.',
  },
  {
    id: 'deoshal',
    name: 'Deo-shal & Than',
    as: 'দেওশাল আৰু থান',
    desc: 'Sacred groves, Thans and ancestral grounds of the Bodo, Tiwa, Dimasa, Karbi, Mising, Rabha and Tai-Ahom peoples, including Bathou altars and Me-Dam-Me-Phi, preserve an ancient ethic of care for the land.',
  },
  {
    id: 'dargah',
    name: 'Dargah & Zikir',
    as: 'দৰগাহ আৰু জিকিৰ',
    desc: 'Azan Pir’s Zikir songs speak the same language of devotion as the Borgeet. His dargah at Saraguri Chapori and the Poa Mecca at Hajo stand for a faith at home in Assam.',
  },
];

export const SACRED_SITES = [
  { name: 'Kamakhya Temple', as: 'কামাখ্যা মন্দিৰ', tradition: 'Dol & Dewalaya', place: 'Nilachal, Guwahati', region: 'Lower Assam', note: 'Great seat of Shakti worship; rebuilt by the Koch kings in 1565.' },
  { name: 'Umananda Temple', as: 'উমানন্দ', tradition: 'Dol & Dewalaya', place: 'Peacock Island, Guwahati', region: 'Lower Assam', note: 'Shiva temple on a Brahmaputra river island, built under Gadadhar Singha in 1694.' },
  { name: 'Sukreswar Temple', as: 'শুক্ৰেশ্বৰ', tradition: 'Dol & Dewalaya', place: 'Guwahati', region: 'Lower Assam', note: 'Riverside Shiva temple built under Pramatta Singha in 1744.' },
  { name: 'Hayagriva Madhava', as: 'হয়গ্ৰীৱ মাধৱ', tradition: 'Dol & Dewalaya', place: 'Hajo', region: 'Lower Assam', note: 'Revered by Hindus and Buddhists alike, a few kilometres from Poa Mecca.' },
  { name: 'Sivadol', as: 'শিৱদ’ল', tradition: 'Dol & Dewalaya', place: 'Sivasagar', region: 'Upper Assam', note: 'The tallest Shiva temple of the Ahom age, raised in 1734 beside the Borpukhuri.' },
  { name: 'Mahabhairav Temple', as: 'মহাভৈৰৱ', tradition: 'Dol & Dewalaya', place: 'Tezpur', region: 'Central Assam', note: 'Ancient Shiva shrine of Sonitpur, linked to the legends of King Bana.' },
  { name: 'Deopahar', as: 'দেওপাহাৰ', tradition: 'Dol & Dewalaya', place: 'Numaligarh', region: 'Upper Assam', note: 'Hilltop temple ruins with carved stone panels from the pre-Ahom period.' },
  { name: 'Batadrava Than', as: 'বটদ্ৰৱা থান', tradition: 'Satra & Namghar', place: 'Nagaon', region: 'Central Assam', note: 'Birthplace of Srimanta Sankaradeva and site of his first Kirtanghar.' },
  { name: 'Barpeta Satra', as: 'বৰপেটা সত্ৰ', tradition: 'Satra & Namghar', place: 'Barpeta', region: 'Lower Assam', note: 'Founded by Madhavadeva; famed for its democratic management and Doul festival.' },
  { name: 'Auniati Satra', as: 'আউনীআটী সত্ৰ', tradition: 'Satra & Namghar', place: 'Majuli', region: 'Upper Assam', note: 'One of the great Satras of Majuli, keeper of manuscripts and Sattriya tradition.' },
  { name: 'Samaguri Satra', as: 'সামাগুৰি সত্ৰ', tradition: 'Satra & Namghar', place: 'Majuli', region: 'Upper Assam', note: 'Home of the Mukha, the painted masks worn in Bhaona.' },
  { name: 'Kechaikhati Than', as: 'কেচাইখাতী থান', tradition: 'Deo-shal & Than', place: 'Sadiya', region: 'Upper Assam', note: 'Ancient shrine (Tamreswari) tended by Deori priests.' },
  { name: 'Bathou Than', as: 'বাথৌ থান', tradition: 'Deo-shal & Than', place: 'Bodo villages, across Assam', region: 'Lower Assam', note: 'Village altars around the sacred Sijou plant, heart of Bodo worship.' },
  { name: 'Charaideo Maidams', as: 'চৰাইদেউ মৈদাম', tradition: 'Deo-shal & Than', place: 'Charaideo', region: 'Upper Assam', note: 'Royal burial mounds where Me-Dam-Me-Phi ancestor rites are still offered.' },
  { name: 'Azan Pir Dargah', as: 'আজান পীৰৰ দৰগাহ', tradition: 'Dargah & Zikir', place: 'Saraguri Chapori, Sivasagar', region: 'Upper Assam', note: 'Resting place of Azan Pir, composer of the Zikir and Zari songs.' },
  { name: 'Poa Mecca', as: 'পোৱা মক্কা', tradition: 'Dargah & Zikir', place: 'Hajo', region: 'Lower Assam', note: 'Mosque on Garurachal hill, visited by people of every faith.' },
];

// Monuments & Garhs page
export const MONUMENT_CATEGORIES = ['All', 'Palaces & Maidams', 'Dol & Dewalaya', 'Garh & Pukhuri', 'Older Kingdoms'];

export const MONUMENTS = [
  { name: 'Charaideo Maidams', as: 'চৰাইদেউ মৈদাম', category: 'Palaces & Maidams', place: 'Charaideo', era: '13th–18th century', desc: 'Earthen burial mounds of the Ahom royalty, inscribed as a UNESCO World Heritage Site in 2024.', image: maidamImg },
  { name: 'Rang Ghar', as: 'ৰংঘৰ', category: 'Palaces & Maidams', place: 'Sivasagar', era: 'Pramatta Singha, 1746', desc: 'Two-storeyed royal pavilion from which the court watched buffalo fights and Bihu games.', image: rangGharImg },
  { name: 'Kareng Ghar', as: 'কাৰেংঘৰ', category: 'Palaces & Maidams', place: 'Garhgaon', era: 'Rajeswar Singha, 1752', desc: 'Four-storeyed royal palace of brick and organic mortar at the old capital.', image: karengGharImg },
  { name: 'Talatal Ghar', as: 'তলাতল ঘৰ', category: 'Palaces & Maidams', place: 'Rangpur, Sivasagar', era: '18th century', desc: 'Palace and military station with storeys above and below ground.', image: talatalGharImg },
  { name: 'Gola Ghar', as: 'গোলা ঘৰ', category: 'Palaces & Maidams', place: 'Rangpur, Sivasagar', era: '18th century', desc: 'Ammunition store whose thick walls kept gunpowder dry through the monsoon.', image: golaGharImg },
  { name: 'Sivadol', as: 'শিৱদ’ল', category: 'Dol & Dewalaya', place: 'Sivasagar', era: 'Bar Raja Ambika, 1734', desc: 'One of the tallest Shiva temples in India, beside the Borpukhuri tank.' },
  { name: 'Rangnath Dol', as: 'ৰংনাথ দ’ল', category: 'Dol & Dewalaya', place: 'Joysagar, Sivasagar', era: '18th century', desc: 'Vishnu temple on the banks of the Joysagar tank.', image: rangnathDolImg },
  { name: 'Devi Dol', as: 'দেৱী দ’ল', category: 'Dol & Dewalaya', place: 'Joysagar, Sivasagar', era: '18th century', desc: 'Temple to the Devi within the Joysagar temple complex.', image: deviDolImg },
  { name: 'Joysagar Tank', as: 'জয়সাগৰ পুখুৰী', category: 'Garh & Pukhuri', place: 'Rangpur, Sivasagar', era: 'Rudra Singha, 1697', desc: 'One of the largest man-made tanks in India, dug by paik labour in memory of Joymoti.', image: joysagarTankImg },
  { name: 'Namdang Stone Bridge', as: 'নামদাং শিলাসাঁকো', category: 'Garh & Pukhuri', place: 'Gaurisagar, Sivasagar', era: 'Rudra Singha, 1703', desc: 'Bridge cut from a single rock, still carrying traffic on the national highway.', image: stoneBridgeImg },
  { name: 'Dhodar Ali', as: 'ঢোদৰ আলি', category: 'Garh & Pukhuri', place: 'Golaghat to Joypur', era: 'Gadadhar Singha, late 17th century', desc: 'Raised embankment road built by paiks, serving as highway, flood bank and defence line.' },
  { name: 'Dimapur Ruins', as: 'ডিমাপুৰ', category: 'Older Kingdoms', place: 'Dimapur', era: 'Dimasa kingdom, 13th–16th century', desc: 'Brick gateway and carved mushroom-shaped monoliths of the Dimasa capital.' },
  { name: 'Khaspur', as: 'খাছপুৰ', category: 'Older Kingdoms', place: 'Cachar', era: 'Dimasa kingdom, 18th century', desc: 'Palace gates and temples of the last Dimasa capital in the Barak valley.' },
  { name: 'Tamreswari Temple', as: 'তাম্ৰেশ্বৰী', category: 'Older Kingdoms', place: 'Sadiya', era: 'Chutiya kingdom', desc: 'Copper-roofed temple of the Chutiya age, remembered as the “copper temple”.' },
  { name: 'Madan Kamdev', as: 'মদন কামদেৱ', category: 'Older Kingdoms', place: 'Baihata Chariali', era: 'Kamarupa, 10th–12th century', desc: 'Richly carved stone temple ruins from the Kamarupa kingdom, long before 1228.' },
];

// Paik & Khel infographic on the Monuments page
export const PAIK_ROLES = [
  { role: 'Masons & brick-makers', as: 'ৰাজমিস্ত্ৰী', desc: 'Raised Dols, Garhs and palaces with brick and organic mortar.' },
  { role: 'Blacksmiths & gun-founders', as: 'কমাৰ', desc: 'Forged tools, weapons and cannon for the state.' },
  { role: 'Potters & craftsmen', as: 'কুমাৰ, খনিকৰ', desc: 'Made bricks, pottery, carvings and painted work.' },
  { role: 'Boatmen', as: 'নাৱৰীয়া', desc: 'Carried people, goods and armies along the Brahmaputra.' },
  { role: 'Farmers', as: 'খেতিয়ক', desc: 'Worked the land granted to each paik in return for service.' },
  { role: 'Soldiers', as: 'সৈনিক', desc: 'Defended the kingdom in turn, then returned to their fields.' },
];

// Living Heritage page
export const CRAFTS = [
  { name: 'Muga Silk', as: 'মুগা', community: 'Across Upper Assam', place: 'Sualkuchi, Lakhimpur, Sivasagar', desc: 'Golden silk found nowhere else in the world, protected with a Geographical Indication since 2007.' },
  { name: 'Eri Silk', as: 'এৰি', community: 'Bodo, Mising, Karbi and others', place: 'Across Assam', desc: 'Warm “peace silk” spun without killing the silkworm, woven into shawls for every season.' },
  { name: 'Pat Silk', as: 'পাট', community: 'Weaving villages', place: 'Sualkuchi', desc: 'Fine white mulberry silk of the Mekhela-Sador worn at Bihu and weddings.' },
  { name: 'Bell-metal', as: 'কাঁহ', community: 'Kahar artisans', place: 'Sarthebari', desc: 'Hand-beaten bell-metal plates, bowls and the ceremonial Xorai.' },
  { name: 'Xorai', as: 'শৰাই', community: 'Metal workers', place: 'Sarthebari, Hajo', desc: 'Stemmed offering tray that welcomes guests and honours the sacred.' },
  { name: 'Brass Craft', as: 'পিতল', community: 'Moriya artisans', place: 'Hajo', desc: 'Brass vessels and utensils made by the Moriya community for generations.' },
  { name: 'Jaapi', as: 'জাপি', community: 'Bamboo and palm-leaf weavers', place: 'Nalbari and across Assam', desc: 'Wide sun-hat of bamboo and tokou palm, now a symbol of Assamese welcome.' },
  { name: 'Mukha', as: 'মুখা', community: 'Satra artisans', place: 'Samaguri Satra, Majuli', desc: 'Painted masks of bamboo, clay and cloth, worn in Bhaona drama.' },
  { name: 'Gamosa', as: 'গামোচা', community: 'Weavers across Assam', place: 'Every Assamese home', desc: 'White cloth with red phulam borders, given as a mark of respect.' },
  { name: 'Terracotta', as: 'পোৰামাটিৰ শিল্প', community: 'Potter families', place: 'Asharikandi, Dhubri', desc: 'Clay figurines and toys in a centuries-old folk style.' },
];
