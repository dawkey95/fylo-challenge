const Content = () => {
  return (
    <>
      <section className="content-section">
        <img
          src="/images/illustration-stay-productive.png"
          alt=""
          className="content-img"
        />
        <div className="content-text">
          <h2 className="content-title">Stay productive, wherever you are</h2>
          <p className="content-p">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <br />
          <p className="content-p"></p>
        </div>
        <button className="content-btn">
          <a href="#">See how Fylo works</a>
          <img src="/images/icon-arrow.svg" alt="arrow point right" />
        </button>
      </section>
    </>
  );
};

export default Content;