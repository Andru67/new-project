import picture from "../img/shutterstock_40238476 1.png";

const card = (id) => {
    return {
        id: id,
        img: picture,
        title: `Commercial proper in Abu Dhabi ${id}`,
        description: 'In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed In Dubai, the final statistics of all transactions related to real estate for the first quarter has been confirmed...',
    }
}

// export const mockBlogsData = {
//     blogs: Array(1144).fill(null).map((i, index) => card(index))
// }

export const mockBlogs = Array(1144).fill(null).map((_, index) => card(index))