import { useState, useEffect } from 'react';
import svgPaths from '../../imports/购物车/svg-w57diffih4';
import imgImage2 from '../../imports/购物车/b008052f158096a6c03bbc03e7e90325e7aa1a2f.png';
import img from '../../imports/购物车/651931c5248d6b8d9a6c580fd46e821beac6340a.png';

const DESIGN_WIDTH = 411;

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomePageProps {
  onNavigateToCheckout: () => void;
}

export default function HomePage({ onNavigateToCheckout }: HomePageProps) {
  const [scale, setScale] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const products: ProductType[] = [
    {
      id: 1,
      name: '苹果 Iphone 11 Pro\n(128GB)-红色',
      price: 69900,
      image: imgImage2,
    },
    {
      id: 2,
      name: '一加 8 (冰川绿色, 128 GB)',
      price: 44990,
      image: img,
    },
    {
      id: 3,
      name: '苹果 Iphone 11 Pro\n(128GB)-红色',
      price: 69900,
      image: imgImage2,
    },
    {
      id: 4,
      name: '一加 8 (冰川绿色, 128 GB)',
      price: 44990,
      image: img,
    },
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      setScale(windowWidth / DESIGN_WIDTH);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <div
      className="bg-white relative origin-top"
      data-name="首页"
      style={{
        transform: `scale(${scale})`,
        width: `${DESIGN_WIDTH}px`,
        height: '823px',
      }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 823">
        <path clipRule="evenodd" d="M0 0H411V823H0V0Z" fill="#F5F5F8" fillRule="evenodd" />
      </svg>

      {/* System Bar */}
      <div className="absolute h-[25px] left-0 opacity-0 overflow-clip right-0 top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 25">
          <path clipRule="evenodd" d="M0 0H411V25H0V0Z" fill="white" fillRule="evenodd" />
        </svg>
      </div>

      {/* Status Bar */}
      <div className="absolute inset-[0_0_94.17%_0] overflow-clip">
        {/* Battery */}
        <div className="absolute inset-[41.67%_3.8%_36.64%_89.93%]">
          <div className="-translate-y-1/2 absolute h-[4.384px] right-0 top-[calc(50%-0.11px)] w-[1.644px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.644 4.384">
              <path d={svgPaths.p14c09340} fill="black" opacity="0.4" />
            </svg>
          </div>
          <div className="absolute inset-[0_14.89%_0_0]">
            <div className="absolute inset-[-10.53%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.112 12.604">
                <path d={svgPaths.p34f30400} opacity="0.4" stroke="black" strokeWidth="1.096" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[10.53%_19.15%_10.53%_4.26%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.728 8.22">
              <path d={svgPaths.pb99c260} fill="black" />
            </svg>
          </div>
        </div>
        {/* Signal */}
        <div className="absolute inset-[40.53%_11.93%_35.49%_83.53%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6318 11.5107">
            <path d={svgPaths.p251e3800} fill="black" />
          </svg>
        </div>
        {/* Time */}
        <p className="absolute font-['ABeeZee:Regular',sans-serif] leading-[0px] left-[calc(50%-171.52px)] not-italic text-[16.44px] text-black top-[calc(50%-8.49px)] tracking-[-0.274px] whitespace-nowrap">
          9:41
        </p>
      </div>

      {/* Header */}
      <div className="absolute h-[35px] left-[22px] overflow-clip top-[52px] w-[367px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#21262c] text-[20px] top-[17.5px] whitespace-nowrap">
          <p className="leading-[35px]">首页</p>
        </div>
        {/* Cart Icon */}
        <div className="absolute h-[32px] left-[310px] top-[1.5px] w-[32px] cursor-pointer" onClick={onNavigateToCheckout}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d="M4 7H7H28" stroke="#21262c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7 7L9 27H27L29 7" stroke="#21262c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
            <circle cx="13" cy="32" r="2" fill="#21262c" />
            <circle cx="23" cy="32" r="2" fill="#21262c" />
          </svg>
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff2424] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">{cartCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="-translate-x-1/2 absolute h-[620px] left-1/2 overflow-auto top-[100px] w-[375px]">
        <div className="grid grid-cols-2 gap-4 p-2">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Product Image */}
              <div className="w-full h-[120px] relative">
                <img alt={product.name} className="absolute block inset-0 max-w-none size-full object-cover" src={product.image} />
              </div>
              {/* Product Info */}
              <div className="p-3">
                <p className="font-['Inter:Semi_Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold text-[14px] text-[#21262c] leading-[18px] whitespace-pre-wrap h-[36px] overflow-hidden">
                  {product.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-['ABeeZee:Regular',sans-serif] text-[#ff2424] text-[14px]">
                    ￥{product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={addToCart}
                    className="w-7 h-7 bg-[#2353FF] rounded-full flex items-center justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute h-[34px] left-0 top-[789px] w-[411px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 34">
          <path clipRule="evenodd" d="M0 0H411V34H0V0Z" fill="white" fillRule="evenodd" />
        </svg>
        <div className="absolute h-[5px] left-[138.5px] top-[21px] w-[134px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
            <path clipRule="evenodd" d={svgPaths.p1b107900} fill="#121826" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}