/**
 * MENU DATA — Fallback + Google Sheets Loader
 * If Google Sheet URL is configured, data loads from there.
 * Otherwise, FALLBACK_MENU is used.
 */

// ── CATEGORY ICONS (emoji or SVG path) ───────────────────────────────────────
const CATEGORY_ICONS = {
  'الأراكيل الألمانية': '🌿',
  'German Hookahs': '🌿',
  'الأراكيل الطبيعية': '🍍',
  'Natural Hookahs': '🍍',
  'الأراكيل': '💨',
  'Hookahs': '💨',
  'المشاوي': '🔥',
  'Grills': '🔥',
  'الغربي': '🥩',
  'Western': '🥩',
  'الباستا': '🍝',
  'Pasta': '🍝',
  'البيتزا': '🍕',
  'Pizza': '🍕',
  'البرجر': '🍔',
  'Burgers': '🍔',
  'السناك': '🍟',
  'Snacks': '🍟',
  'المقبلات': '🫙',
  'Appetizers': '🫙',
  'العصائر': '🍊',
  'Juices': '🍊',
  'الموهيتو': '🍹',
  'Mojito': '🍹',
  'فروزن': '🧊',
  'Frozen': '🧊',
  'ميلك شيك': '🥛',
  'Milkshake': '🥛',
  'المشاريب الساخنة': '☕',
  'Hot Drinks': '☕',
  'القهوة المثلجة': '☕',
  'Iced Coffee': '☕',
  'الشاي المثلج': '🧋',
  'Iced Tea': '🧋',
  'الشاي': '🍵',
  'Tea': '🍵',
  'الحلويات': '🍮',
  'Desserts': '🍮',
  'الفواكه': '🍓',
  'Fruits': '🍓',
};

