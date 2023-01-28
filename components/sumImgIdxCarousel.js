import img1 from '../image/sum0.png'
import img2 from '../image/sum1.png'
import img3 from '../image/sum2.png'
import img4 from '../image/sum3.png'
import img5 from '../image/sum4.png'

export const images = [img1, img2, img3, img4, img5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex