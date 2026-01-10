import { Package, Droplet, Truck } from 'lucide-react';

export const services = [
  {
    icon: Package,
    title: 'Papirna Galanterija',
    description: 'Širok asortiman papirnih proizvoda za sve vaše potrebe - toalet papir, ubrus, salvete i još mnogo toga.',
    page: 'papirna' as const
  },
  {
    icon: Droplet,
    title: 'Hemija za Hotele',
    description: 'Profesionalna hemija za čišćenje i održavanje hotela, restorana i poslovnih prostora.',
    page: 'hemija' as const
  },
  {
    icon: Truck,
    title: 'Prevoz i Dostava',
    description: 'Brza i pouzdana dostava vaših porudžbina direktno na vašu adresu.',
    page: 'prevoz' as const
  }
];

export const features = [
  'Visok kvalitet proizvoda',
  'Konkurentne cene',
  'Brza dostava',
  'Profesionalna podrška',
  'Veliki izbor proizvoda',
  'Dugogodišnje iskustvo'
];

export const papirnaGalanterijaProducts = [
  'Toalet papir premium kvaliteta - jednoslojni, dvoslojni i troslojni',
  'Industrijski papirni ubrus za sve namene',
  'Salvete za restorane i kafiće u različitim bojama',
  'Kuhinjske rolne - upijajuće i izdržljive',
  'Papirne peškire za hotele i wellness centre'
];

export const papirnaGalanterijaAdvantages = [
  'Proizvodi od renomiranih evropskih proizvođača',
  'Konkurentne cene za veleprodaju',
  'Mogućnost brendiranja proizvoda po želji',
  'Stalno dostupne zalihe',
  'Besplatna dostava za veće narudžbine'
];

export const hemijaProducts = [
  'Sredstva za čišćenje podova svih vrsta površina',
  'Deterdženti i dezinficijensi za kupatila',
  'Profesionalna kuhinjska hemija za ugostiteljstvo',
  'Sredstva za pranje stakala i ogledala',
  'Osvežavači prostora premium kvaliteta',
  'Tečni sapuni i šamponi za hotele'
];

export const hemijaAdvantages = [
  'Sertifikovani proizvodi prema EU standardima',
  'Ekološki prihvatljive formule',
  'Obuka osoblja za pravilnu upotrebu',
  'Tehnička podrška i savetovanje',
  'Pakovanja različitih veličina',
  'Specijalne cene za stalne kupce'
];

export const deliveryZones = [
  {
    title: 'Beograd i okolina',
    description: 'Dostava istog ili narednog dana'
  },
  {
    title: 'Veći gradovi',
    description: 'Dostava u roku 24-48h'
  },
  {
    title: 'Ostale lokacije',
    description: 'Dostava u roku 2-3 radna dana'
  }
];

export const freeDeliveryConditions = [
  'Za narudžbine preko 50.000 RSD',
  'Za stalne klijente sa mesečnim ugovorom',
  'Specijalne akcije i promocije'
];

export const additionalServices = [
  'Dostava van radnog vremena (uz dogovor)',
  'Ekspresna dostava za hitne slučajeve',
  'Utovar i raztovar robe'
];
