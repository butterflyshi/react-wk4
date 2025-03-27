import './footer.css';

export default function Footer() {
  return (
    <div>
      {/* 分隔線 */}
      <hr className="my-6 w-full border-t-2 border-primary rounded-sm opacity-100" />

      <footer className="footer bg-gray-900 text-white py-6">
        {/* 描述區塊 */}
        <div className="footer-content">
          <p className="font-extrabold">DESCRIPTIONS</p>
          <p className="indent-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe
            excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa
            debitis error!
          </p>
        </div>

        {/* 聯絡我們 */}
        <div className="footer-contactUs">
          <p className="font-extrabold">CONTACT US</p>
          <p className="text-gray-300">02 2732 1104</p>
        </div>

        {/* 版權聲明 */}
        <p className="footer-copyRight text-center text-gray-400 opacity-60">
          © 2006 - 2023 Copyright Digital Technology Design
        </p>
      </footer>
    </div>
  );
}