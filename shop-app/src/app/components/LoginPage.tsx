import { useState, useEffect } from "react";
import svgPaths from "../../imports/登录-1/svg-npjvcnzfsq";

// API 基础地址
const API_BASE_URL = 'http://localhost:3000';

function InputBox({ value, placeholder, isFocused }: { value: string; placeholder: string; isFocused: boolean }) {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Input Box">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 50">
        <path
          d={svgPaths.p26edab70}
          fill="white"
          stroke={isFocused ? "#2353FF" : "#AEBDC8"}
          strokeWidth="2"
        />
      </svg>
      <div className="absolute inset-[13px_20px_12px_20px] flex items-center">
        <p className="font-['ABeeZee:Regular',sans-serif] text-[18px] leading-[25px] text-[#21262c]">
          {value || placeholder}
        </p>
      </div>
    </div>
  );
}

function PhoneInput({
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}) {
  return (
    <div className="absolute h-[50px] left-0 overflow-clip right-0 top-[87px]" data-name="Phone Input">
      <InputBox value={value} placeholder="" isFocused={isFocused} />
      <input
        type="tel"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="请输入手机号"
        maxLength={11}
        className="absolute inset-[13px_20px_12px_20px] bg-transparent border-none outline-none font-['ABeeZee:Regular',sans-serif] text-[18px] leading-[25px] text-[#21262c] placeholder:text-[#21262c]"
      />
    </div>
  );
}

function CodeInput({
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}) {
  return (
    <div className="relative h-[50px] w-full overflow-clip" data-name="Code Input">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 50">
        <path
          d={svgPaths.p26edab70}
          fill="white"
          stroke={isFocused ? "#2353FF" : "#AEBDC8"}
          strokeWidth="2"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="请输入验证码"
        maxLength={6}
        className="absolute inset-[13px_20px_12px_20px] bg-transparent border-none outline-none font-['ABeeZee:Regular',sans-serif] text-[18px] leading-[25px] text-[#21262c] placeholder:text-[#21262c] w-full"
      />
    </div>
  );
}

function SendCodeButton({
  onClick,
  disabled,
  countdown
}: {
  onClick: () => void;
  disabled: boolean;
  countdown: number;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute h-[50px] right-0 top-[172px] w-[110px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center z-10"
      data-name="Send Code Button"
    >
      <svg className="absolute block inset-0 size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 110 50">
        <rect x="1" y="1" width="108" height="48" rx="8" fill="#2353FF" stroke="#2353FF" strokeWidth="2" />
      </svg>
      <span className="relative z-10 font-['ABeeZee:Regular',sans-serif] text-[14px] leading-[25px] text-white whitespace-nowrap">
        {countdown > 0 ? `${countdown}s` : '获取验证码'}
      </span>
    </button>
  );
}

function LoginButton({ onClick, disabled, loading }: { onClick: () => void; disabled: boolean; loading: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="absolute h-[60px] left-0 overflow-clip right-px top-[322px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
      data-name="Login Button"
    >
      <svg className="absolute block inset-0 size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 330 60">
        <path clipRule="evenodd" d={svgPaths.p35893400} fill="#2353FF" fillRule="evenodd" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold text-[18px] leading-[25px] text-white">
          {loading ? '登录中...' : '登录'}
        </p>
      </div>
    </button>
  );
}

function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="absolute left-0 right-0 top-[240px] flex items-center justify-center">
      <p className="font-['ABeeZee:Regular',sans-serif] text-[14px] leading-[20px] text-red-500">
        {message}
      </p>
    </div>
  );
}

