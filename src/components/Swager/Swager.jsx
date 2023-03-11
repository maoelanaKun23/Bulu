import React from 'react'
import { Card } from '@material-ui/core'
import "./swager.scss"
const Swager = () => {
    const productData = [
        {
            id: 1,
            imageurl:
                "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/7/e1dbcc8f-7a26-4ab8-ab9c-860286d1dc20.jpg",
            name: "Colorful sneakers",
            price: "Rp.99.000",
            origin: "Jakarta Timur",
            terjual: "4.6 | Terjual 750+"
        },
        {
            id: 2,
            imageurl:
                "https://lzd-img-global.slatic.net/g/p/dd217a35ebc5cd7cfd3dc3ccaf806efe.jpg_720x720q80.jpg_.webp",
            name: "Sport sneakers",
            price: "Rp.80.000",
            origin: "Kab.Cirebon",
            terjual: "4.0 | Terjual 150+"
        },
        {
            id: 3,
            imageurl:
                "https://asset.kompas.com/crops/dIKvWvDNPuZ30Xyax6EqKwbCMFU=/0x0:1200x800/750x500/data/photo/2021/01/12/5ffd2ad18d3c5.jpg",
            name: "iWatch",
            price: "Rp.150.000",
            origin: "Jakarta Pusat",
            terjual: "4.9 | Terjual 1Rb+"
        },
        {
            id: 4,
            imageurl:
                "https://cdn.thewirecutter.com/wp-content/media/2022/07/kidswaterbottles-2048px-1332-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
            name: "Water Bottle",
            price: "Rp.25.000",
            origin: "Kab.Bandung",
            terjual: "4.1 | Terjual 150+"
        },
        {
            id: 5,
            imageurl:
                "https://cf.shopee.co.id/file/66fb1984428824adaf633228ccdddc4b",
            name: "Vans sneakers",
            price: "Rp.85.000",
            origin: "Surabaya",
            terjual: "4.3 | Terjual 250+"
        },
        {
            id: 6,
            imageurl:
                "https://www.bawahtanah.co.id/wp-content/uploads/2022/09/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg",
            name: "T-Shirt",
            price: "Rp.30.000",
            origin: "Kota Medan",
            terjual: "4.5 | Terjual 650+"
        },
        {
            id: 7,
            imageurl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJ108KIMujyIOWNZp-Z-POM3IoLE829c7-w&usqp=CAU",
            name: "Sunglasses",
            price: "Rp.35.000",
            origin: "Majalaya",
            terjual: "4.2 | Terjual 210+"
        },
        {
            id: 8,
            imageurl:
                "https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/images/post/5893e0568844915509f04395176a152b.jpg",
            name: "Dove cream",
            price: "Rp.54.000",
            origin: "Jakarta Barat",
            terjual: "4.8 | Terjual 800+"
        },
    ]
    return (
        <div>

            <div class="slider">
                <div class="slide-track">
                    {productData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div class="slide">
                                    <Card class="card">
                                        <img src={item.imageurl} class="img" height="100" width="250" alt="" />
                                    </Card>
                                </div>

                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Swager