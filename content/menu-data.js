/* Paillote / UN Beach — menu content. Edit prices and texts here only. */
window.MENU_DATA = {
 "schema": "swissadvert.menu/0.1",
 "venue": {
  "name": "La Paillote",
  "brand": "UN Beach",
  "parent": "U.N. Port",
  "logo": "assets/img/logo-un-port.png",
  "logoAlt": "Logo U.N. Port",
  "hero": {
   "image": "images/hero-paillote.jpg",
   "imageSmall": "images/hero-paillote-800.jpg",
   "imageFocus": "50% 45%",
   "alt": "Bar de plage au toit de paille au bord d’un lac, en fin d’après-midi"
  },
  "title": "La carte de la Paillote",
  "notice": "L’ouverture de la Paillote dépend de la météo et de la fréquentation de la plage.",
  "noticeSource": "https://www.unport.org/paillote — « The opening of La Paillote is subject to weather conditions and the number of visitors to the beach. » (traduction FR brouillon)",
  "currency": "CHF",
  "language": "fr",
  "source": "https://www.unport.org/paillote-menu",
  "sourceChecked": "2026-10-01",
  "provider": "Swiss Advert Studio"
 },
 "groups": [
  {
   "id": "manger",
   "title": "À manger"
  },
  {
   "id": "boire",
   "title": "À boire"
  }
 ],
 "categories": [
  {
   "id": "chips",
   "group": "manger",
   "title": "Chips",
   "icon": "chips",
   "image": "images/cat-chips.jpg",
   "imageAlt": "Chips servies dans un bol au bord du lac",
   "sections": [
    {
     "title": "Chips",
     "items": [
      {
       "name": "Classic",
       "price": 4,
       "image": null,
       "id": "chips--classic"
      },
      {
       "name": "Paprika",
       "price": 4,
       "image": null,
       "id": "chips--paprika"
      },
      {
       "name": "Provençale",
       "price": 4,
       "image": null,
       "id": "chips--provencale"
      },
      {
       "name": "Wave Inferno",
       "sourceName": "Wave Inferno - Spicy",
       "price": 4,
       "tags": [
        "spicy"
       ],
       "image": null,
       "id": "chips--wave-inferno-spicy"
      }
     ],
     "sourceTitle": "Chips"
    }
   ],
   "imageSmall": "images/cat-chips-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "hot-dogs",
   "group": "manger",
   "title": "Hot Dogs",
   "icon": "hotdog",
   "image": "images/cat-hot-dogs.jpg",
   "imageAlt": "Hot dog servi sur une table en bois au bord de l’eau",
   "sections": [
    {
     "title": "Hot Dogs",
     "items": [
      {
       "name": "The Original",
       "desc": "Saucisse de volaille de la boucherie Suter, pickles, oignons croustillants, 2 sauces au choix",
       "descStatus": "draft-fr",
       "descSource": "Poultry sausage from Suter butcher shop, Pickles, Crispy onion, 2 sauces of your choice",
       "price": 8,
       "image": "images/p-hot-dog-original.jpg",
       "review": "Le site indique « 2 sauces of your choice » sans lister les sauces. Liste à fournir.",
       "id": "hot-dogs--the-original",
       "imageSmall": "images/p-hot-dog-original-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "The Avocado",
       "desc": "Saucisse de volaille de la boucherie Suter, guacamole, jalapeños (un peu épicés), oignons croustillants, 2 sauces au choix.",
       "descStatus": "draft-fr",
       "descSource": "Poultry sausage from Suter butcher shop, Guacamole, Jalapeños (little spicy), Crispy onions, 2 sauces of your choice.",
       "price": 9,
       "image": "images/p-hot-dog-avocado.jpg",
       "review": "Le site indique « 2 sauces of your choice » sans lister les sauces. Liste à fournir.",
       "id": "hot-dogs--the-avocado",
       "imageSmall": "images/p-hot-dog-avocado-800.jpg",
       "imageFocus": "50% 65%"
      }
     ],
     "sourceTitle": "Hot Dog"
    }
   ],
   "imageSmall": "images/cat-hot-dogs-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "finger-food",
   "group": "manger",
   "title": "Finger Food",
   "icon": "finger",
   "image": "images/cat-finger-food.jpg",
   "imageAlt": "Assortiment de finger food à partager",
   "sections": [
    {
     "title": "Finger Food",
     "items": [
      {
       "name": "Beef Empanada",
       "desc": "Chausson croustillant garni de bœuf haché assaisonné, d’oignons et d’épices.",
       "descStatus": "draft-fr",
       "descSource": "Crispy pastry turnover filled with seasoned ground beef, onions, and spices.",
       "price": 7,
       "image": "images/p-beef-empanada.jpg",
       "id": "finger-food--beef-empanada",
       "imageSmall": "images/p-beef-empanada-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Breaded Jalapeños",
       "sourceName": "Breaded Jalapeños - Spicy",
       "desc": "Fourrés au fromage frais, servis avec une sauce salsa",
       "descStatus": "draft-fr",
       "descSource": "With cream cheese inside and served with Salsa sauce",
       "price": 9,
       "tags": [
        "spicy"
       ],
       "image": "images/p-breaded-jalapenos.jpg",
       "id": "finger-food--breaded-jalapenos-spicy",
       "imageSmall": "images/p-breaded-jalapenos-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Breaded Mozza balls x 8",
       "desc": "Servies avec une sauce salsa",
       "descStatus": "draft-fr",
       "descSource": "Served with Salsa sauce",
       "price": 8.5,
       "image": "images/p-mozza-balls.jpg",
       "id": "finger-food--breaded-mozza-balls-x-8",
       "imageSmall": "images/p-mozza-balls-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Caprese Empanada",
       "desc": "Chausson doré garni d’un mélange fondant de mozzarella, de tomates fraîches et de basilic aromatique.",
       "descStatus": "draft-fr",
       "descSource": "A golden pastry filled with a melted blend of mozzarella cheese, fresh tomatoes, and aromatic basil.",
       "price": 6.5,
       "image": "images/p-caprese-empanada.jpg",
       "id": "finger-food--caprese-empanada",
       "imageSmall": "images/p-caprese-empanada-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Houmous",
       "desc": "Servi avec des tortillas de blé",
       "descStatus": "draft-fr",
       "descSource": "Served with wheat tortillas",
       "price": 8,
       "image": "images/p-houmous.jpg",
       "id": "finger-food--houmous",
       "imageSmall": "images/p-houmous-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Guacamole & Tortillas chips",
       "price": 7,
       "image": "images/p-guacamole.jpg",
       "review": "Pas de description sur le site (seulement un point « . »).",
       "id": "finger-food--guacamole-tortillas-chips",
       "imageSmall": "images/p-guacamole-800.jpg",
       "imageFocus": "50% 65%"
      }
     ],
     "sourceTitle": "Finger Food"
    }
   ],
   "imageSmall": "images/cat-finger-food-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "vins-bulles",
   "group": "boire",
   "title": "Vins & Bulles",
   "icon": "wine",
   "image": "images/cat-vins-bulles.jpg",
   "imageAlt": "Verres de rosé et de prosecco au coucher du soleil sur le lac",
   "sections": [
    {
     "title": "Au verre",
     "items": [
      {
       "name": "Rosé de Provence",
       "price": 6.5,
       "image": null,
       "id": "vins-bulles--rose-de-provence"
      },
      {
       "name": "White - Chardonnay",
       "price": 6.5,
       "image": null,
       "id": "vins-bulles--white-chardonnay"
      },
      {
       "name": "Prosecco",
       "price": 8,
       "image": null,
       "id": "vins-bulles--prosecco"
      }
     ],
     "sourceTitle": "Wines — By the Glass",
     "review": "Contenance du verre non indiquée."
    },
    {
     "title": "Demi-bouteille",
     "items": [
      {
       "name": "Rosé - Côtes de Provence - D. des Lavandes",
       "price": 27,
       "image": null,
       "id": "vins-bulles--rose-cotes-de-provence-d-des-lavandes"
      }
     ],
     "sourceTitle": "Wines — Half Bottle"
    },
    {
     "title": "Bouteille",
     "items": [
      {
       "name": "Rosé - Côtes de Provence - D. de Figuière",
       "price": 35,
       "image": null,
       "id": "vins-bulles--rose-cotes-de-provence-d-de-figuiere"
      },
      {
       "name": "White - Viognier",
       "price": 39,
       "image": null,
       "review": "Producteur / origine non indiqués.",
       "id": "vins-bulles--white-viognier"
      }
     ],
     "sourceTitle": "Wines — Bottle"
    },
    {
     "title": "Bulles — bouteille",
     "items": [
      {
       "name": "Prosecco Spumante",
       "price": 40,
       "image": null,
       "id": "vins-bulles--prosecco-spumante"
      }
     ],
     "sourceTitle": "Bubbles — Bottle"
    }
   ],
   "imageSmall": "images/cat-vins-bulles-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "bieres",
   "group": "boire",
   "title": "Bières",
   "icon": "beer",
   "image": "images/cat-bieres.jpg",
   "imageAlt": "Bières pression fraîches sur une table au bord du lac",
   "sections": [
    {
     "title": "Pression",
     "items": [
      {
       "name": "Super Bock Blonde",
       "variants": [
        {
         "label": "30 cl",
         "price": 5
        },
        {
         "label": "50 cl",
         "price": 7.5
        },
        {
         "label": "1,5 L",
         "price": 21
        }
       ],
       "image": null,
       "id": "bieres--super-bock-blonde"
      },
      {
       "name": "1664 Blanche - White",
       "variants": [
        {
         "label": "30 cl",
         "price": 6
        },
        {
         "label": "50 cl",
         "price": 8.5
        },
        {
         "label": "1,5 L",
         "price": 24
        }
       ],
       "image": null,
       "id": "bieres--1664-blanche-white"
      },
      {
       "name": "Brooklyn Stonewall Inn - IPA",
       "variants": [
        {
         "label": "30 cl",
         "price": 7
        },
        {
         "label": "50 cl",
         "price": 10
        },
        {
         "label": "1,5 L",
         "price": 28
        }
       ],
       "image": null,
       "id": "bieres--brooklyn-stonewall-inn-ipa"
      }
     ],
     "sourceTitle": "Beers — Draft (30cl / 50cl / 1.5L)"
    },
    {
     "title": "Bouteille 33 cl",
     "items": [
      {
       "name": "Corona",
       "price": 8,
       "image": null,
       "id": "bieres--corona"
      },
      {
       "name": "Super Bock 0,0%",
       "price": 5,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "bieres--super-bock-0-0"
      }
     ],
     "sourceTitle": "Beers — Bottle 33cl"
    }
   ],
   "imageSmall": "images/cat-bieres-800.jpg",
   "imageFocus": "50% 40%"
  },
  {
   "id": "cocktails",
   "group": "boire",
   "title": "Cocktails & Long Drinks",
   "icon": "cocktail",
   "image": "images/cat-cocktails.jpg",
   "imageAlt": "Cocktails colorés sur le ponton au soleil",
   "sections": [
    {
     "title": "Cocktails",
     "items": [
      {
       "name": "Apérol Spritz",
       "price": 14,
       "image": null,
       "id": "cocktails--aperol-spritz"
      },
      {
       "name": "Lillet Spritz",
       "price": 14,
       "image": null,
       "id": "cocktails--lillet-spritz"
      },
      {
       "name": "Campari Spritz",
       "price": 14,
       "image": null,
       "id": "cocktails--campari-spritz"
      },
      {
       "name": "Hugo",
       "price": 14,
       "image": null,
       "id": "cocktails--hugo"
      },
      {
       "name": "Moscow Mule",
       "price": 15,
       "image": null,
       "id": "cocktails--moscow-mule"
      },
      {
       "name": "London Mule",
       "price": 15,
       "image": null,
       "id": "cocktails--london-mule"
      },
      {
       "name": "Mojito",
       "price": 15,
       "image": null,
       "id": "cocktails--mojito"
      },
      {
       "name": "Caïpirinha",
       "price": 15,
       "image": null,
       "id": "cocktails--caipirinha"
      }
     ],
     "sourceTitle": "Cocktails",
     "note": "Avec coulis de fruits — pêche / passion / fraise : + 1.–",
     "review": "Le supplément coulis est listé après la Caïpirinha : s’applique-t-il à tous les cocktails ?"
    },
    {
     "title": "Long Drinks",
     "items": [
      {
       "name": "Whiskey, Gin, White Rum, Vodka, Tequila",
       "price": 15,
       "image": null,
       "id": "cocktails--whiskey-gin-white-rum-vodka-tequila"
      },
      {
       "name": "Amber Rum, Amber Tequila",
       "price": 17,
       "image": null,
       "id": "cocktails--amber-rum-amber-tequila"
      },
      {
       "name": "Gin Tanquery",
       "price": 17,
       "image": null,
       "review": "Orthographe source « Tanquery » (Tanqueray ?). Conservée.",
       "id": "cocktails--gin-tanquery"
      }
     ],
     "sourceTitle": "Long Drinks",
     "note": "Avec Red Bull : + 2.–",
     "review": "Le mixer des long drinks n’est pas précisé."
    }
   ],
   "imageSmall": "images/cat-cocktails-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "buckets",
   "group": "boire",
   "title": "Buckets",
   "icon": "bucket",
   "image": "images/cat-buckets.jpg",
   "imageAlt": "Seau à cocktail à partager entre amis sur la plage",
   "sections": [
    {
     "title": "Buckets 1,5 L = 5 cocktails",
     "items": [
      {
       "name": "Berry Breeze",
       "desc": "Lillet Berry, limonade, jus de cranberry",
       "descStatus": "draft-fr",
       "descSource": "Lillet Berry, Lemonade, Cranberry juice",
       "price": 45,
       "image": "images/p-bucket-berry-breeze.jpg",
       "id": "buckets--berry-breeze",
       "imageSmall": "images/p-bucket-berry-breeze-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Peach Club",
       "desc": "Lillet Peach, thé froid pêche, jus de citron",
       "descStatus": "draft-fr",
       "descSource": "Lillet Peach, Iced tea peach, Lemon juice",
       "price": 45,
       "image": null,
       "id": "buckets--peach-club"
      },
      {
       "name": "Golden Hour",
       "desc": "Lillet Berry & Lillet Peach, limonade",
       "descStatus": "draft-fr",
       "descSource": "Lillet Berry & Lillet Peach, Lemonade",
       "price": 45,
       "image": null,
       "id": "buckets--golden-hour"
      },
      {
       "name": "Pastis Fresh",
       "desc": "Ricard prêt à boire, eau, jus de citron, sirop si vous le souhaitez",
       "descStatus": "draft-fr",
       "descSource": "Ricard ready to drink, Water, Lemon juice, Syrup if you want",
       "price": 38,
       "image": null,
       "id": "buckets--pastis-fresh"
      },
      {
       "name": "Tequila Sunrise",
       "desc": "Tequila, jus d’orange, sirop de grenadine",
       "descStatus": "draft-fr",
       "descSource": "Tequila, Orange juice, Grenadine syrup",
       "price": 42,
       "image": null,
       "id": "buckets--tequila-sunrise"
      },
      {
       "name": "Gin Fizz",
       "desc": "Gin, jus de citron vert, sirop de sucre, eau gazeuse",
       "descStatus": "draft-fr",
       "descSource": "Gin, Lime juice, Sugar syrup, Sparkling water",
       "price": 40,
       "image": null,
       "id": "buckets--gin-fizz"
      },
      {
       "name": "Flamingo",
       "desc": "Rhum blanc, jus d’ananas et d’orange, sirop de grenadine, jus de citron",
       "descStatus": "draft-fr",
       "descSource": "White Rhum, Pineapple and Orange juices, Grenadine syrup, Lemon juice",
       "price": 50,
       "image": "images/p-bucket-flamingo.jpg",
       "id": "buckets--flamingo",
       "imageSmall": "images/p-bucket-flamingo-800.jpg",
       "imageFocus": "50% 65%"
      },
      {
       "name": "Blue Flamingo",
       "desc": "Vodka, rhum blanc, jus d’ananas et de cranberry, sirop de curaçao, jus de citron",
       "descStatus": "draft-fr",
       "descSource": "Vodka, White Rhum, Pineapple and Cranberry juices, Curaçao syrup, Lemon juice",
       "price": 54,
       "image": null,
       "id": "buckets--blue-flamingo"
      },
      {
       "name": "Long Drink au choix",
       "sourceName": "Long Drink of you choice",
       "price": 54,
       "image": null,
       "review": "Faute de frappe source « of you choice ».",
       "id": "buckets--long-drink-of-you-choice"
      },
      {
       "name": "Long Drink premium",
       "sourceName": "Long Drink with premium alcohol",
       "desc": "Long drink avec alcool premium",
       "descStatus": "draft-fr",
       "descSource": "Long Drink with premium alcohol",
       "price": 62,
       "image": null,
       "id": "buckets--long-drink-with-premium-alcohol"
      }
     ],
     "sourceTitle": "Buckets 1.5L = 5 Cocktails",
     "note": "Avec alcool. Version sans alcool : voir « Sans alcool »."
    }
   ],
   "imageSmall": "images/cat-buckets-800.jpg",
   "imageFocus": "50% 40%"
  },
  {
   "id": "aperitifs-shots",
   "group": "boire",
   "title": "Apéritifs & Shots",
   "icon": "shot",
   "image": "images/cat-aperitifs.jpg",
   "imageAlt": "Apéritifs prêts à boire servis frais au bord du lac",
   "sections": [
    {
     "title": "Apéritifs — 20 cl",
     "items": [
      {
       "name": "Lillet Berry",
       "sourceName": "Lillet Berry 5% - 20cl",
       "desc": "Lillet Blanc Original, tonic aux fruits rouges, arômes 100 % naturels de fraise et de framboise.",
       "descStatus": "draft-fr",
       "descSource": "Lillet Blanc Original, tonic water with red berries, and 100% natural strawberry and raspberry flavours.",
       "price": 6.5,
       "image": null,
       "note": "5 % vol.",
       "id": "aperitifs-shots--lillet-berry-5-20cl"
      },
      {
       "name": "Lillet Peach",
       "sourceName": "Lillet Peach 5% - 20cl",
       "desc": "Lillet Rosé, rehaussé d’arômes naturels de pêche blanche et jaune.",
       "descStatus": "draft-fr",
       "descSource": "Lillet Rosé, enhanced with natural white and yellow peach flavours.",
       "price": 6.5,
       "image": null,
       "note": "5 % vol.",
       "id": "aperitifs-shots--lillet-peach-5-20cl"
      },
      {
       "name": "Ricard ready to drink",
       "sourceName": "Ricard ready to drink 4,5% - 20cl",
       "price": 6.5,
       "image": null,
       "note": "4,5 % vol.",
       "id": "aperitifs-shots--ricard-ready-to-drink-4-5-20cl"
      }
     ],
     "sourceTitle": "Aperitifs"
    },
    {
     "title": "Shots",
     "items": [
      {
       "name": "Alcool standard",
       "sourceName": "Basic alcohol",
       "price": 6,
       "image": null,
       "id": "aperitifs-shots--basic-alcohol"
      },
      {
       "name": "Alcool premium",
       "sourceName": "Premium alcohol",
       "price": 8,
       "image": null,
       "id": "aperitifs-shots--premium-alcohol"
      }
     ],
     "sourceTitle": "Shots",
     "review": "Liste des alcools « basic » / « premium » et contenance non indiquées."
    }
   ],
   "imageSmall": "images/cat-aperitifs-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "sans-alcool",
   "group": "boire",
   "title": "Sans alcool",
   "icon": "leaf",
   "image": "images/cat-sans-alcool.jpg",
   "imageAlt": "Mocktails colorés sans alcool",
   "sections": [
    {
     "title": "Mocktails",
     "items": [
      {
       "name": "Ramazzotti Arancia Spritz 0,0%",
       "price": 13,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "sans-alcool--ramazzotti-arancia-spritz-0-0"
      },
      {
       "name": "London Mule Tanqueray 0,0%",
       "price": 15,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "sans-alcool--london-mule-tanqueray-0-0"
      }
     ],
     "sourceTitle": "Mocktails"
    },
    {
     "title": "Buckets sans alcool",
     "items": [
      {
       "name": "Blue Lagoon",
       "desc": "Limonade, eau gazeuse, jus de citron, sirop de curaçao bleu",
       "descStatus": "draft-fr",
       "descSource": "Lemonade, Sparkling water, Lemon juice, Blue Curaçao syrup",
       "price": 25,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "sans-alcool--blue-lagoon"
      },
      {
       "name": "Berry Peach Cooler",
       "desc": "Jus de cranberry, thé froid pêche, limonade, jus de citron",
       "descStatus": "draft-fr",
       "descSource": "Cranberry juice, Iced tea peach, Lemonade, Lemon juice",
       "price": 27,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "sans-alcool--berry-peach-cooler"
      },
      {
       "name": "Arancia Spritz",
       "desc": "Ramazzotti Arancia 0.0, eau gazeuse, limonade, jus d’orange, sirop de sucre",
       "descStatus": "draft-fr",
       "descSource": "Ramazzotti Arancia 0.0, Sparkling water, Lemonade, Orange juice, Sugar syrup",
       "price": 35,
       "tags": [
        "alcohol-free"
       ],
       "image": null,
       "id": "sans-alcool--arancia-spritz"
      }
     ],
     "sourceTitle": "Buckets Without Alcohol",
     "review": "Volume des buckets sans alcool non indiqué (1,5 L comme les autres ?)."
    }
   ],
   "note": "Voir aussi : Super Bock 0,0 % (Bières) et les softs.",
   "imageSmall": "images/cat-sans-alcool-800.jpg",
   "imageFocus": "50% 50%"
  },
  {
   "id": "softs-chauds",
   "group": "boire",
   "title": "Softs & Boissons chaudes",
   "icon": "cup",
   "image": "images/cat-softs.jpg",
   "imageAlt": "Boissons fraîches et café sur une terrasse au bord du lac",
   "sections": [
    {
     "title": "Eaux",
     "items": [
      {
       "name": "Valser plate 50 cl",
       "sourceName": "Valser still 50cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--valser-still-50cl"
      },
      {
       "name": "Valser gazeuse 50 cl",
       "sourceName": "Valser sparkling 50cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--valser-sparkling-50cl"
      }
     ],
     "sourceTitle": "Waters"
    },
    {
     "title": "Jus — 30 cl",
     "items": [
      {
       "name": "Orange",
       "price": 5,
       "image": null,
       "id": "softs-chauds--orange"
      },
      {
       "name": "Pomme",
       "sourceName": "Apple",
       "price": 5,
       "image": null,
       "id": "softs-chauds--apple"
      },
      {
       "name": "Ananas",
       "sourceName": "Pinneapple",
       "price": 5,
       "image": null,
       "id": "softs-chauds--pinneapple"
      },
      {
       "name": "Cranberry",
       "price": 5,
       "image": null,
       "id": "softs-chauds--cranberry"
      }
     ],
     "sourceTitle": "Juices - 30cl"
    },
    {
     "title": "Sodas",
     "items": [
      {
       "name": "Coca-Cola / Coca Zero 33cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--coca-cola-coca-zero-33cl"
      },
      {
       "name": "Sprite 33cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--sprite-33cl"
      },
      {
       "name": "Fanta 33cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--fanta-33cl"
      },
      {
       "name": "Fusetea Lemon / Peach 33cl",
       "price": 5,
       "image": null,
       "id": "softs-chauds--fusetea-lemon-peach-33cl"
      },
      {
       "name": "Red Bull / Red Bull sugarfree 25cl",
       "price": 6,
       "image": null,
       "id": "softs-chauds--red-bull-red-bull-sugarfree-25cl"
      },
      {
       "name": "Kombucha",
       "price": 7,
       "image": null,
       "review": "Saveur / contenance non indiquées.",
       "id": "softs-chauds--kombucha"
      },
      {
       "name": "El Tony Maté",
       "price": 6,
       "image": null,
       "id": "softs-chauds--el-tony-mate"
      }
     ],
     "sourceTitle": "Sodas"
    },
    {
     "title": "Sirop",
     "items": [
      {
       "name": "Grenadine, menthe, etc.",
       "sourceName": "Grenadine, Mint, etc",
       "price": 3.5,
       "image": null,
       "id": "softs-chauds--grenadine-mint-etc"
      }
     ],
     "sourceTitle": "Syrup"
    },
    {
     "title": "Boissons chaudes",
     "items": [
      {
       "name": "Expresso",
       "price": 3,
       "image": null,
       "id": "softs-chauds--expresso"
      },
      {
       "name": "Café",
       "sourceName": "Coffee",
       "price": 4,
       "image": null,
       "id": "softs-chauds--coffee"
      },
      {
       "name": "Thé",
       "sourceName": "Tea",
       "price": 4,
       "image": null,
       "id": "softs-chauds--tea"
      },
      {
       "name": "Café glacé",
       "sourceName": "Iced Coffee",
       "price": 6,
       "image": null,
       "id": "softs-chauds--iced-coffee"
      }
     ],
     "sourceTitle": "Hot Drinks"
    }
   ],
   "imageSmall": "images/cat-softs-800.jpg",
   "imageFocus": "50% 50%"
  }
 ]
};
