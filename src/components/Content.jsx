import React from "react";

const Content = () => {
  return (
    <div>
      <section>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1593160688806-4a3604ef4cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
      </section>
      <section className="welcome">
        <div className="left text-center p-5">
          <h2 className="text-danger">Italian Restorance</h2>
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            quaerat quae nam hic, inventore eius doloremque. Nulla nesciunt et
            rerum vitae repudiandae tempore aspernatur dicta.
          </p>
          <a href="">
            OUR STORY <i className="bi bi-arrow-right-circle"></i>
          </a>
        </div>
        <div className="right p-5">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-50"
          />
        </div>
      </section>

      <section className="discover">
        <div className="text-center text-white mt-5">
          <h1 className="text-danger">Discover</h1>
          <h2>Resto Happy</h2>
        </div>
      </section>
      <section className="p-5 food">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">Romantic Restaurant</a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus quibusdam delectus hic est illo aut, quae id,
                  quaerat sed excepturi atque. Aut, doloribus vitae.
                </p>
                <a href="">
                  LEARN MORE <i className="bi bi-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">Delicious Food</a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus quibusdam delectus hic est illo aut, quae id,
                  quaerat sed excepturi atque. Aut, doloribus vitae.
                </p>
                <a href="">
                  LEARN MORE <i className="bi bi-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">Red Wines You Love</a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus quibusdam delectus hic est illo aut, quae id,
                  quaerat sed excepturi atque. Aut, doloribus vitae.
                </p>
                <a href="">
                  LEARN MORE <i className="bi bi-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu p-5">
        <div className="text-center">
          <h1 className="text-danger">Discover</h1>
          <h1>Our Menu</h1>
          {/* <!-- Gallery --> */}
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1564851287875-fb73b71f0e4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1563897539633-7374c276c212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxmb29kfGVufDB8fDB8fHww"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1560963806-394647f30329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
                className="w-100 shadow-1-strong rounded mb-4"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Gallery --> */}
        </div>
      </section>
      <section className="contact d-flex p-4 justify-content-sm-center bg-secondary text-dark">
        <div className="item">
          <h2>Contact Us</h2>
          <table>
            <tr>
              <td>
                <i className="bi bi-envelope-at-fill p-1"></i>
              </td>
              <td>isnaayu2@gmail.com</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-telephone-fill p-1"></i>
              </td>
              <td>082350695505</td>
            </tr>
            <tr>
              <td>
                <i className="bi bi-geo-alt-fill p-1"></i>
              </td>
              <td>Tuban, Jawa Timur</td>
            </tr>
          </table>
        </div>
        <div className="item">
          <h2>Opening Times</h2>
          <p className="mb-2">09:30 AM – 11:00 PM </p>
          <p>Every Day </p>
        </div>
      </section>
    </div>
  );
};

export default Content;
