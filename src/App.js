import "./App.css";
import HeaderTop from "./comom/HeaderTop";
import BreadCrumb from "./comom/BreadCrumb";
import HeaderBot from "./comom/HeaderBot";
import Banner from "./comom/Banner";
import ContentHead from "./comom/ContentHead";
import ContentGrid from "./comom/ContentGrid";
import Footer from "./comom/Footer";
import FooterEnd from "./component/FooterEnd";

function App() {
  // const [abc, setAbc] = useState({ a: "", b: "", c: "", d: "" });
  // const handleChange = (e) => {
  //   // e.preventdefault();
  //   setAbc((state) => ({ ...state, [e.target.name]: e.target.value }));
  //   console.log(e);
  // };
  // console.log(abc);

  return (
    <div>
      <div className="container">
        <div className="container-headertop">
          <HeaderTop />
        </div>
        <div className="container-headerbot">
          <HeaderBot />
        </div>
      </div>
      {/* <form>
        <input name="a" value={abc.a} onChange={handleChange} />
        <input name="b" value={abc.b} onChange={handleChange} />
        <input name="c" value={abc.c} onChange={handleChange} />
        <input name="d" value={abc.d} onChange={handleChange} />
      </form> */}
      <div className="body">
        <div className="breadcrumb">
          <BreadCrumb />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="content-head">
          <ContentHead />
        </div>
        <div className="content">
          <ContentGrid />
        </div>
      </div>

      <div className="footer">
        <Footer />
        <FooterEnd />
      </div>
    </div>
  );
}

export default App;
