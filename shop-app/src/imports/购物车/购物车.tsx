import svgPaths from "./svg-w57diffih4";
import imgImage2 from "./b008052f158096a6c03bbc03e7e90325e7aa1a2f.png";
import img from "./651931c5248d6b8d9a6c580fd46e821beac6340a.png";
import { imgImage, imgImage1, imgLabel, imgItemCount, imgLabel1, imgBattery } from "./svg-mq40o";

function SystemBar() {
  return (
    <div className="absolute h-[25px] left-0 opacity-0 overflow-clip right-0 top-0" data-name="System Bar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 25">
        <path clipRule="evenodd" d="M0 0H411V25H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute contents inset-[10.81%_68.28%_43.24%_6.04%]" data-name="Image">
      <div className="absolute inset-[10.81%_62.29%_32.52%_6.04%] mask-position-[-20px_-20px,_0px_0px]" style={{ maskImage: `url('${imgImage}'), url('${imgImage1}')` }} data-name="Image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="104.833" src={imgImage2} width="104.833" />
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="absolute bottom-[20px] contents left-[59px]" data-name="Count">
      <div className="absolute bottom-[20px] left-[59px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-59px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d="M39.5 0.5V39.5H0.5V0.5H39.5Z" id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[79px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-60px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[38px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">1</p>
      </div>
    </div>
  );
}

function Add() {
  return (
    <div className="absolute bottom-[20px] contents left-[98px]" data-name="Add">
      <div className="absolute bottom-[20px] left-[98px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.pcf88f00} id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[118.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-99px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[39px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">+</p>
      </div>
    </div>
  );
}

function Remove() {
  return (
    <div className="absolute bottom-[20px] contents left-[20px]" data-name="Remove">
      <div className="absolute bottom-[20px] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.pf2d8300} id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[39.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[39px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">-</p>
      </div>
    </div>
  );
}

function NumberWidget() {
  return (
    <div className="absolute bottom-[20px] contents left-[20px]" data-name="Number Widget">
      <Count />
      <Add />
      <Remove />
    </div>
  );
}

