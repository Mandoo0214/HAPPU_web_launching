import image1 from '../image/img0.png'
import image2 from '../image/img1.png'
import image3 from '../image/img2.png'
import image4 from '../image/img3.png'
import image5 from '../image/img4.png'

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex