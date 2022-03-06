import React from 'react'
import logo from './../img/icon&logo/logo.PNG'
import footer_img from './../img/icon&logo/footer_img.PNG'
import facebook from './../img/icon&logo/icon-facebook.jpg'
import zalo from './../img/icon&logo/icon_zalo.png'
import instagram from './../img/icon&logo/icon-instagram.jpg'
import google from './../img/icon&logo/icon-google.png'
import './../App.css'
export default function Footer() {
  return (
    <footer className="footer">
        <div className="ui one column grid">
          <img className="ui fluid image" src={footer_img} />
        </div>
        <div className="ui one column centered grid">
          <div className="column logo-header animate__animated animate__flipInX">
            <img  src={logo} className="ui medium image" />
          </div>
        </div>
        <div className="footer-address">
          <div className="ui grid centered">
            <div className="doubling five column row">
              <div className="column">
                <h3>Hỗ Trợ Khách Hàng</h3>
                <div className="ui list">
                  <div className="item">
                    Hệ Thống Cửa Hàng
                  </div>
                  <div className="item">
                    Địa chỉ: Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội
                  </div>
                  <div className="item">
                    Điện thoại:0123456789
                  </div>
                  <div className="item">
                    MST: 01A8016500
                  </div>
                </div>
              </div>
              <div className="column">
                <h3>Hỗ Trợ Khách Hàng</h3>
                <div className="ui list">
                  <div className="item">
                    Trang chủ
                  </div>
                  <div className="item">
                    Giới thiệu
                  </div>
                  <div className="item">
                    Tất cả sản phẩm
                  </div>
                  <div className="item">
                    Liên hệ
                  </div>
                </div>
              </div>
              <div className="column">
                <h3>Hỗ Trợ Khách Hàng</h3>
                <div className="ui list">
                  <div className="item">
                    Hệ Thống Cửa Hàng
                  </div>
                  <div className="item">
                    Địa chỉ: Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội
                  </div>
                  <div className="item">
                    Điện thoại:0123456789
                  </div>
                  <div className="item">
                    MST: 01A8016500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui grid centered">
          <div className="doubling eight column row">
            <div className="column icon-contacts">
              <a href="#">
                <img src={facebook} className="ui rounded mini image" alt="" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="column icon-contacts">
              <a href="#">
                <img src={zalo} className="ui rounded mini image" alt="" />
                <p>Zalo</p>
              </a>
            </div>
            <div className="column icon-contacts">
              <a href="#">
                <img src={instagram} className="ui rounded mini image" alt="" />
                <p>Instagram</p>
              </a>
            </div>
            <div className="column icon-contacts">
              <a href="#">
                <img src={google} className="ui rounded mini image" alt="" />
                <p>Google</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
