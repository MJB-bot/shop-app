import { useState, useEffect } from 'react';
import svgPaths from '../../imports/购物车/svg-w57diffih4';
import imgImage2 from '../../imports/购物车/b008052f158096a6c03bbc03e7e90325e7aa1a2f.png';
import img from '../../imports/购物车/651931c5248d6b8d9a6c580fd46e821beac6340a.png';

const DESIGN_WIDTH = 411;

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutPageProps {
  onBack: () => void;
}

export default function CheckoutPage({ onBack }: CheckoutPageProps) {
  const [scale, setScale] = useState(1);
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: '苹果 Iphone 11 Pro\n(128GB)-红色',
      price: 69900,
      quantity: 1,
      image: imgImage2,
    },
    {
      id: 2,
      name: '一加 8 (冰川绿色, 128 GB)  (8 GB...',
      price: 44990,
      quantity: 1,
      image: img,
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalAmount = cartTotal;

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
      data-name="购物车"
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
        <div className="absolute h-[35px] left-0 overflow-clip top-0 w-[171px]">
          {/* Back Arrow - 点击返回 Home 页面 */}
          <div className="absolute left-0 size-[28px] top-[3.5px] cursor-pointer" onClick={onBack}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M5.83337 14H29.1667" stroke="#556674" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p12a1cc80} stroke="#556674" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          {/* Title */}
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold justify-center leading-[0] left-[51px] not-italic text-[#21262c] text-[20px] top-[17.5px] whitespace-nowrap">
            <p className="leading-[35px]">你的购物车</p>
          </div>
        </div>
        {/* System Icons */}
        <div className="absolute h-[32px] left-[280px] top-[1.5px] w-[87px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 32">
            <path d={svgPaths.p173f1470} fill="white" fillOpacity="0.15" stroke="#F0F0F0" />
            <path d={svgPaths.p5a46200} fill="black" />
            <path clipRule="evenodd" d={svgPaths.p2fb10af0} fill="black" fillRule="evenodd" />
            <path d={svgPaths.p25214d00} fill="#A6A6A6" />
            <path clipRule="evenodd" d={svgPaths.p239bfc00} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p15c67a80} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1c467870} fill="black" fillRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Cart Item List */}
      <div className="-translate-x-1/2 absolute h-[703px] left-1/2 overflow-auto top-[120px] w-[331px]">
        <div className="-translate-x-1/2 absolute left-1/2 top-0 w-[331px]" style={{ minHeight: '545px' }}>
          {cartItems.map((item, index) => (
            <div key={item.id} className="absolute h-[185px] left-0 overflow-clip w-[331px]" style={{ top: `${index * 205}px` }}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 185">
                <path clipRule="evenodd" d={svgPaths.p152b9500} fill="white" fillRule="evenodd" />
              </svg>

              {/* Image */}
              <div className="absolute inset-[10.81%_68.28%_43.24%_6.04%]">
                <div className="absolute inset-[0_0_0_0]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full object-cover" src={item.image} />
                </div>
              </div>

              {/* Product Name */}
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[117.5px] not-italic right-[16.5px] text-[#21262c] text-[18px] top-[45px]">
                <p className="leading-[25px] whitespace-pre-wrap">{item.name}</p>
              </div>

              {/* Price */}
              <div className="-translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[119px] right-[134px] text-[#ff2424] text-[18px] top-[87.5px] whitespace-nowrap">
                <p className="leading-[24px]">￥{item.price.toLocaleString()}</p>
              </div>

              {/* Number Widget */}
              <div className="absolute bottom-[20px] left-[20px]">
                {/* Remove Button (-) */}
                <div className="absolute bottom-0 left-0 size-[40px] cursor-pointer" onClick={() => updateQuantity(item.id, -1)}>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={svgPaths.pf2d8300} stroke="#AEBDC8" />
                  </svg>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-1/2 not-italic text-[#171b1f] text-[18px] text-center top-1/2 w-[39px]">
                    <p className="leading-[25px]">-</p>
                  </div>
                </div>

                {/* Count */}
                <div className="absolute bottom-0 left-[39px] size-[40px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d="M39.5 0.5V39.5H0.5V0.5H39.5Z" stroke="#AEBDC8" />
                  </svg>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-1/2 not-italic text-[#171b1f] text-[18px] text-center top-1/2 w-[38px]">
                    <p className="leading-[25px]">{item.quantity}</p>
                  </div>
                </div>

                {/* Add Button (+) */}
                <div className="absolute bottom-0 left-[78px] size-[40px] cursor-pointer" onClick={() => updateQuantity(item.id, 1)}>
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                    <path d={svgPaths.pcf88f00} stroke="#AEBDC8" />
                  </svg>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-1/2 not-italic text-[#171b1f] text-[18px] text-center top-1/2 w-[39px]">
                    <p className="leading-[25px]">+</p>
                  </div>
                </div>
              </div>

              {/* Remove Button */}
              <div className="absolute bottom-[20px] h-[40px] overflow-clip right-[26px] w-[142px] cursor-pointer" onClick={() => removeItem(item.id)}>
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 40">
                  <path clipRule="evenodd" d={svgPaths.p35a7bdc0} fill="#F5F5F8" fillRule="evenodd" />
                </svg>
                <div className="absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] inset-0 justify-center leading-[0] text-[#556674] text-[18px] text-center">
                  <p className="leading-[25px]">删除</p>
                </div>
              </div>
            </div>
          ))}

          {/* Price Details */}
          <div className="absolute h-[135px] left-0 overflow-clip top-[410px] w-[331px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 135">
              <path clipRule="evenodd" d={svgPaths.p2aabbc80} fill="white" fillRule="evenodd" />
            </svg>

            {/* Item Count */}
            <div className="absolute h-[25px] leading-[0] left-[20px] overflow-clip text-[#21262c] text-[18px] top-[20px] w-[291px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center left-0 top-[12.5px] whitespace-nowrap">
                <p className="leading-[25px]">数量</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] justify-center left-[291px] not-italic text-right top-[12.5px] w-[96.134px]">
                <p className="leading-[25px]">{totalQuantity}</p>
              </div>
            </div>

            {/* Cart Total */}
            <div className="absolute h-[25px] leading-[0] left-[20px] overflow-clip text-[18px] top-[55px] w-[291px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center left-0 text-black top-[12.5px] whitespace-nowrap">
                <p className="leading-[25px]">总额</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] h-[25px] justify-center left-[291px] text-[#556674] text-right top-[12.5px] w-[96.13px]">
                <p className="leading-[24px]">￥{cartTotal.toLocaleString()}</p>
              </div>
            </div>

            {/* Total Amount */}
            <div className="absolute h-[25px] leading-[0] left-[20px] overflow-clip text-[18px] top-[90px] w-[291px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold justify-center left-0 not-italic text-[#21262c] top-[12.5px] whitespace-nowrap">
                <p className="leading-[25px]">总金额</p>
              </div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] h-[25px] justify-center left-[291px] text-[#ff2424] text-right top-[12.5px] w-[96.134px]">
                <p className="leading-[24px]">￥{totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 h-[142px] left-0 overflow-clip right-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 142">
          <path d="M0 0H411V142H0V0V0Z" fill="white" fillOpacity="0.65" />
        </svg>
        {/* Checkout Button */}
        <div className="-translate-x-1/2 absolute bottom-[59.81px] h-[62.19px] left-1/2 overflow-clip w-[331px] cursor-pointer">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 62.19">
            <path clipRule="evenodd" d={svgPaths.p21591a00} fill="#2353FF" fillRule="evenodd" />
          </svg>
          <div className="absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold inset-0 justify-center leading-[0] not-italic text-[18px] text-center text-white">
            <p className="leading-[25px]">继续结账 {totalAmount.toLocaleString()}</p>
          </div>
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