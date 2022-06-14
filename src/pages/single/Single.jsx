import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9478292910</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Language:</span>
                  <span className="itemValue">
                    English
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Blog:</span>
                  <span className="itemValue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate. Ornare suspendisse sed nisi lacus sed. A condimentum vitae sapien pellentesque habitant morbi. Augue lacus viverra vitae congue eu consequat. Aliquam vestibulum morbi blandit cursus risus. Enim diam vulputate ut pharetra. Elit eget gravida cum sociis natoque penatibus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Pharetra massa massa ultricies mi. Nulla aliquet enim tortor at. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. In fermentum posuere urna nec tincidunt praesent. Sed risus pretium quam vulputate dignissim. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Turpis in eu mi bibendum neque. Lectus nulla at volutpat diam ut venenatis tellus. Tristique nulla aliquet enim tortor at auctor urna nunc id. Consectetur adipiscing elit duis tristique sollicitudin. Pharetra vel turpis nunc eget. Magna sit amet purus gravida quis blandit turpis cursus. Tempus quam pellentesque nec nam aliquam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Faucibus vitae aliquet nec ullamcorper sit. Lorem donec massa sapien faucibus et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Leo a diam sollicitudin tempor id. Scelerisque eu ultrices vitae auctor eu augue. Lobortis mattis aliquam faucibus purus in massa. Ut diam quam nulla porttitor massa id. Rhoncus urna neque viverra justo nec ultrices dui sapien. Enim eu turpis egestas pretium aenean pharetra magna ac. Nibh cras pulvinar mattis nunc sed blandit. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Amet nulla facilisi morbi tempus iaculis urna id. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Consequat ac felis donec et odio pellentesque diam volutpat. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Magna etiam tempor orci eu lobortis elementum. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Vitae turpis massa sed elementum tempus egestas. Ultricies tristique nulla aliquet enim tortor. Scelerisque fermentum dui faucibus in ornare quam viverra. Tortor condimentum lacinia quis vel eros donec ac.</span>
                </div>
              </div>
            </div>
          </div>
          

          
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
