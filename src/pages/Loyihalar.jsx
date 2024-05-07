import Links from "../components/Links";

const Loyihalar = () => {
  return (
    <>
      <div className="Loyihalar">
        <div className="container">
          <div className="loyiha_header">
            <div className="news_link">
              Bosh sahifa / <span>Loyihalar</span>
            </div>
            <div className="news_h">Loyihalar</div>
          </div>
          <div className="loyiha_main">
            <div className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Qidirish"
              />
              <button className="search__button">
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="loyiha_header_box">
              <div className="loyiha_h_item">
                <div className="item_p">#</div>
                <img src="/img/filter.png" alt="" />
              </div>
              <div className="loyiha_h_item">
                <div className="item_p">Fayl nomi</div>
                <img src="/img/filter.png" alt="" />
              </div>
              <div className="loyiha_h_item">
                <div className="item_p">Manzil</div>
                <img src="/img/filter.png" alt="" />
              </div>
              <div className="loyiha_h_item">
                <div className="item_p">Holati</div>
                <img src="/img/filter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default Loyihalar;
