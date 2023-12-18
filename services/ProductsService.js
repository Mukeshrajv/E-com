const PRODUCTS = [
    {
        id: 100,
        name: 'Big Tex Fillet with CRYO (BL707C)',
        price:32.95,
        // image: require('../assets/app.png'),
        image: {uri:'https://www.texasknife.com/assets/images/texantool/product/BL544.jpg'},
        description: 'Texas Sized Fillet Blade. CRYOGENICALLY TEMPERED to -3050F, high carbon stainless steel blade. 16&quot; overall length, 1/16&quot; thick with 10-1/2&quot; cutting edge. Blade is 3/4&quot; wide. Use three 5/32&quot; pins. Satin finished and hollow ground. Sure to help out with those bigger than average fish. Use extra long SHEATH #SHE-TEX.'
    },
    {
        id: 101,
        name: 'Favorite Chefs Santoku with  CRYO (BL547)',
        price: 19.95,
        image: {uri:'https://www.texasknife.com/assets/images/texantool/product/BL547C.jpg'},
        description: 'Japanese style blade. 10-3/4&quot; overall, 6&quot; blade, 5/32&quot; diameter holes for pins, made of 8A high carbon stainless. Cryogenically treated.'
    },
    {
        id: 102,
        name: 'New Guides Skinner with Brass Bolsters CRYO (BL483C)',
        price: 27.45,
        image:{uri:'https://www.texasknife.com/assets/images/texantool/product/BL483e_550.jpg'},
        description: '9-1/2&nbsp;overall length, 3-7/8&nbsp;hollow ground blade, 1-1/8&nbsp;wide, and a full 1/8&nbsp;thick and is made of 440C. CRYOGENICALLY TREATED to enhance edge holding properties. Kit includes two brass bolsters, six 0.119&nbsp;pins (use an 1/8&quot; drill bit for your handle material), and 0.355&quot; thong hole tube (use 3/8&quot; drill bit). SHE2, and SHE2B will fit this knife.'
    },
    {
        id: 103,
        name: 'Favorite Utility Paring Blade with CRYO (BL476C)',
        price: 19.95,
        image:{uri:'https://www.texasknife.com/assets/images/texantool/product/BL476C2.jpg'},
        description: '7-1/2&quot; overall length, 7/8&quot; wide, 3-1/2&quot; long blade and 5/64&quot; thick 440C stainless steel. Fine satin finish that easily polishes. CRYOGENICALLY TREATED to enhance its edge holding properties. The handle is punched with holes for three 1/8&quot; pins and two 5/16&quot; holes for bolts. These are fine blades and very useful. This blade along with the Cook&#39;s Favorite and the Mid Size Chef make a nice set of three.'
    },
    {
        id: 104,
        name: 'Favorite Mid Size Chef Blade with CRYO (BL531C)',
        price: 20.95,
        image: {uri:'https://www.texasknife.com/assets/images/texantool/product/BL531C.jpg'},
        description: '10-1/2&quot; overall length, 5-7/8&quot; long blade, 5/64&quot; thick, 1-3/8&quot; wide. Fine satin finish and flat ground, superior 440C stainless steel. CRYOGENICALLY TREATED to enhance its edge holding properties. Three holes for 5/32&quot; pin material and two larger (7/16&quot;) holes for bolts. This blade along with the Cook&#39;s Favorite and the Utility Paring blade make a nice set of three.'
    },
    {
        id: 105,
        name: 'Kirinite Liquid Gold 3/8\" Scales',
        price: 29.95,
        image: {uri:'https://www.texasknife.com/assets/images/texantool/product/KLG2S_550.jpg'},
        description: 'KiriniteTM Liquid Gold 3/8&quot; Scales. Very durable material with intense depth and color. Easy to work....... just sand and buff to a fine finish. Use buffing compound # ABRPN40 for a super finish http://www.texasknife.com/vcom/product_info.php products_id=589 This is the best acrylic material we have ever used. Scale size: 5&quot; x 1-1/2&quot; x 3/8&quot;'
    },
    {
        id: 106,
        name: 'Texas Bay Fillet with CRYO (BL544C)',
        price: 27.95,
        image: {uri:'https://www.texasknife.com/assets/images/texantool/product/BL544.jpg'},
        description: 'AUS8 Cryogenically Treated - 12&quot; Fillet ,1/8&quot; Handle Pins'
    },
   
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}