// ── FALLBACK MENU DATA (from menu images) ────────────────────────────────────
const FALLBACK_MENU = [
  // الأراكيل الألمانية / German Hookahs
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'انكليزي', name_en: 'English Mix', description_ar: 'مزيج إنجليزي مميز', description_en: 'Premium English mix', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'علج ونعناع', name_en: 'Alej & Mint', description_ar: 'علج مع نعناع طازج', description_en: 'Alej with fresh mint', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'ليمون ونعناع', name_en: 'Lemon & Mint', description_ar: 'ليمون منعش مع نعناع', description_en: 'Refreshing lemon & mint', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'نعناع', name_en: 'Mint', description_ar: 'نعناع نقي', description_en: 'Pure mint', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'Kratos', name_en: 'Kratos', description_ar: 'مزيج كراتوس الخاص', description_en: 'Special Kratos blend', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'Odin', name_en: 'Odin', description_ar: 'مزيج أودين الفريد', description_en: 'Unique Odin blend', price: 15000, image_url: '', available: true },
  { category_ar: 'الأراكيل الألمانية', category_en: 'German Hookahs', name_ar: 'Shadow', name_en: 'Shadow', description_ar: 'مزيج شادو الغامض', description_en: 'Mysterious Shadow blend', price: 15000, image_url: '', available: true },

  // الأراكيل الطبيعية / Natural Hookahs
  { category_ar: 'الأراكيل الطبيعية', category_en: 'Natural Hookahs', name_ar: 'اناناس', name_en: 'Pineapple', description_ar: 'أرجيلة بالأناناس الطبيعي', description_en: 'Natural pineapple hookah', price: 20000, image_url: '', available: true },
  { category_ar: 'الأراكيل الطبيعية', category_en: 'Natural Hookahs', name_ar: 'سندي', name_en: 'Sindi', description_ar: 'مزيج سندي الطبيعي', description_en: 'Natural Sindi blend', price: 20000, image_url: '', available: true },
  { category_ar: 'الأراكيل الطبيعية', category_en: 'Natural Hookahs', name_ar: 'طبيعي VIP', name_en: 'VIP Natural', description_ar: 'تجربة VIP طبيعية فاخرة', description_en: 'Premium VIP natural experience', price: 35000, image_url: '', available: true },

  // الأراكيل / Hookahs (regular)
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'علج ونعناع', name_en: 'Alej & Mint', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'ليمون ونعناع', name_en: 'Lemon & Mint', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'انكليزي', name_en: 'English Mix', description_ar: '', description_en: '', price: 14000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'ليمون', name_en: 'Lemon', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'نعناع', name_en: 'Mint', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'حمضيات', name_en: 'Citrus', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'هوكا', name_en: 'Hookah Special', description_ar: '', description_en: '', price: 14000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'اسبشل', name_en: 'Special', description_ar: '', description_en: '', price: 14000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'عنب', name_en: 'Grape', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'عنب ونعناع', name_en: 'Grape & Mint', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'عنب وتوت', name_en: 'Grape & Berry', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'تفاحتين', name_en: 'Double Apple', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },
  { category_ar: 'الأراكيل', category_en: 'Hookahs', name_ar: 'فواكه', name_en: 'Fruits Mix', description_ar: '', description_en: '', price: 12000, image_url: '', available: true },

  // المشاوي / Grills
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'مشوي مشكل', name_en: 'Mixed Grill', description_ar: 'تشكيلة متنوعة من المشاوي', description_en: 'Variety of grilled meats', price: 28000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'كباب عراقي', name_en: 'Iraqi Kebab', description_ar: 'كباب عراقي تقليدي', description_en: 'Traditional Iraqi kebab', price: 25000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'كباب تركي', name_en: 'Turkish Kebab', description_ar: 'كباب تركي أصيل', description_en: 'Authentic Turkish kebab', price: 25000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'كباب دجاج', name_en: 'Chicken Kebab', description_ar: 'كباب دجاج طازج', description_en: 'Fresh chicken kebab', price: 22000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'كباب لحم بالفستق', name_en: 'Pistachio Meat Kebab', description_ar: 'لحم مشوي بالفستق الحلبي', description_en: 'Grilled meat with pistachio', price: 26000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'كباب بذنجان', name_en: 'Eggplant Kebab', description_ar: 'كباب مع باذنجان مشوي', description_en: 'Kebab with grilled eggplant', price: 27000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'اجنحة', name_en: 'Wings', description_ar: 'اجنحة دجاج مشوية', description_en: 'Grilled chicken wings', price: 24000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'تكة دجاج', name_en: 'Chicken Tikka', description_ar: 'تكة دجاج مشوية', description_en: 'Grilled chicken tikka', price: 21000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'تكة لحم', name_en: 'Meat Tikka', description_ar: 'تكة لحم مشوية', description_en: 'Grilled meat tikka', price: 25000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'عرايس لحم', name_en: 'Meat Arayes', description_ar: 'خبز محشو باللحم المشوي', description_en: 'Bread stuffed with grilled meat', price: 23000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'مسحب دجاج', name_en: 'Pulled Chicken', description_ar: 'دجاج مسحب مشوي', description_en: 'Grilled pulled chicken', price: 23000, image_url: '', available: true },
  { category_ar: 'المشاوي', category_en: 'Grills', name_ar: 'نص متر مشكل', name_en: 'Half Meter Mixed', description_ar: 'نص متر مشاوي مشكلة فاخرة', description_en: 'Premium half meter mixed grill', price: 80000, image_url: '', available: true },

  // الغربي / Western
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'ماشروم ستيك', name_en: 'Mushroom Steak', description_ar: 'ستيك مع صلصة المشروم', description_en: 'Steak with mushroom sauce', price: 26000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'بر ستيك', name_en: 'Plain Steak', description_ar: 'ستيك مشوي', description_en: 'Grilled steak', price: 25000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'تشكن برست', name_en: 'Chicken Breast', description_ar: 'صدر دجاج مشوي', description_en: 'Grilled chicken breast', price: 21000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'تشكن ماشروم', name_en: 'Chicken Mushroom', description_ar: 'دجاج مع صلصة المشروم', description_en: 'Chicken with mushroom sauce', price: 23000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'سالمون', name_en: 'Salmon', description_ar: 'سمك السالمون المشوي', description_en: 'Grilled salmon', price: 26000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'غريلد فيله هامور', name_en: 'Grilled Hammour Fillet', description_ar: 'فيله هامور مشوي', description_en: 'Grilled hammour fillet', price: 21000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'فش ان شيبس', name_en: 'Fish & Chips', description_ar: 'سمك مقلي مع بطاطا', description_en: 'Fried fish with chips', price: 21000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'كوردون بلو', name_en: 'Cordon Bleu', description_ar: 'كوردون بلو الكلاسيكي', description_en: 'Classic cordon bleu', price: 23000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'فاهيتا دجاج', name_en: 'Chicken Fajita', description_ar: 'فاهيتا دجاج مع التوابل', description_en: 'Chicken fajita with spices', price: 19000, image_url: '', available: true },
  { category_ar: 'الغربي', category_en: 'Western', name_ar: 'فاهيتا لحم', name_en: 'Meat Fajita', description_ar: 'فاهيتا لحم مع التوابل', description_en: 'Meat fajita with spices', price: 21000, image_url: '', available: true },

  // الباستا / Pasta
  { category_ar: 'الباستا', category_en: 'Pasta', name_ar: 'فيتوشيني', name_en: 'Fettuccine', description_ar: 'باستا فيتوشيني بالكريمة', description_en: 'Fettuccine pasta with cream', price: 16000, image_url: '', available: true },
  { category_ar: 'الباستا', category_en: 'Pasta', name_ar: 'تشكين بيستو', name_en: 'Chicken Pesto', description_ar: 'باستا دجاج بصلصة البيستو', description_en: 'Chicken pasta with pesto sauce', price: 16000, image_url: '', available: true },
  { category_ar: 'الباستا', category_en: 'Pasta', name_ar: 'باني اربياتا', name_en: 'Penne Arrabbiata', description_ar: 'باني بصلصة الأربياتا', description_en: 'Penne with arrabbiata sauce', price: 15000, image_url: '', available: true },
  { category_ar: 'الباستا', category_en: 'Pasta', name_ar: 'ماك ان تشيز', name_en: 'Mac & Cheese', description_ar: 'ماكروني بالجبن الكريمي', description_en: 'Creamy macaroni and cheese', price: 15000, image_url: '', available: true },

  // البيتزا / Pizza
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا مارجوريتا', name_en: 'Margherita Pizza', description_ar: 'بيتزا مارجوريتا كلاسيكية', description_en: 'Classic margherita pizza', price: 11000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا خضار', name_en: 'Vegetable Pizza', description_ar: 'بيتزا بالخضار الطازجة', description_en: 'Pizza with fresh vegetables', price: 13000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا لحم', name_en: 'Meat Pizza', description_ar: 'بيتزا باللحم المفروم', description_en: 'Pizza with minced meat', price: 16000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا بروني', name_en: 'Broni Pizza', description_ar: 'بيتزا بروني الخاصة', description_en: 'Special Broni pizza', price: 15000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا الفريدو', name_en: 'Alfredo Pizza', description_ar: 'بيتزا بصلصة الفريدو', description_en: 'Pizza with alfredo sauce', price: 16000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا دجاج مقرمش', name_en: 'Crispy Chicken Pizza', description_ar: 'بيتزا بالدجاج المقرمش', description_en: 'Pizza with crispy chicken', price: 15000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا لحم مقدد', name_en: 'Beef Bacon Pizza', description_ar: 'بيتزا باللحم المقدد', description_en: 'Pizza with beef bacon', price: 15000, image_url: '', available: true },
  { category_ar: 'البيتزا', category_en: 'Pizza', name_ar: 'بيتزا حبش', name_en: 'Turkey Pizza', description_ar: 'بيتزا بلحم الحبش', description_en: 'Pizza with turkey meat', price: 13000, image_url: '', available: true },

  // البرجر / Burgers
  { category_ar: 'البرجر', category_en: 'Burgers', name_ar: 'كلاسيك برجر', name_en: 'Classic Burger', description_ar: 'برجر كلاسيكي طازج', description_en: 'Fresh classic burger', price: 11000, image_url: '', available: true },
  { category_ar: 'البرجر', category_en: 'Burgers', name_ar: 'تشكين برجر', name_en: 'Chicken Burger', description_ar: 'برجر دجاج مقرمش', description_en: 'Crispy chicken burger', price: 10000, image_url: '', available: true },
  { category_ar: 'البرجر', category_en: 'Burgers', name_ar: 'دبل برجر', name_en: 'Double Burger', description_ar: 'برجر مزدوج بطبقتين', description_en: 'Double layered burger', price: 15000, image_url: '', available: true },
  { category_ar: 'البرجر', category_en: 'Burgers', name_ar: 'هوكا برجر', name_en: 'Hookah Burger', description_ar: 'برجر هوكا الخاص المميز', description_en: 'Special signature Hookah burger', price: 15000, image_url: '', available: true },
  { category_ar: 'البرجر', category_en: 'Burgers', name_ar: 'ميني برجر', name_en: 'Mini Burger', description_ar: 'ميني برجر لذيذ', description_en: 'Delicious mini burger', price: 6000, image_url: '', available: true },

  // السناك / Snacks
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'بطاطا مقلية', name_en: 'Fried Potatoes', description_ar: 'بطاطا مقلية مقرمشة', description_en: 'Crispy fried potatoes', price: 7000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'بطاطا مقلية بالجبن', name_en: 'Cheese Fries', description_ar: 'بطاطا مقلية مع الجبن', description_en: 'Fries with cheese', price: 8000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'بطاطا مقلية بالدجاج', name_en: 'Chicken Fries', description_ar: 'بطاطا مقلية مع الدجاج', description_en: 'Fries with chicken', price: 9000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'بطاطا مقلية باللحم', name_en: 'Meat Fries', description_ar: 'بطاطا مقلية مع اللحم', description_en: 'Fries with meat', price: 10000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'بطاطا وجز', name_en: 'Wedge Fries', description_ar: 'بطاطا وجز مقرمشة', description_en: 'Crispy wedge fries', price: 8000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'حلقات بصل', name_en: 'Onion Rings', description_ar: 'حلقات بصل مقلية', description_en: 'Crispy onion rings', price: 6000, image_url: '', available: true },
  { category_ar: 'السناك', category_en: 'Snacks', name_ar: 'اصابع موزيريلا', name_en: 'Mozzarella Sticks', description_ar: 'اصابع جبن الموزيريلا', description_en: 'Crispy mozzarella sticks', price: 7000, image_url: '', available: true },

  // المقبلات / Appetizers
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'حمص بطحينة', name_en: 'Hummus', description_ar: 'حمص كريمي بالطحينة', description_en: 'Creamy hummus with tahini', price: 6000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'حمص ريحان', name_en: 'Basil Hummus', description_ar: 'حمص بالريحان الطازج', description_en: 'Hummus with fresh basil', price: 7000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'حمص زعتر وسماق', name_en: 'Thyme & Sumac Hummus', description_ar: 'حمص بالزعتر والسماق', description_en: 'Hummus with thyme & sumac', price: 7000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'حمص زيتون', name_en: 'Olive Hummus', description_ar: 'حمص مع الزيتون', description_en: 'Hummus with olives', price: 7000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'حمص باللحمة', name_en: 'Meat Hummus', description_ar: 'حمص مع اللحم المفروم', description_en: 'Hummus with minced meat', price: 10000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'متبل بذنجان', name_en: 'Eggplant Mutabbal', description_ar: 'متبل باذنجان مشوي', description_en: 'Grilled eggplant mutabbal', price: 6000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'باب غنوج', name_en: 'Baba Ganouj', description_ar: 'بابا غنوج تقليدي', description_en: 'Traditional baba ganouj', price: 6000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'بذنجانية', name_en: 'Eggplant Salad', description_ar: 'سلطة باذنجان', description_en: 'Eggplant salad', price: 6000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'جاجيك', name_en: 'Tzatziki', description_ar: 'جاجيك يوناني بالخيار', description_en: 'Greek tzatziki with cucumber', price: 6000, image_url: '', available: true },
  { category_ar: 'المقبلات', category_en: 'Appetizers', name_ar: 'يالنجي', name_en: 'Dolma', description_ar: 'أوراق عنب محشوة', description_en: 'Stuffed grape leaves', price: 8000, image_url: '', available: true },

  // العصائر / Juices
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'برتقال', name_en: 'Orange Juice', description_ar: 'عصير برتقال طازج', description_en: 'Fresh orange juice', price: 8500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'ليمون نعناع', name_en: 'Lemon Mint', description_ar: 'ليمون طازج مع نعناع', description_en: 'Fresh lemon with mint', price: 8500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'فراولة', name_en: 'Strawberry', description_ar: 'عصير فراولة طازج', description_en: 'Fresh strawberry juice', price: 8500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'اناناس', name_en: 'Pineapple', description_ar: 'عصير اناناس طازج', description_en: 'Fresh pineapple juice', price: 9500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'مانكو', name_en: 'Mango', description_ar: 'عصير مانجو طازج', description_en: 'Fresh mango juice', price: 9500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'رمان', name_en: 'Pomegranate', description_ar: 'عصير رمان طازج', description_en: 'Fresh pomegranate juice', price: 10000, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'جزر', name_en: 'Carrot', description_ar: 'عصير جزر طازج', description_en: 'Fresh carrot juice', price: 7500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'بطيخ', name_en: 'Watermelon', description_ar: 'عصير بطيخ طازج', description_en: 'Fresh watermelon juice', price: 7500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'تفاح اخضر', name_en: 'Green Apple', description_ar: 'عصير تفاح اخضر', description_en: 'Green apple juice', price: 9500, image_url: '', available: true },
  { category_ar: 'العصائر', category_en: 'Juices', name_ar: 'موز وحليب', name_en: 'Banana Milk', description_ar: 'موز مع الحليب الطازج', description_en: 'Banana with fresh milk', price: 8000, image_url: '', available: true },

  // الموهيتو / Mojito
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'فيرجن', name_en: 'Virgin', description_ar: 'موهيتو فيرجن كلاسيكي', description_en: 'Classic virgin mojito', price: 8000, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'اولكو', name_en: 'Olko', description_ar: 'موهيتو اولكو', description_en: 'Olko mojito', price: 8500, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'بانول', name_en: 'Banol', description_ar: 'موهيتو بانول', description_en: 'Banol mojito', price: 8500, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'نازلي', name_en: 'Nazli', description_ar: 'موهيتو نازلي', description_en: 'Nazli mojito', price: 8000, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'نايترو', name_en: 'Nitro', description_ar: 'موهيتو نايترو', description_en: 'Nitro mojito', price: 8000, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'مكسيكي', name_en: 'Mexican', description_ar: 'موهيتو مكسيكي', description_en: 'Mexican mojito', price: 7000, image_url: '', available: true },
  { category_ar: 'الموهيتو', category_en: 'Mojito', name_ar: 'لفنت', name_en: 'Levant', description_ar: 'موهيتو لفنت', description_en: 'Levant mojito', price: 9000, image_url: '', available: true },

  // فروزن / Frozen
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'هوكا', name_en: 'Hookah Frozen', description_ar: 'مشروب هوكا مثلج', description_en: 'Hookah frozen drink', price: 11000, image_url: '', available: true },
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'مانكولاسيه', name_en: 'Mancolasie', description_ar: 'مشروب مانكولاسيه المثلج', description_en: 'Frozen Mancolasie drink', price: 10000, image_url: '', available: true },
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'ديتوكس', name_en: 'Detox', description_ar: 'مشروب ديتوكس مثلج', description_en: 'Frozen detox drink', price: 9500, image_url: '', available: true },
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'تروبيكال', name_en: 'Tropical', description_ar: 'مشروب تروبيكال مثلج', description_en: 'Frozen tropical drink', price: 10000, image_url: '', available: true },
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'بيانا كولدا', name_en: 'Piana Colda', description_ar: 'مشروب بيانا كولدا', description_en: 'Piana Colda frozen drink', price: 9500, image_url: '', available: true },
  { category_ar: 'فروزن', category_en: 'Frozen', name_ar: 'ماري', name_en: 'Mary', description_ar: 'مشروب ماري المثلج', description_en: 'Frozen Mary drink', price: 8500, image_url: '', available: true },

  // ميلك شيك / Milkshake
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'هوكا شيك', name_en: 'Hookah Shake', description_ar: 'ميلك شيك هوكا الخاص', description_en: 'Special Hookah milkshake', price: 10000, image_url: '', available: true },
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'اوريو شيك', name_en: 'Oreo Shake', description_ar: 'ميلك شيك أوريو', description_en: 'Oreo milkshake', price: 9500, image_url: '', available: true },
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'كرانشي شيك', name_en: 'Crunchy Shake', description_ar: 'ميلك شيك كرانشي', description_en: 'Crunchy milkshake', price: 9500, image_url: '', available: true },
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'فريز شيك', name_en: 'Strawberry Shake', description_ar: 'ميلك شيك فراولة', description_en: 'Strawberry milkshake', price: 9500, image_url: '', available: true },
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'لوتس شيك', name_en: 'Lotus Shake', description_ar: 'ميلك شيك لوتس', description_en: 'Lotus milkshake', price: 9500, image_url: '', available: true },
  { category_ar: 'ميلك شيك', category_en: 'Milkshake', name_ar: 'بستاشيو شيك', name_en: 'Pistachio Shake', description_ar: 'ميلك شيك بستاشيو', description_en: 'Pistachio milkshake', price: 9500, image_url: '', available: true },

  // المشاريب الساخنة / Hot Drinks
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'اسبريسو', name_en: 'Espresso', description_ar: 'اسبريسو إيطالي أصيل', description_en: 'Authentic Italian espresso', price: 5000, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'لاتية', name_en: 'Latte', description_ar: 'لاتية كريمية', description_en: 'Creamy latte', price: 7500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'لاتية نكهات', name_en: 'Flavored Latte', description_ar: 'لاتية بنكهات متعددة', description_en: 'Latte with various flavors', price: 8500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'كابتشينو', name_en: 'Cappuccino', description_ar: 'كابتشينو إيطالي', description_en: 'Italian cappuccino', price: 7500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'موكا', name_en: 'Mocha', description_ar: 'موكا بالشوكولاتة', description_en: 'Mocha with chocolate', price: 8500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'نسكافيه', name_en: 'Nescafe', description_ar: 'نسكافيه دافئ', description_en: 'Warm nescafe', price: 7000, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'امريكانو', name_en: 'Americano', description_ar: 'أمريكانو حار', description_en: 'Hot americano', price: 6500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'قهوة فرنسية', name_en: 'French Coffee', description_ar: 'قهوة فرنسية كلاسيكية', description_en: 'Classic French coffee', price: 6500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'قهوة تركية', name_en: 'Turkish Coffee', description_ar: 'قهوة تركية أصيلة', description_en: 'Authentic Turkish coffee', price: 5000, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'هوت جوكليت', name_en: 'Hot Chocolate', description_ar: 'شوكولاتة ساخنة', description_en: 'Hot chocolate', price: 7500, image_url: '', available: true },
  { category_ar: 'المشاريب الساخنة', category_en: 'Hot Drinks', name_ar: 'سحلب', name_en: 'Sahlab', description_ar: 'سحلب دافئ بالقرفة', description_en: 'Warm sahlab with cinnamon', price: 7500, image_url: '', available: true },

  // القهوة المثلجة / Iced Coffee
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'ايس لاتيه', name_en: 'Iced Latte', description_ar: 'لاتيه بارد مثلج', description_en: 'Cold iced latte', price: 7500, image_url: '', available: true },
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'ايس لاتيه نكهات', name_en: 'Iced Flavored Latte', description_ar: 'لاتيه بارد بنكهات', description_en: 'Cold flavored iced latte', price: 8500, image_url: '', available: true },
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'ايس موكا', name_en: 'Iced Mocha', description_ar: 'موكا بارد مثلج', description_en: 'Cold iced mocha', price: 8500, image_url: '', available: true },
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'ايس امريكانو', name_en: 'Iced Americano', description_ar: 'أمريكانو بارد', description_en: 'Cold iced americano', price: 7000, image_url: '', available: true },
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'فرابتشينو كرميل', name_en: 'Caramel Frappuccino', description_ar: 'فرابتشينو بالكراميل', description_en: 'Caramel frappuccino', price: 8500, image_url: '', available: true },
  { category_ar: 'القهوة المثلجة', category_en: 'Iced Coffee', name_ar: 'فرابتشينو كوكيز', name_en: 'Cookies Frappuccino', description_ar: 'فرابتشينو بالكوكيز', description_en: 'Cookies frappuccino', price: 8500, image_url: '', available: true },

  // الشاي المثلج / Iced Tea
  { category_ar: 'الشاي المثلج', category_en: 'Iced Tea', name_ar: 'ايس تي كركدي', name_en: 'Iced Hibiscus Tea', description_ar: 'شاي كركدي بارد', description_en: 'Cold hibiscus iced tea', price: 7000, image_url: '', available: true },
  { category_ar: 'الشاي المثلج', category_en: 'Iced Tea', name_ar: 'ايس تي خوخ', name_en: 'Peach Iced Tea', description_ar: 'شاي خوخ بارد', description_en: 'Cold peach iced tea', price: 7000, image_url: '', available: true },
  { category_ar: 'الشاي المثلج', category_en: 'Iced Tea', name_ar: 'ايس تي ليمون', name_en: 'Lemon Iced Tea', description_ar: 'شاي ليمون بارد', description_en: 'Cold lemon iced tea', price: 7000, image_url: '', available: true },
  { category_ar: 'الشاي المثلج', category_en: 'Iced Tea', name_ar: 'هوكا ايس تي', name_en: 'Hookah Iced Tea', description_ar: 'شاي هوكا الخاص البارد', description_en: 'Special cold Hookah iced tea', price: 8500, image_url: '', available: true },

  // الشاي / Tea
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي كرك', name_en: 'Karak Tea', description_ar: 'شاي كرك بالهيل', description_en: 'Karak tea with cardamom', price: 6000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي زنجبيل وعسل', name_en: 'Ginger Honey Tea', description_ar: 'شاي بالزنجبيل والعسل', description_en: 'Tea with ginger and honey', price: 6000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي رمان', name_en: 'Pomegranate Tea', description_ar: 'شاي رمان منعش', description_en: 'Refreshing pomegranate tea', price: 6000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي اعشاب', name_en: 'Herbal Tea', description_ar: 'شاي أعشاب طبيعي', description_en: 'Natural herbal tea', price: 5000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي اخضر بالنعناع', name_en: 'Mint Green Tea', description_ar: 'شاي أخضر بالنعناع', description_en: 'Green tea with mint', price: 5000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي عراقي كوب', name_en: 'Iraqi Tea (Cup)', description_ar: 'شاي عراقي أصيل - كوب', description_en: 'Authentic Iraqi tea - cup', price: 2000, image_url: '', available: true },
  { category_ar: 'الشاي', category_en: 'Tea', name_ar: 'شاي عراقي', name_en: 'Iraqi Tea', description_ar: 'شاي عراقي تقليدي', description_en: 'Traditional Iraqi tea', price: 1000, image_url: '', available: true },

  // الحلويات / Desserts
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'سوشي كريب', name_en: 'Sushi Crepe', description_ar: 'كريب بشكل السوشي', description_en: 'Crepe in sushi style', price: 10000, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'فوتشينو كريب', name_en: 'Focchinno Crepe', description_ar: 'كريب فوتشينو', description_en: 'Focchinno crepe', price: 10000, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'بان كيك هوكا', name_en: 'Hookah Pancake', description_ar: 'بان كيك هوكا الخاص', description_en: 'Special Hookah pancake', price: 9000, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'كريب نوتيلا', name_en: 'Nutella Crepe', description_ar: 'كريب بالنوتيلا', description_en: 'Crepe with Nutella', price: 8500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'كريب لوتس', name_en: 'Lotus Crepe', description_ar: 'كريب بكريمة اللوتس', description_en: 'Crepe with lotus cream', price: 9500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'كريب اوريو', name_en: 'Oreo Crepe', description_ar: 'كريب بالأوريو', description_en: 'Crepe with Oreo', price: 9500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'وافل نوتيلا', name_en: 'Nutella Waffle', description_ar: 'وافل بالنوتيلا', description_en: 'Waffle with Nutella', price: 8500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'وافل لوتس', name_en: 'Lotus Waffle', description_ar: 'وافل بكريمة اللوتس', description_en: 'Waffle with lotus cream', price: 9500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'وافل اوريو', name_en: 'Oreo Waffle', description_ar: 'وافل بالأوريو', description_en: 'Waffle with Oreo', price: 9500, image_url: '', available: true },
  { category_ar: 'الحلويات', category_en: 'Desserts', name_ar: 'وافل بستاشيو', name_en: 'Pistachio Waffle', description_ar: 'وافل بالبستاشيو', description_en: 'Waffle with pistachio', price: 9500, image_url: '', available: true },

  // الفواكه / Fruits
  { category_ar: 'الفواكه', category_en: 'Fruits', name_ar: 'طبق فواكه وسط', name_en: 'Medium Fruit Plate', description_ar: 'طبق فواكه موسمية - حجم وسط', description_en: 'Seasonal fruit plate - medium', price: 15000, image_url: '', available: true },
  { category_ar: 'الفواكه', category_en: 'Fruits', name_ar: 'طبق فواكه كبير', name_en: 'Large Fruit Plate', description_ar: 'طبق فواكه موسمية - حجم كبير', description_en: 'Seasonal fruit plate - large', price: 25000, image_url: '', available: true },
  { category_ar: 'الفواكه', category_en: 'Fruits', name_ar: 'سلطة فواكه هوكا', name_en: 'Hookah Fruit Salad', description_ar: 'سلطة فواكه خاصة بهوكا', description_en: 'Special Hookah fruit salad', price: 10000, image_url: '', available: true },
];

