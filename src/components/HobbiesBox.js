

const products = [
    {
      id: 1,
      name: 'Gaming',
      href: '#',
      price: 'The start to my journey in Tech',
      imageSrc: '/static/img/Wumpus.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'PC Building',
        href: '#',
        price: 'To understand software, we must first understand the hardware that runs it',
        imageSrc: '/static/img/PC.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
    {
      id: 3,
      name: 'Repair Electronics',
      href: '#',
      price: 'The Right to Repair is something I have always believed in', 
      imageSrc: '/static/img/repair.jpg',
      imageAlt: 'Picture of an Apple Iphone 6 getting repaired',
    },
    {
      id: 4,
      name: 'Table Tennis',
      href: '#',
      price: 'A lot harder than it looks',
      imageSrc: '/static/img/pingpong.jpg',
      imageAlt: '',
    },
    {
      id: 5,
      name: 'DIY Projects',
      href: '#',
      price: 'If it does not exist, make it yourself',
      imageSrc: '/static/img/DIY.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        name: 'Coffee',
        href: '#',
        price: 'The only way to start your day',
        imageSrc: '/static/img/Coffee.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }