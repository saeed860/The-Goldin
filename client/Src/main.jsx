import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ShieldCheck, Wallet, ArrowLeftRight, ChartNoAxesCombined, Menu, X, ChevronLeft, LockKeyhole, Zap, Coins, CircleHelp } from 'lucide-react';
import './style.css';

const GOLD_GRAM = 8250000; // DEMO ONLY — replace with a verified market-data service
const USDT_TOMAN = 91000;  // DEMO ONLY — replace with a verified FX source
const toman = n => Math.round(n).toLocaleString('fa-IR');
function App(){
  const [amount,setAmount] = useState('10000000');
  const [mode,setMode] = useState('buy');
  const [mobile,setMobile] = useState(false);
  const grams = useMemo(()=>Math.max(0,Number(amount||0))/GOLD_GRAM,[amount]);
  return <div className="app">
    <div className="topline">گلدین؛ تجربه‌ای شفاف برای مدیریت دارایی طلا <span>● بازار آزمایشی</span></div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="brandmark">G</span><span>گلدین<small>GOLDIN</small></span></a>
      <button className="mobile-toggle" onClick={()=>setMobile(!mobile)} aria-label="منو">{mobile?<X/>:<Menu/>}</button>
      <nav className={mobile?'open':''}>
        <a href="#prices">قیمت‌ها</a><a href="#calculator">محاسبه‌گر</a><a href="#how">راهنمای شروع</a><a href="#security">امنیت</a>
      </nav>
      <div className="nav-actions"><button className="btn ghost">ورود</button><button className="btn primary">ایجاد حساب <ChevronLeft size={16}/></button></div>
    </header>

    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> مدیریت هوشمند دارایی</div>
          <h1>ارزش طلا،<br/><em>همیشه همراه شما</em></h1>
          <p>در گلدین، ارزش دارایی خود را شفاف ببینید و برای خرید و فروش طلا، آگاهانه تصمیم بگیرید.</p>
          <div className="hero-cta"><button className="btn primary big">شروع تجربه گلدین <ChevronLeft/></button><a href="#how" className="text-link">گلدین چطور کار می‌کند؟</a></div>
          <div className="trustline"><span><ShieldCheck/> شفافیت در محاسبه</span><span><LockKeyhole/> امنیت حساب</span><span><Zap/> تجربه سریع</span></div>
        </div>
        <div className="hero-panel">
          <div className="panel-head"><div><small>نمای کلی بازار</small><b>دارایی‌های منتخب</b></div><span className="live"><i/> نمایشی</span></div>
          <div className="asset gold"><div className="coin">Au</div><div className="asset-name"><b>طلای ۱۸ عیار</b><small>هر گرم · تومان</small></div><div className="asset-price"><b>{toman(GOLD_GRAM)}</b><small>قیمت نمونه</small></div></div>
          <div className="asset"><div className="coin usdt">₮</div><div className="asset-name"><b>تتر USDT</b><small>هر واحد · تومان</small></div><div className="asset-price"><b>{toman(USDT_TOMAN)}</b><small>قیمت نمونه</small></div></div>
          <div className="panel-foot"><ChartNoAxesCombined/><span>اتصال به منبع قیمت در مرحله راه‌اندازی عملیاتی انجام می‌شود.</span></div>
        </div>
        <div className="glow"/>
      </section>

      <section className="stats wrap"><div><b>۲۴/۷</b><span>دسترسی به حساب</span></div><div><b>شفاف</b><span>نمایش جزئیات محاسبه</span></div><div><b>امن</b><span>طراحی با رویکرد امنیت</span></div><div><b>ساده</b><span>تجربه کاربری فارسی</span></div></section>

      <section className="section wrap" id="prices">
        <div className="section-title"><div><label>MARKET OVERVIEW</label><h2>نمای بازار</h2></div><p>اعداد زیر صرفاً برای نمایش اولیه رابط کاربری هستند و قیمت زنده محسوب نمی‌شوند.</p></div>
        <div className="market-grid"><div className="market-card"><span>طلای ۱۸ عیار · هر گرم</span><b>{toman(GOLD_GRAM)} <small>تومان</small></b><div className="fake-chart"><svg viewBox="0 0 500 100" preserveAspectRatio="none"><path d="M0 80 C35 65 50 77 85 50 S140 70 180 38 S240 57 280 30 S340 55 380 22 S450 40 500 8" fill="none" stroke="#d7ad57" strokeWidth="3"/><path d="M0 80 C35 65 50 77 85 50 S140 70 180 38 S240 57 280 30 S340 55 380 22 S450 40 500 8 L500 100 L0 100Z" fill="url(#g)" opacity=".14"/><defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d7ad57"/><stop offset="1" stopColor="#d7ad57" stopOpacity="0"/></linearGradient></defs></svg></div></div><div className="market-card side"><span>تتر · هر واحد</span><b>{toman(USDT_TOMAN)} <small>تومان</small></b><div className="mini-bars">{[35,48,40,65,52,74,62,88,68,95,78,100].map((v,i)=><i key={i} style={{height:v+'%'}}/>)}</div></div></div>
      </section>

      <section className="section calculator-section" id="calculator"><div className="wrap calc-layout">
        <div className="calc-copy"><label>GOLD CALCULATOR</label><h2>قبل از تصمیم،<br/><em>محاسبه کنید.</em></h2><p>مقدار تقریبی طلا را بر اساس مبلغ واردشده ببینید. نرخ‌ها در این نسخه آزمایشی هستند.</p><div className="calc-note"><CircleHelp/> محاسبه نهایی در نسخه عملیاتی بر اساس قیمت لحظه‌ای، کارمزد و شرایط معامله انجام می‌شود.</div></div>
        <div className="calc-card" >
          <div className="tabs"><button className={mode==='buy'?'active':''} onClick={()=>setMode('buy')}>مبلغ به طلا</button><button className={mode==='value'?'active':''} onClick={()=>setMode('value')}>طلا به مبلغ</button></div>
          <label>{mode==='buy'?'مبلغ موردنظر (تومان)':'مقدار طلا (گرم)'}</label>
          <div className="amount-input"><input value={amount} onChange={e=>setAmount(e.target.value.replace(/[^\d]/g,''))}/><span>{mode==='buy'?'تومان':'واحد ورودی'}</span></div>
          <div className="quick"><button onClick={()=>setAmount('5000000')}>۵ میلیون</button><button onClick={()=>setAmount('10000000')}>۱۰ میلیون</button><button onClick={()=>setAmount('25000000')}>۲۵ میلیون</button></div>
          <div className="result"><span>{mode==='buy'?'طلای تقریبی':'ارزش تقریبی'}</span><b>{mode==='buy'?grams.toLocaleString('fa-IR',{maximumFractionDigits:5})+' گرم':toman(Number(amount)*GOLD_GRAM)+' تومان'}</b><small>بدون احتساب کارمزد احتمالی · نرخ نمونه</small></div>
          <button className="btn primary full">ادامه در نسخه عملیاتی <ChevronLeft/></button>
        </div>
      </div></section>

      <section className="section wrap" id="how"><div className="section-title"><div><label>HOW IT WORKS</label><h2>شروعی ساده و روشن</h2></div></div><div className="steps"><article><i>۰۱</i><Wallet/><h3>ساخت حساب کاربری</h3><p>حساب خود را ایجاد کنید و مراحل تأیید هویت را طبق ضوابط تکمیل کنید.</p></article><article><i>۰۲</i><Coins/><h3>شارژ و انتخاب دارایی</h3><p>پس از فعال‌شدن درگاه‌های مجاز، موجودی و روش پرداخت را انتخاب کنید.</p></article><article><i>۰۳</i><ArrowLeftRight/><h3>مدیریت و پیگیری</h3><p>جزئیات سفارش‌ها، موجودی و سوابق در پنل شما قابل مشاهده خواهد بود.</p></article></div></section>

      <section className="security" id="security"><div className="wrap security-inner"><div><label>SECURITY FIRST</label><h2>اعتماد، با شفافیت ساخته می‌شود.</h2><p>گلدین با اولویت امنیت حساب، ثبت رویدادها و قابلیت پیگیری تراکنش‌ها طراحی می‌شود.</p></div><div className="security-points"><span><ShieldCheck/> احراز هویت و کنترل دسترسی</span><span><LockKeyhole/> محافظت از داده‌ها و نشست‌ها</span><span><ChartNoAxesCombined/> ثبت و گزارش‌گیری رویدادها</span></div></div></section>
    </main>
    <footer className="wrap footer"><a className="brand" href="#"><span className="brandmark">G</span><span>گلدین<small>GOLDIN</small></span></a><span>نسخه آغازین محصول · کلیه حقوق محفوظ است.</span><span>پشتیبانی: پس از تعیین اطلاعات تماس تکمیل می‌شود.</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
