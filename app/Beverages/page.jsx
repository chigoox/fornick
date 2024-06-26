import { Image } from '@nextui-org/react'
import React from 'react'

function page() {



    const vendingProducts = {
        "Pepsi® Products – 20-Ounce Plastic Bottles": [
            "Pepsi",
            "Diet Pepsi",
            "Pepsi Twist",
            "Diet Pepsi Twist",
            "Caffeine-Free Diet Pepsi",
            "Sierra Mist®",
            "Diet Sierra Mist",
            "Mountain Dew®",
            "Tropicana Lemonade",
            "Tropicana Orangeade",
            "Aquafina® Water",
            "Diet Mountain Dew",
            "Hawaiian Punch®",
            "Welch’s® Grape Soda",
            "Ginger Ale",
            "Seltzer",
            "Lipton® Brisk",
            "Tropicana® Twister (Orange Soda)",
            "Tropicana Pink Lemonade",
            "Gatorade® Orange",
            "Gatorade Lemon Lime",
            "Gatorade Fruit Punch"
        ],
        "20-Ounce Cans": [
            "Pepsi",
            "Diet Pepsi",
            "Caffeine Free Diet Pepsi",
            "Pepsi Twist",
            "Diet Pepsi Twist",
            "Seltzer",
            "Hawaiian Punch",
            "Yoo-hoo®",
            "Lipton Brisk",
            "Tropicana Twister- Orange Soda"
        ],
        "Dole® Juices – 16-Ounce Plastic Bottles": [
            "Apple Juice",
            "Orange Juice",
            "Orange/Strawberry/Banana",
            "Cranberry Cocktail",
            "Cranberry Grape",
            "Strawberry Kiwi"
        ],
        "Coca-Cola® Products – 20-Ounce Bottles": [
            "Barq’s® Root Beer",
            "Diet Barq’s Root Beer",
            "Cherry Coke",
            "Cherry Coke Zero",
            "Coca-Cola Zero",
            "Coke Classic",
            "Diet Coke",
            "Diet Coke with Lime",
            "Dr. Pepper®",
            "Diet Dr. Pepper",
            "Fanta® Grape",
            "Fanta Orange",
            "Fanta Strawberry",
            "Ginger Ale",
            "Minute Maid® Fruit Punch",
            "Minute Maid Lemonade",
            "Minute Maid Orangeade",
            "Minute Maid Pink Lemonade",
            "Nestea® Citrus Green",
            "Nestea Sweet Lemon"
        ],
        "12-Ounce Cans": [
            "Barq’s Root Beer",
            "Cherry Coke",
            "Coca-Cola Zero",
            "Coke Classic",
            "Diet Coke",
            "Coke Vanilla",
            "Diet Coke with Lime",
            "Dr. Pepper",
            "Diet Dr. Pepper",
            "Fanta Grape",
            "Fanta Orange",
            "Fanta Strawberry",
            "Minute Maid Fruit Punch",
            "Minute Maid Lemonade",
            "Minute Maid Light Lemonade",
            "Minute Maid Light Raspberry Passion",
            "Minute Maid Orangeade",
            "Minute Maid Orangeade Light",
            "Minute Maid Pink Lemonade",
            "Nestea Sweet Lemon",
            "Schweppes® Ginger Ale",
            "Schweppes Raspberry Ginger Ale",
            "Sprite®",
            "Diet Sprite Zero"
        ],
        "Water – 20-Ounce Bottles (Dasani)": [
            "Dasani®",
            "Dasani Grape",
            "Dasani Lemon",
            "Dasani Raspberry",
            "Dasani Strawberry",
            "Dasani Plus Calm + Relax",
            "Dasani Plus Cleanse + Restore",
            "Dasani Plus Refresh + Revive"
        ],
        "Water – 20-Ounce Bottles (Glaceau)": [
            "Glaceau® Smartwater",
            "Glaceau Vitamin Water Energy",
            "Glaceau Vitamin Water Essential",
            "Glaceau Vitamin Water Focus",
            "Glaceau Vitamin Water Formula 50",
            "Glaceau Vitamin Water Multi-V",
            "Glaceau Vitamin Water Power-C",
            "Glaceau Vitamin Water Rescue",
            "Glaceau Vitamin Water Revive",
            "Glaceau Vitamin Water XXX"
        ]
    };



    return (
        <div className=" min-h-screen overflow-y-scroll hidescroll  items-center justify-between bg-black">
            <Image className='w-96 mt-0 h-96 object-cover' alt='hero' src='https://nbrvending.com/wp-content/uploads/2021/06/10_Gallery2.jpg' />
            {Object.keys(vendingProducts).map(category => {
                return (
                    <div className="text-white px-3">
                        <h1 className='text-black bg-white text-2xl font-bold'>{category}</h1>
                        <div>
                            {vendingProducts[category].map(product => {
                                return (
                                    <p>{product}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default page