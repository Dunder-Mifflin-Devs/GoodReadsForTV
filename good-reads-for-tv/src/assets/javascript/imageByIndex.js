import image1 from '../images/featurePlaceholder.jpg'
import image2 from '../images/featurePlaceholder.jpg'
import image3 from '../images/featurePlaceholder.jpg'
import image4 from '../images/featurePlaceholder.jpg'

// Used for Carousel

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