function Form({
  phone,
  code,
  onPhoneChange,
  onCodeChange,
  onSubmit,
  onSendCode,
  phoneFocused,
  codeFocused,
  setPhoneFocused,
  setCodeFocused,
  countdown,
  sendCodeDisabled,
  loginDisabled,
  loading,
  errorMessage
}: {
  phone: string;
  code: string;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onSendCode: () => void;
  phoneFocused: boolean;
  codeFocused: boolean;
  setPhoneFocused: (focused: boolean) => void;
  setCodeFocused: (focused: boolean) => void;
  countdown: number;
  sendCodeDisabled: boolean;
  loginDisabled: boolean;
  loading: boolean;
  errorMessage: string;
}) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[382px] left-1/2 overflow-clip top-[calc(50%-84.5px)] w-[331px]" data-name="Form">
      <div className="absolute flex flex-col justify-center left-0 right-0 top-[26px] -translate-y-1/2">
        <p className="font-['ABeeZee:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] text-[38px] leading-[52px] text-[#21262c]">
          手机号登录
        </p>
      </div>
      <PhoneInput
        value={phone}
        onChange={onPhoneChange}
        onFocus={() => setPhoneFocused(true)}
        onBlur={() => setPhoneFocused(false)}
        isFocused={phoneFocused}
      />
      <div className="absolute h-[50px] left-0 right-[120px] top-[172px]">
        <CodeInput
          value={code}
          onChange={onCodeChange}
          onFocus={() => setCodeFocused(true)}
          onBlur={() => setCodeFocused(false)}
          isFocused={codeFocused}
        />
      </div>
      <SendCodeButton
        onClick={onSendCode}
        disabled={sendCodeDisabled}
        countdown={countdown}
      />
      <ErrorMessage message={errorMessage} />
      <LoginButton onClick={onSubmit} disabled={loginDisabled} loading={loading} />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[41.67%_4.73%_36.64%_87.04%] overflow-clip" data-name="Battery">
      <div className="-translate-y-1/2 absolute h-[4.384px] right-[-3.84px] top-[calc(50%-0.11px)] w-[1.644px]" data-name="Stroke">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.644 4.384">
          <path d={svgPaths.p14c09340} fill="black" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_35.16%]" data-name="路径">
        <div className="absolute inset-[-10.53%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.112 12.604">
            <path d={svgPaths.p34f30400} opacity="0.4" stroke="black" strokeWidth="1.096" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.53%_3.24%_10.53%_38.41%]" data-name="路径">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.728 8.22">
          <path d={svgPaths.pb99c260} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function StatusBar() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;

  return (
    <div className="absolute inset-[0_0_94.17%_0] overflow-clip" data-name="Status Bar">
      <Battery />
      <div className="absolute inset-[40.53%_11.93%_35.49%_83.53%]" data-name="Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6318 11.5107">
          <path d={svgPaths.p17b6900} fill="black" />
        </svg>
      </div>
      <p className="absolute font-['ABeeZee:Regular',sans-serif] leading-[0px] left-[calc(50%-171.52px)] text-[16.44px] text-black top-[calc(50%-8.49px)] tracking-[-0.274px] whitespace-nowrap">
        {timeString}
      </p>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute left-0 top-[789px]" data-name="Home Indicator Container">
      <div className="absolute h-[5px] left-[138.5px] top-[21px] w-[134px]" data-name="Home Indicator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
          <path clipRule="evenodd" d={svgPaths.p1b107900} fill="#121826" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [codeFocused, setCodeFocused] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 验证手机号格式
  const isValidPhone = (phone: string) => {
    return /^1[3456789]\d{9}$/.test(phone);
  };

  // 倒计时效果
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // 发送验证码
  const handleSendCode = async () => {
    if (!isValidPhone(phone)) {
      setErrorMessage("请输入正确的手机号");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/node/sendSms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: phone,
          codeType: 'sms'
        }),
      });

      const data = await response.json();

      if (data.code === 200) {
        setCountdown(60);
        console.log("验证码已发送:", data.data?.code);
      } else {
        setErrorMessage(data.message || "发送验证码失败");
      }
    } catch (error) {
      setErrorMessage("网络错误，请检查后端服务是否启动");
      console.error("发送验证码错误:", error);
    } finally {
      setLoading(false);
    }
  };

  // 验证码登录
  const handleSubmit = async () => {
    if (!isValidPhone(phone)) {
      setErrorMessage("请输入正确的手机号");
      return;
    }

    if (!code || code.length !== 6) {
      setErrorMessage("请输入6位验证码");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/node/verifyCode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: phone,
          code: code
        }),
      });

      const data = await response.json();

      if (data.code === 200) {
        // 保存 token
        if (data.data?.token) {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('refreshToken', data.data.refreshToken);
          localStorage.setItem('mobile', data.data.mobile);
        }
        console.log("登录成功:", data.data);
        onLoginSuccess();
      } else {
        setErrorMessage(data.message || "验证码错误");
      }
    } catch (error) {
      setErrorMessage("网络错误，请检查后端服务是否启动");
      console.error("登录错误:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
    setErrorMessage("");
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCode(value);
    setErrorMessage("");
  };

  const sendCodeDisabled = !isValidPhone(phone) || countdown > 0 || loading;
  const loginDisabled = !isValidPhone(phone) || !code || code.length !== 6 || loading;

  return (
    <div className="bg-white relative size-full" data-name="登录">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 411 823">
        <path clipRule="evenodd" d="M0 0H411V823H0V0Z" fill="#F5F5F8" fillRule="evenodd" />
      </svg>
      <Form
        phone={phone}
        code={code}
        onPhoneChange={handlePhoneChange}
        onCodeChange={handleCodeChange}
        onSubmit={handleSubmit}
        onSendCode={handleSendCode}
        phoneFocused={phoneFocused}
        codeFocused={codeFocused}
        setPhoneFocused={setPhoneFocused}
        setCodeFocused={setCodeFocused}
        countdown={countdown}
        sendCodeDisabled={sendCodeDisabled}
        loginDisabled={loginDisabled}
        loading={loading}
        errorMessage={errorMessage}
      />
      <StatusBar />
      <HomeIndicator />
    </div>
  );
}