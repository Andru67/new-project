import picture from "../img/blogsPicure/shutterstock_40238476 1.png";
import picture_1 from "../img/blogsPicure/shutterstock_40238476 1 (1).png";
import picture_2 from "../img/blogsPicure/shutterstock_40238476 1 (2).png";
import picture_3 from "../img/blogsPicure/shutterstock_40238476 1 (3).png";
import picture_4 from "../img/blogsPicure/shutterstock_40238476 1 (4).png";
import picture_5 from "../img/blogsPicure/shutterstock_40238476 1 (5).png";
import picture_6 from "../img/blogsPicure/shutterstock_40238476 1 (6).png";
import picture_7 from "../img/blogsPicure/shutterstock_40238476 1 (7).png";
import picture_8 from "../img/blogsPicure/shutterstock_40238476 1 (8).png";
import picture_9 from "../img/blogsPicure/shutterstock_40238476 1 (9).png";
import picture_10 from "../img/blogsPicure/shutterstock_40238476 1 (10).png";
import picture_11 from "../img/blogsPicure/shutterstock_40238476 1 (11).png";


const img = [
    picture, picture_1, picture_2, picture_3, picture_4, picture_5, picture_6,
    picture_7, picture_8, picture_9, picture_10, picture_11, picture_1, picture_1
]

const card = (id) => {

    return {
        id: id,
        img: img[id % img.length] || picture,
        title: `Commercial proper in Abu Dhabi_${id}`,
        description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed...',
    }
}

export const mockBlogs = Array(1144).fill(null).map((_, index) => card(index))