// ── GOOGLE SHEETS CSV PARSER ──────────────────────────────────────────────────
async function loadMenuFromSheets() {
  if (!CONFIG.SHEET_CSV_URL) return null;

  try {
    // Use a CORS proxy since browsers block cross-origin requests
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(CONFIG.SHEET_CSV_URL)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Failed to fetch');
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (err) {
    console.warn('Could not load from Google Sheets, using fallback data.', err);
    return null;
  }
}

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return null;

  // Parse header
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, '').toLowerCase());

  const items = [];
  for (let i = 1; i < lines.length; i++) {
    const values = splitCSVRow(lines[i]);
    if (values.length < 3) continue;

    const row = {};
    headers.forEach((h, idx) => {
      row[h] = (values[idx] || '').trim().replace(/^"|"$/g, '');
    });

    if (row.available && row.available.toUpperCase() === 'FALSE') continue;

    items.push({
      category_ar: row['category_ar'] || row['category'] || 'عام',
      category_en: row['category_en'] || row['category'] || 'General',
      name_ar: row['name_ar'] || row['name'] || '',
      name_en: row['name_en'] || row['name'] || '',
      description_ar: row['description_ar'] || row['description'] || '',
      description_en: row['description_en'] || row['description'] || '',
      price: parseFloat(row['price']) || 0,
      image_url: row['image_url'] || row['image'] || '',
      available: true,
    });
  }
  return items.length > 0 ? items : null;
}

function splitCSVRow(row) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === ',' && !inQuotes) { result.push(current); current = ''; continue; }
    current += ch;
  }
  result.push(current);
  return result;
}

// ── MAIN LOADER ───────────────────────────────────────────────────────────────
async function getMenuData() {
  const sheetData = await loadMenuFromSheets();
  return sheetData || FALLBACK_MENU;
}