function RemoveButton() {
  return (
    <div className="absolute bottom-[20px] h-[40px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-163px_-125px] mask-size-[331px_185px] overflow-clip right-[26px] w-[142px]" style={{ maskImage: `url('${imgImage}')` }} data-name="Remove Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 40">
        <path clipRule="evenodd" d={svgPaths.p35a7bdc0} fill="var(--fill-0, #F5F5F8)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <div className="[word-break:break-word] absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] inset-0 justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[142px_40px] text-[#556674] text-[18px] text-center" style={{ fontVariationSettings: "'wght' 400", maskImage: `url('${imgLabel}')` }}>
        <p className="leading-[25px]">删除</p>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="absolute h-[185px] left-0 overflow-clip top-0 w-[331px]" data-name="Cart Item">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 185">
        <path clipRule="evenodd" d={svgPaths.p152b9500} fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <Image />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[117.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-117.5px_-25px] mask-size-[331px_185px] not-italic right-[16.5px] text-[#21262c] text-[18px] top-[45px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px] mb-0">苹果 Iphone 11 Pro</p>
        <p className="leading-[25px]">(128GB)-红色</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[119px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-119px_-75.5px] mask-size-[331px_185px] right-[134px] text-[#ff2424] text-[18px] top-[87.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400", maskImage: `url('${imgImage}')` }}>
        <p className="leading-[24px]">￥69,900</p>
      </div>
      <NumberWidget />
      <RemoveButton />
    </div>
  );
}

function Count1() {
  return (
    <div className="absolute bottom-[20px] contents left-[59px]" data-name="Count">
      <div className="absolute bottom-[20px] left-[59px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-59px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d="M39.5 0.5V39.5H0.5V0.5H39.5Z" id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[79px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-60px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[38px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">1</p>
      </div>
    </div>
  );
}

function Add1() {
  return (
    <div className="absolute bottom-[20px] contents left-[98px]" data-name="Add">
      <div className="absolute bottom-[20px] left-[98px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.pcf88f00} id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[118.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-99px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[39px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">+</p>
      </div>
    </div>
  );
}

function Remove1() {
  return (
    <div className="absolute bottom-[20px] contents left-[20px]" data-name="Remove">
      <div className="absolute bottom-[20px] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-125px] mask-size-[331px_185px] size-[40px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.pf2d8300} id="è·¯å¾" stroke="var(--stroke-0, #AEBDC8)" />
        </svg>
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[40px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[39.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-125px] mask-size-[331px_185px] not-italic text-[#171b1f] text-[18px] text-center translate-y-1/2 w-[39px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px]">-</p>
      </div>
    </div>
  );
}

function NumberWidget1() {
  return (
    <div className="absolute bottom-[20px] contents left-[20px]" data-name="Number Widget">
      <Count1 />
      <Add1 />
      <Remove1 />
    </div>
  );
}

function RemoveButton1() {
  return (
    <div className="absolute bottom-[20px] h-[40px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-163px_-125px] mask-size-[331px_185px] overflow-clip right-[26px] w-[142px]" style={{ maskImage: `url('${imgImage}')` }} data-name="Remove Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 40">
        <path clipRule="evenodd" d={svgPaths.p35a7bdc0} fill="var(--fill-0, #F5F5F8)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <div className="[word-break:break-word] absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] inset-0 justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[142px_40px] text-[#556674] text-[18px] text-center" style={{ fontVariationSettings: "'wght' 400", maskImage: `url('${imgLabel}')` }}>
        <p className="leading-[25px]">删除</p>
      </div>
    </div>
  );
}

function ProductCartItem() {
  return (
    <div className="absolute h-[185px] left-0 overflow-clip top-[205px] w-[331px]" data-name="Product/Cart Item">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 185">
        <path clipRule="evenodd" d={svgPaths.p152b9500} fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <div className="absolute inset-[10.81%_68.28%_43.24%_6.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-20px] mask-size-[331px_185px]" style={{ maskImage: `url('${imgImage}')` }} data-name="路径">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="85" src={img} width="85" />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[117.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-117.5px_-25px] mask-size-[331px_185px] not-italic right-[16.5px] text-[#21262c] text-[18px] top-[45px]" style={{ maskImage: `url('${imgImage}')` }}>
        <p className="leading-[25px] whitespace-pre-wrap">{`一加 8 (冰川绿色, 128 GB)  (8 GB...`}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[119px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-119px_-75.5px] mask-size-[331px_185px] right-[134px] text-[#ff2424] text-[18px] top-[87.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400", maskImage: `url('${imgImage}')` }}>
        <p className="leading-[24px]">￥44,990</p>
      </div>
      <NumberWidget1 />
      <RemoveButton1 />
    </div>
  );
}

function ItemCount() {
  return (
    <div className="[word-break:break-word] absolute h-[25px] leading-[0] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-20px] mask-size-[331px_135px] overflow-clip text-[#21262c] text-[18px] top-[20px] w-[291px]" style={{ maskImage: `url('${imgItemCount}')` }} data-name="Item Count">
      <div className="-translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center left-0 top-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px]">数量</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] justify-center left-[291px] not-italic text-right top-[12.5px] w-[96.134px]">
        <p className="leading-[25px]">2</p>
      </div>
    </div>
  );
}

function CartTotal() {
  return (
    <div className="[word-break:break-word] absolute h-[25px] leading-[0] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-55px] mask-size-[331px_135px] overflow-clip text-[18px] top-[55px] w-[291px]" style={{ maskImage: `url('${imgItemCount}')` }} data-name="Cart Total">
      <div className="-translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center left-0 text-black top-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[25px]">总额</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] h-[25px] justify-center left-[291px] text-[#556674] text-right top-[12.5px] w-[96.13px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">￥69,900</p>
      </div>
    </div>
  );
}

function TotalAmount() {
  return (
    <div className="[word-break:break-word] absolute h-[25px] leading-[0] left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-90px] mask-size-[331px_135px] overflow-clip text-[18px] top-[90px] w-[291px]" style={{ maskImage: `url('${imgItemCount}')` }} data-name="Total Amount">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold justify-center left-0 not-italic text-[#21262c] top-[12.5px] whitespace-nowrap">
        <p className="leading-[25px]">总金额</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['ABeeZee:Regular','Noto_Sans_JP:Regular',sans-serif] h-[25px] justify-center left-[291px] text-[#ff2424] text-right top-[12.5px] w-[96.134px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px]">￥69,900</p>
      </div>
    </div>
  );
}

function PriceDetails() {
  return (
    <div className="absolute h-[135px] left-0 overflow-clip top-[410px] w-[331px]" data-name="Price Details">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 135">
        <path clipRule="evenodd" d={svgPaths.p2aabbc80} fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <ItemCount />
      <CartTotal />
      <TotalAmount />
    </div>
  );
}

function VerticalList() {
  return (
    <div className="-translate-x-1/2 absolute h-[545px] left-1/2 overflow-clip top-0 w-[331px]" data-name="Vertical List">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="è·¯å¾" />
      </svg>
      <CartItem />
      <ProductCartItem />
      <PriceDetails />
    </div>
  );
}

function CartItemList() {
  return (
    <div className="-translate-x-1/2 absolute h-[703px] left-1/2 overflow-clip top-[120px] w-[331px]" data-name="Cart Item List">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="è·¯å¾" />
      </svg>
      <VerticalList />
    </div>
  );
}

function CheckoutButton() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[59.81px] h-[62.19px] left-1/2 overflow-clip w-[331px]" data-name="Checkout Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 62.19">
        <path clipRule="evenodd" d={svgPaths.p21591a00} fill="var(--fill-0, #2353FF)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <div className="[word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold inset-0 justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[331px_62.19px] not-italic text-[18px] text-center text-white" style={{ maskImage: `url('${imgLabel1}')` }}>
        <p className="leading-[25px]">继续结账 1,50,000</p>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="absolute bottom-0 h-[142px] left-0 overflow-clip right-0" data-name="Controls">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 142">
        <path d="M0 0H411V142H0V0V0Z" fill="var(--fill-0, white)" fillOpacity="0.65" id="è·¯å¾" />
      </svg>
      <CheckoutButton />
    </div>
  );
}

function FiArrowLeft() {
  return (
    <div className="absolute left-0 size-[28px] top-[3.5px]" data-name="fi:arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="fi:arrow-left">
          <g id="è·¯å¾" />
          <mask height="28" id="mask0_1_159" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="28" x="0" y="0">
            <path clipRule="evenodd" d="M0 0H28V28H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾_2" />
          </mask>
          <g mask="url(#mask0_1_159)">
            <path d="M5.83337 14H29.1667" id="Vector" stroke="var(--stroke-0, #556674)" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p12a1cc80} id="è·¯å¾_3" stroke="var(--stroke-0, #556674)" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[35px] left-0 overflow-clip top-0 w-[171px]" data-name="画板 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="è·¯å¾" />
      </svg>
      <FiArrowLeft />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold justify-center leading-[0] left-[51px] not-italic text-[#21262c] text-[20px] top-[17.5px] whitespace-nowrap">
        <p className="leading-[35px]">你的购物策车</p>
      </div>
    </div>
  );
}

function WechatsystemDefault3XCopy() {
  return (
    <div className="absolute h-[32px] left-[280px] top-[1.5px] w-[87px]" data-name="Wechatsystem-default-@3x-Copy-9">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 32">
        <g clipPath="url(#clip0_1_138)" id="Wechatsystem-default-@3x-Copy-9">
          <path d={svgPaths.p173f1470} fill="var(--fill-0, white)" fillOpacity="0.15" id="è·¯å¾" stroke="var(--stroke-0, #F0F0F0)" />
          <g clipPath="url(#clip1_1_138)" id="Group-2">
            <path d={svgPaths.p5a46200} fill="var(--fill-0, black)" id="Combined-Shape" />
            <path clipRule="evenodd" d={svgPaths.p2fb10af0} fill="var(--fill-0, black)" fillRule="evenodd" id="Combined-Shape_2" />
          </g>
          <path d={svgPaths.p25214d00} fill="var(--fill-0, #A6A6A6)" id="è·¯å¾_2" />
          <g id="Fill-43">
            <path clipRule="evenodd" d={svgPaths.p239bfc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill-43_2" />
            <path clipRule="evenodd" d={svgPaths.p15c67a80} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill-43_3" />
            <path clipRule="evenodd" d={svgPaths.p1c467870} fill="var(--fill-0, black)" fillRule="evenodd" id="Fill-43_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_138">
            <rect fill="white" height="32" width="87" />
          </clipPath>
          <clipPath id="clip1_1_138">
            <rect fill="white" height="17.2698" transform="translate(56.7427 7.1958)" width="17.0983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[35px] left-[22px] overflow-clip top-[52px] w-[367px]" data-name="画板 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="è·¯å¾" />
      </svg>
      <Component1 />
      <WechatsystemDefault3XCopy />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[41.67%_3.8%_36.64%_89.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-369.626px_-20.002px] mask-size-[411px_48px] overflow-clip" style={{ maskImage: `url('${imgBattery}')` }} data-name="Battery">
      <div className="-translate-y-1/2 absolute h-[4.384px] right-0 top-[calc(50%-0.11px)] w-[1.644px]" data-name="Stroke">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.644 4.384">
          <path d={svgPaths.p14c09340} fill="var(--fill-0, black)" id="Stroke" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[0_14.89%_0_0]" data-name="路径">
        <div className="absolute inset-[-10.53%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.112 12.604">
            <path d={svgPaths.p34f30400} id="è·¯å¾" opacity="0.4" stroke="var(--stroke-0, black)" strokeWidth="1.096" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.53%_19.15%_10.53%_4.26%]" data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.728 8.22">
          <path d={svgPaths.pb99c260} fill="var(--fill-0, black)" id="è·¯å¾" />
        </svg>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute inset-[0_0_94.17%_0] overflow-clip" data-name="Status Bar">
      <Battery />
      <div className="absolute inset-[40.53%_11.93%_35.49%_83.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-343.322px_-19.454px] mask-size-[411px_48px]" style={{ maskImage: `url('${imgBattery}')` }} data-name="Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6318 11.5107">
          <path d={svgPaths.p251e3800} fill="var(--fill-0, black)" id="Signal" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['ABeeZee:Regular',sans-serif] leading-[0px] left-[calc(50%-171.52px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-33.976px_-15.506px] mask-size-[411px_48px] not-italic text-[16.44px] text-black top-[calc(50%-8.49px)] tracking-[-0.274px] whitespace-nowrap" style={{ maskImage: `url('${imgBattery}')` }}>
        9:41
      </p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents left-0 top-[789px]" data-name="画板 5">
      <div className="absolute h-[34px] left-0 top-[789px] w-[411px]" data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 34">
          <path clipRule="evenodd" d="M0 0H411V34H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="è·¯å¾" />
        </svg>
      </div>
      <div className="absolute h-[5px] left-[138.5px] top-[810px] w-[134px]" data-name="Home Indicator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
          <path clipRule="evenodd" d={svgPaths.p1b107900} fill="var(--fill-0, #121826)" fillRule="evenodd" id="Home Indicator" />
        </svg>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="购物车">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 823">
        <path clipRule="evenodd" d="M0 0H411V823H0V0Z" fill="var(--fill-0, #F5F5F8)" fillRule="evenodd" id="è·¯å¾" />
      </svg>
      <SystemBar />
      <CartItemList />
      <Controls />
      <Component2 />
      <StatusBar />
      <Component3 />
    </div>
  );
}