import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }: any) {
  return (
    <div className="">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
