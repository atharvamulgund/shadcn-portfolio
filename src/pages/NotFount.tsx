import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const NotFount = () => {
  return (
    <>
     <section className='max-w-screen-lg  m-auto flex justify-center flex-col items-center gap-6 relative overflow-y-none'>
	 <Navbar />
      <div className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">400</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2 text-3xl">Look like you're lost</h3>

                  <p className="text-2xl">
                    the page you are looking for not avaible!
                  </p>

                  <a href="/">
                    <Button>Go Home</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	 </section>
    </>
  );
};

export default NotFount;
