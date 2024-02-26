import vneckTshirtImg from '../assets/products/vneck-tshirt.jpg';
import roundNectTshirt from '../assets/products/roundneck-tshirt.jpg';
import checkTshirt from '../assets/products/check-shirt.jpg';
import denimShorts from '../assets/products/denim-shorts.jpg';
import cottonShorts from '../assets/products/cotton-shorts.jpg';
import linenShorts from '../assets/products/linen-shorts.jpg';
import plainHoodie from '../assets/products/plain-hoodie.jpg';
import pocketHoodie from '../assets/products/pocket-hoodie.jpg';
import shortSleevedHoodie from '../assets/products/short-sleeve-hoodie.jpg'

//dummy photos
import zAdditional1 from '../assets/products/z-additional-1.jpg';
import zAdditional2 from '../assets/products/z-additional-2.jpg';
import zAdditional3 from '../assets/products/z-additional-3.jpg';
import zAdditional4 from '../assets/products/z-additional-4.jpg';

const mockData = [
    {
        category: "shirt",
        colors: ['#000', '#42f548', '#9342f5', '#f5f242'],
        brand: "American Apparel",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "recvMQ3C9uMNMpDFx",
        image: '/assets/products/vneck-tshirt.jpg',
        name: "V Neck T-Shirt",
        price: 599,
        shipping: true,
        stock: 7,
        reviews: 4,
        stars: 4.2,
        images: [
            vneckTshirtImg,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "shirt",
        colors: ['#000', '#42f548', '#f5f242'],
        brand: "South Pole",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        id: "recOatShnvsQqFJ4W",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691762400000/ubCe-rKwgr24kZ8r41DVgg/2ipgzPSJi338DiI2pnp3JiqXdRGN9e1GgCifLpztv8zRR6JVgQpP1365LyGgwPk1vSM_ocyIjHPRjpYIKfB7j0iZOS4S190eG20BCwLS0ks/eZFPxFPLbI5UtfVH-kvXx69I0qWnL54ivfPVpmyhF_o",
        name: "Round Neck T-Shirt",
        price: 699,
        shipping: true,
        stock: 1,
        reviews: 17,
        stars: 4.8,
        images: [
            roundNectTshirt,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "shirt",
        colors: ['#000', '#f5f242', '#9342f5'],
        brand: "American Apparel",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "recTFcDKEGZDZ0YDV",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/pgc-QAm88uMecfb2NmypCg/-i_aPao5ObpwgidvIunYUOf_Y7wEO6tDmOi719ctf4rzezAY_I02oABGbTAeqS8J23jCThWoWIjM3p6OAF_hCltVEhK8XYhAsii5kcAmKTE/E_K78t-SBGzMOiKSqxsx99Xgvnnx_t3hWSSkNDPDotI",
        name: "Check T-Shirt",
        price: 850,
        shipping: true,
        stock: 2,
        reviews: 11,
        stars: 3.8,
        images: [
            checkTshirt,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "shorts",
        colors: ['#000', '#42f548'],
        brand: "West Coast",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "recMM9KWCVvyL6Mpk",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/Tv7YAwpS9PPsswbfJasyLQ/HS-_17GWhkRtt0oPQAguQ7Vk4DKPOAtX-MFjtSOaN3ScvtdMt8Wei1cc3ob42DB6Dsa5joeHheCo_O6bnEmlgREQm6krztdpTqsGOghHKmw/-KWZtt0DvMwcCdTyyp5iGxRwA_dmD12zKpSPZIqqrSQ",
        name: "Denim Shorts",
        price: 1245,
        shipping: undefined,
        stock: 5,
        reviews: 22,
        stars: 2.9,
        images: [
            denimShorts,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "shorts",
        colors: ['#f5f242', '#42f548'],
        brand: "West Coast",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "rec0wBs7EmqFl0Zig",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/mAXn0vxks9AWlpXPjIvfdA/P32WS5So4h-zi1N3WAHgC8xoOWwCahcV02dSa4h9yeBSd-2F5cfFRu1ZAzhNehY_h8XYvR5IDZ3k9BnrMCHLcvUhizZ5Q75mjgIGBOozbxw/ujUnuoi7wbT9d3S4RTZXy7JQcXXw_hDtJtTrouLt9ww",
        name: "Cotton Shorts",
        price: 1450,
        shipping: undefined,
        stock: 1,
        reviews: 9,
        stars: 4.6,
        images: [
            cottonShorts,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "shorts",
        colors: ['#f5f242', '#000'],
        brand: "South Pole",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        id: "recmZit6B95pg3sJK",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/Hp8Fr5JNNVvzUzr-TlKjJA/DYrN2fO_r5gnezh3BukQ1bgxYJOD2o-wEEYaKzdlUCm8Ydsr0qx4zIGB0JPFkEMbOOPsCbb0NKQxBTNUmwBN78abQ7B4J49Zhj4YC6_55uo/rDIBolbNtef8iZbgqA41gPMsYZL_-zD4RsvN_c-F1rQ",
        name: "Linen Shorts",
        price: 1999,
        shipping: true,
        stock: 4,
        reviews: 13,
        stars: 4.1,
        images: [
            linenShorts,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "hoodie",
        colors: ['#000', '#f5f242', '#9342f5'],
        brand: "American Apparel",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "recZRMkvoHTgjRUCI",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/8WiHS88mFk6sfc2LyUXylg/p_zy0Nyw1g7Vx_tmrcnwoNhu87pD3YB44nekQiDz23ULHON2JJeg7bIg-bOAI-vRgWEs-I_f0OHbSd9VRSLsUBjMhhv2qzKq4AGJJz4YVDI/EeyXGNzskTXLQOIK2tMO4Otu3pI9dKRen4X7sfHiFqI",
        name: "Plain Hoodie",
        price: 2369,
        shipping: undefined,
        stock: 2,
        reviews: 4,
        stars: 1.8,
        images: [
            plainHoodie,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "hoodie",
        colors: ['#42f548'],
        brand: "South Pole",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: undefined,
        id: "recUn6pOe90ZiH8eI",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/Jmw10i3c5eOU3Zz7ilFzdw/ioqiQHgh3Ci7UMxElPr_5CAxktMW8YYQBdiXfQsdXuVri_HHvda7Ahiv4L_fVPC_tDJqc77XHTZuJNrdExRaYThTw1gd_49qyvjtBA-akAo/My7uitjM0mI5mq-nLzAL7FeVmAusE5UnTUx0jZxVIa4",
        name: "Pocket Hoodie",
        price: 2599,
        shipping: undefined,
        stock: 6,
        reviews: 13,
        stars: 2.5,
        images: [
            pocketHoodie,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    },
    {
        category: "hoodie",
        colors: ['#f5f242', '#9342f5'],
        brand: "South Pole",
        description: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        featured: true,
        id: "recKcDknBUux2We3K",
        image: "https://v5.airtableusercontent.com/v1/19/19/1691769600000/xfJdd-LQCVEJp-mzfsyzsA/TVrjfN-NmP-wEsZCpZ4VrG0RaNgZizzfsgPJZD1LcRJnXLGGw-6zJpBLFX2IFAVsAmZz5K1v5TLwYpOpeABPdV_Ud7iT2hdH6sHYcm1LRYM/dB7nrMbaJzrIZkOTNeTAgoXG8pB7H0r-DSIkExyiXQI",
        name: "Short Sleeve Hoodie",
        price: 2899,
        shipping: true,
        stock: 3,
        reviews: 6,
        stars: 4.4,
        images: [
            shortSleevedHoodie,
            zAdditional1,
            zAdditional2,
            zAdditional3,
            zAdditional4
        ]
    }

];

export default mockData;